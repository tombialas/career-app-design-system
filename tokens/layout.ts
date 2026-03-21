/** Max width for content container (readable line length, alignment). */
export const containerTokens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/** Spacing scale (4px base). Use for padding, gaps, margins. */
export const spacingTokens = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

/** Border radius. Cards, buttons, inputs. */
export const radiusTokens = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 9999,
} as const;

/**
 * Nested UI track (tabs, segment control): concentric corners.
 * Rule: R_outer = R_inner + trackPadding (same axis). Implemented in CSS as
 * `--radius-ds-nested-outer: calc(var(--radius-ds-nested-inner) + var(--spacing-ds-tab-track-pad))`.
 * Tailwind: inner `rounded-[var(--radius-ds-nested-inner)]`, outer `rounded-[var(--radius-ds-nested-outer)]`.
 */
export const nestedTabChromeTokens = {
  innerRadiusPx: radiusTokens.md,
  trackPaddingPx: spacingTokens[1],
  outerRadiusPx: radiusTokens.md + spacingTokens[1],
} as const;

/** Elevation (box-shadow). Flat, card, modal. */
export const elevationTokens = {
  none: "none",
  card: "0 1px 3px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.02)",
  cardHover: "0 4px 16px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.02)",
  modal: "0 24px 48px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.04)",
} as const;

/**
 * Diffuse shadows: large blur, clearly visible.
 * Use for inputs, floating elements, subtle lift.
 */
export const shadowTokens = {
  diffuseSm: "0 0 20px rgba(0,0,0,0.04), 0 0 40px rgba(0,0,0,0.02)",
  diffuseMd: "0 0 32px rgba(0,0,0,0.06), 0 0 48px rgba(0,0,0,0.03)",
  diffuseLg: "0 0 48px rgba(0,0,0,0.08), 0 0 80px rgba(0,0,0,0.04)",
} as const;

/**
 * Z-Index scale. Jedna škála napříč appkou – overlay pod modalem, toast nahoře.
 */
export const zIndexTokens = {
  base: 0,
  above: 10,
  overlay: 40,
  dropdown: 50,
  modal: 100,
  toast: 200,
  max: 9999,
} as const;

/**
 * Stroke / border width. Pro okraje, dividery, focus ring.
 */
export const borderWidthTokens = {
  none: 0,
  thin: 1,
  default: 1,
  medium: 2,
  thick: 4,
} as const;
