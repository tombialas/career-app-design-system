/**
 * Motion tokens: duration and easing.
 * Use for transitions (hover, open/close) so animations feel consistent and polished.
 */

/** Duration – when to use: fast = hover/feedback, normal = dropdown/modal open, slow = sidebar/drawer. */
export const durationTokens = {
  fast: "200ms",
  normal: "300ms",
  slow: "500ms",
} as const;

/**
 * Easing – ease-out-expo style: rychlý start, plynulý dojezd.
 * Pro plovoucí karty, modály, sidebar – ne lineární, ale s „krásným dojezdem“.
 */
export const easingTokens = {
  /** cubic-bezier(0.16, 1, 0.3, 1) – ease-out-expo, doporučený pro UI. */
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  /** cubic-bezier(0, 0, 0.2, 1) – Material ease-out, fallback. */
  out: "cubic-bezier(0, 0, 0.2, 1)",
  /** linear – pouze když opravdu potřebuješ (progress, indeterminate). */
  linear: "linear",
} as const;
