"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { AlertTriangle, CircleDashed, Sparkles } from "lucide-react";

export type ScoreBand = "low" | "medium" | "high";

/**
 * Score band (default DS: low &lt; 34, medium &lt; 67, high ≥ 67).
 * Optional `bandThresholds` e.g. `{ mediumFrom: 50, highFrom: 80 }` for legacy card coloring (red / amber / green).
 */
export function getScoreBand(
  value: number,
  bandThresholds?: { mediumFrom: number; highFrom: number }
): ScoreBand {
  const v = Math.max(0, Math.min(100, value));
  const mediumFrom = bandThresholds?.mediumFrom ?? 34;
  const highFrom = bandThresholds?.highFrom ?? 67;
  if (v < mediumFrom) return "low";
  if (v < highFrom) return "medium";
  return "high";
}

/** Colors per Figma: track 500, filled part 700, text 900. */
const scoreTrackClass: Record<ScoreBand, string> = {
  low: "text-ds-red-500",
  medium: "text-ds-yellow-500",
  high: "text-ds-green-500",
};
const scoreFillClass: Record<ScoreBand, string> = {
  low: "text-ds-red-700",
  medium: "text-ds-yellow-700",
  high: "text-ds-green-700",
};
const scoreTextClass: Record<ScoreBand, string> = {
  low: "text-ds-red-900",
  medium: "text-ds-yellow-900",
  high: "text-ds-green-900",
};

const scoreIconByBand: Record<ScoreBand, LucideIcon> = {
  low: AlertTriangle,
  medium: CircleDashed,
  high: Sparkles,
};

/** Arc thickness — bold, not a thin line. */
const SCORE_STROKE_WIDTH = 12;
/** Default size (px). Font ratio: 48px at 160px donut -> size * 0.3 */
const SCORE_DEFAULT_SIZE = 120;
const SCORE_FONT_SIZE_RATIO = 48 / 160;

type ScoreProps = {
  /** 0–100 */
  value: number;
  /** halfDonut = semicircle (card), circle = full ring with the number in the center */
  variant?: "halfDonut" | "circle";
  /** Size in px (default 120). At 160px, the font is 48px. */
  size?: number;
  className?: string;
  /** For halfDonut: show the value next to it. For circle: the number is always rendered in the center. */
  showValue?: boolean;
  /** Override band splits (defaults: mediumFrom 34, highFrom 67). */
  bandThresholds?: { mediumFrom: number; highFrom: number };
};

/** Half-donut: bottom semicircle. Path and viewBox follow the spec. */
function HalfDonut({
  value,
  trackClass,
  fillClass,
  size = SCORE_DEFAULT_SIZE,
  strokeWidth = SCORE_STROKE_WIDTH,
}: {
  value: number;
  trackClass: string;
  fillClass: string;
  size?: number;
  strokeWidth?: number;
}) {
  const v = Math.max(0, Math.min(100, value)) / 100;
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = Math.PI * r;
  const filled = circumference * v;
  const pathD = `M ${strokeWidth / 2} ${cy} A ${r} ${r} 0 0 1 ${size - strokeWidth / 2} ${cy}`;
  const viewBox = `0 0 ${size} ${size / 2 + strokeWidth / 2}`;

  return (
    <svg width={size} height={size / 2 + strokeWidth / 2} viewBox={viewBox} className="overflow-visible">
      <path d={pathD} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={trackClass} strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={fillClass} strokeLinecap="round" strokeDasharray={`${filled} ${circumference}`} />
    </svg>
  );
}

/** Full circular ring: track 500, fill 700. The 900-number is rendered in Score() in the center. */
function CircleScore({
  value,
  trackClass,
  fillClass,
  size = SCORE_DEFAULT_SIZE,
  strokeWidth = SCORE_STROKE_WIDTH,
}: {
  value: number;
  trackClass: string;
  fillClass: string;
  size?: number;
  strokeWidth?: number;
}) {
  const v = Math.max(0, Math.min(100, value)) / 100;
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  const filled = circumference * v;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible -rotate-90">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={trackClass} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={fillClass} strokeDasharray={`${filled} ${circumference}`} strokeLinecap="round" />
    </svg>
  );
}

export function Score({
  value,
  variant = "halfDonut",
  size = SCORE_DEFAULT_SIZE,
  className = "",
  showValue = false,
  bandThresholds,
}: ScoreProps) {
  const band = getScoreBand(value, bandThresholds);
  const trackClass = scoreTrackClass[band];
  const fillClass = scoreFillClass[band];
  const textClass = scoreTextClass[band];
  const roundedValue = Math.round(Math.max(0, Math.min(100, value)));
  const fontSizePx = Math.round(size * SCORE_FONT_SIZE_RATIO);

  if (variant === "circle") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`.trim()} aria-hidden>
        <CircleScore value={value} trackClass={trackClass} fillClass={fillClass} size={size} strokeWidth={SCORE_STROKE_WIDTH} />
        <span className={`pointer-events-none absolute inset-0 flex items-center justify-center font-bold ${textClass}`} style={{ fontSize: fontSizePx }}>
          {roundedValue}
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center justify-end ${className}`.trim()} aria-hidden>
      <HalfDonut value={value} trackClass={trackClass} fillClass={fillClass} size={size} strokeWidth={SCORE_STROKE_WIDTH} />
      <span className={`mt-0.5 font-bold leading-none ${textClass}`} style={{ fontSize: fontSizePx }}>
        {roundedValue}
      </span>
    </div>
  );
}
