"use client";

import * as React from "react";

type TrafficBand = "low" | "medium" | "high";

/** Semaphore logic: <60 low, 60–80 medium, >80 high. */
function getTrafficBand(value: number): TrafficBand {
  const v = Math.max(0, Math.min(100, value));
  if (v < 60) return "low";
  if (v <= 80) return "medium";
  return "high";
}

const barColorClass: Record<TrafficBand, string> = {
  low: "bg-ds-score-low",
  medium: "bg-ds-score-medium",
  high: "bg-ds-score-high",
};

type ProgressBarProps = {
  /** 0–100 */
  value: number;
  /** Back-compat: use score/semafor colors (alias for color="score"). */
  useScoreColors?: boolean;
  /** Optional override for fill color (rare; prefer defaults). */
  color?: "primary" | "score";
  className?: string;
};

export function ProgressBar({
  value,
  useScoreColors = false,
  color,
  className = "",
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  const band = getTrafficBand(value);
  const fillClass =
    color === "primary"
      ? "bg-ds-primary-strong"
      : color === "score" || useScoreColors
        ? barColorClass[band]
        : barColorClass[band];

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`h-3 w-full overflow-hidden rounded-full bg-ds-border-subtle ${className}`.trim()}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out)] ${fillClass}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
