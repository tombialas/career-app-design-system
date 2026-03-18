"use client";

import type { ReactNode } from "react";

/**
 * Figma: barevné chipy = bg 500, border 700, text 900.
 * light = UI bg, dark = UI dark card.
 * Aliasy: default/primary/scoreHigh/scoreMedium/scoreLow pro zpětnou kompatibilitu.
 */
type ChipVariant =
  | "green"
  | "red"
  | "yellow"
  | "purple"
  | "mint"
  | "blue"
  | "light"
  | "dark"
  | "language"
  | "requirementMatched"
  | "requirementMissing"
  | "default"
  | "primary"
  | "scoreHigh"
  | "scoreMedium"
  | "scoreLow";

const chipVariantClasses: Record<string, string> = {
  green: "bg-ds-green-500 text-ds-green-900 border border-ds-green-700",
  red: "bg-ds-red-500 text-ds-red-900 border border-ds-red-700",
  yellow: "bg-ds-yellow-500 text-ds-yellow-900 border border-ds-yellow-700",
  purple: "bg-ds-purple-500 text-ds-purple-900 border border-ds-purple-700",
  mint: "bg-ds-mint-500 text-ds-mint-900 border border-ds-mint-700",
  blue: "bg-ds-blue-500 text-ds-blue-900 border border-ds-blue-700",
  light:
    "bg-ds-ui-bg text-ds-text-primary border border-ds-border-subtle",
  dark:
    "bg-ds-surface-card-dark text-ds-on-dark border border-white/20",
  language:
    "bg-ds-yellow-100 text-ds-yellow-900 border border-ds-yellow-700",
  requirementMatched:
    "bg-ds-primary-soft text-ds-primary-strong border border-ds-primary-strong",
  requirementMissing:
    "bg-ds-surface-card text-ds-text-muted border border-ds-border-subtle",
  /* selected pouze pro light / dark */
  lightSelected:
    "bg-ds-primary-soft text-ds-text-primary border border-ds-primary-strong",
  darkSelected:
    "bg-ds-primary-base text-ds-on-dark border border-ds-primary-strong",
};

const variantAliases: Record<string, string> = {
  default: "light",
  primary: "purple",
  scoreHigh: "green",
  scoreMedium: "yellow",
  scoreLow: "red",
};

type ChipProps = {
  variant?: ChipVariant;
  /** Pouze u light/dark: zvýrazněný stav (např. vybraný filtr). */
  selected?: boolean;
  children: ReactNode;
  className?: string;
};

export function Chip({
  variant = "light",
  selected = false,
  children,
  className = "",
}: ChipProps) {
  const base = variantAliases[variant] ?? variant;
  const stateClasses =
    selected && (base === "light" || base === "dark")
      ? chipVariantClasses[`${base}Selected`]
      : chipVariantClasses[base];
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold " +
        "transition-transform transition-colors duration-[var(--duration-ds-fast)] ease-[var(--ease-ds-out)] " +
        "hover:scale-[1.03] active:scale-[0.98] " +
        stateClasses +
        (className ? " " + className : "")
      }
    >
      {children}
    </span>
  );
}
