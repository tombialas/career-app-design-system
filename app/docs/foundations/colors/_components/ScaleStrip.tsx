"use client";

import * as React from "react";
import { Crown } from "lucide-react";

type Shade = {
  step: string;
  value: string;
};

type ScaleStripProps = {
  title: string;
  subtitle?: string;
  tokenFamily: string;
  shades: Shade[];
};

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return { r, g, b };
}

function srgbToLinear(v: number) {
  const s = v / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const rl = srgbToLinear(r);
  const gl = srgbToLinear(g);
  const bl = srgbToLinear(b);
  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}

function contrastRatio(hexA: string, hexB: string) {
  const l1 = relativeLuminance(hexA);
  const l2 = relativeLuminance(hexB);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getAccessibleTextColor(hex: string) {
  const white = "#ffffff";
  const black = "#111111";
  const whiteRatio = contrastRatio(hex, white);
  const blackRatio = contrastRatio(hex, black);
  return whiteRatio >= blackRatio ? "text-white/95" : "text-black/85";
}

function rgbToHsl(r: number, g: number, b: number) {
  const rr = r / 255;
  const gg = g / 255;
  const bb = b / 255;
  const max = Math.max(rr, gg, bb);
  const min = Math.min(rr, gg, bb);
  const delta = max - min;
  let h = 0;
  if (delta !== 0) {
    if (max === rr) h = ((gg - bb) / delta) % 6;
    else if (max === gg) h = (bb - rr) / delta + 2;
    else h = (rr - gg) / delta + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
}

function rgbToCmyk(r: number, g: number, b: number) {
  const rr = r / 255;
  const gg = g / 255;
  const bb = b / 255;
  const k = 1 - Math.max(rr, gg, bb);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  const c = (1 - rr - k) / (1 - k);
  const m = (1 - gg - k) / (1 - k);
  const y = (1 - bb - k) / (1 - k);
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
  };
}

export function ScaleStrip({ title, subtitle, tokenFamily, shades }: ScaleStripProps) {
  const defaultStep = React.useMemo(() => {
    const has500 = shades.some((s) => s.step === "500");
    return has500 ? "500" : shades[0]?.step ?? "";
  }, [shades]);

  const [activeStep, setActiveStep] = React.useState(defaultStep);

  React.useEffect(() => {
    setActiveStep(defaultStep);
  }, [defaultStep]);

  const activeShade = shades.find((s) => s.step === activeStep) ?? shades[0];
  if (activeShade == null) return null;

  return (
    <div className="space-y-4 py-2">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">{title}</p>
        {subtitle != null && <p className="text-sm text-ds-text-secondary">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-1.5">
        {shades.map((shade) => {
          const isActive = shade.step === activeStep;
          const isPrimary = shade.step === "500";
          const textColorClass = getAccessibleTextColor(shade.value);
          return (
            <button
              key={`${tokenFamily}-${shade.step}`}
              type="button"
              onClick={() => setActiveStep(shade.step)}
              className={`
                relative min-w-0 rounded-full border transition-all duration-300 ease-out
                ${isActive ? "h-14 flex-[2.8] border-ds-primary-strong ring-2 ring-ds-primary-strong/30" : "h-10 flex-1 border-ds-border-subtle hover:h-11 hover:flex-[1.35]"}
              `.trim()}
              style={{ backgroundColor: shade.value }}
              aria-pressed={isActive}
              aria-label={`${tokenFamily}.${shade.step}`}
              title={`${tokenFamily}.${shade.step}`}
            >
              <span
                className={`absolute inset-0 flex items-center justify-center text-xs font-semibold tracking-[0.14em] ${textColorClass}`.trim()}
              >
                {isPrimary && <Crown className="mr-1 h-3.5 w-3.5" aria-hidden />}
                {shade.step}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 rounded-xl border border-ds-border-subtle/70 bg-ds-surface-card/50 p-4 sm:grid-cols-[140px,1fr]">
        <div
          className="h-20 w-full rounded-lg border border-ds-border-subtle/60 sm:h-full"
          style={{ backgroundColor: activeShade.value }}
        />
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Selected shade</p>
            <p className="text-xl font-semibold tracking-[0.08em] text-ds-text-primary">
              {tokenFamily}.{activeShade.step}
            </p>
          </div>
          <div className="grid gap-1 text-sm text-ds-text-secondary sm:grid-cols-2">
            {(() => {
              const { r, g, b } = hexToRgb(activeShade.value);
              const hsl = rgbToHsl(r, g, b);
              const cmyk = rgbToCmyk(r, g, b);
              return (
                <>
                  <p>
                    <strong>HEX</strong>: <span className="font-mono">{activeShade.value}</span>
                  </p>
                  <p>
                    <strong>RGB</strong>:{" "}
                    <span className="font-mono">
                      {r}, {g}, {b}
                    </span>
                  </p>
                  <p>
                    <strong>HSL</strong>:{" "}
                    <span className="font-mono">
                      {hsl.h}, {hsl.s}%, {hsl.l}%
                    </span>
                  </p>
                  <p>
                    <strong>CMYK</strong>:{" "}
                    <span className="font-mono">
                      {cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%
                    </span>
                  </p>
                </>
              );
            })()}
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">
            {tokenFamily}.{activeShade.step}
          </p>
          <div className="h-5">
            {activeShade.step === "500" ? (
              <span className="inline-flex items-center rounded-full bg-ds-primary-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ds-primary-strong">
                <Crown className="mr-1 h-3.5 w-3.5" aria-hidden />
                Primary shade
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

