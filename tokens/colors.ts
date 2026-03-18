/** Full palette scales from Figma (50–900). Use for backgrounds, borders, or when you need a step that has no semantic token. */
export const colorPalette = {
  purple: {
    50: "#fdfaff",
    100: "#faf5ff",
    200: "#f3e8ff",
    300: "#e9d5ff",
    400: "#e0c4ff",
    500: "#d8b4fe",
    600: "#be84fc",
    700: "#a455f7",
    800: "#8c33ea",
    900: "#6321a8",
  },
  mint: {
    50: "#fafffe",
    100: "#f0fdfa",
    200: "#e0fcf6",
    300: "#ccfbf2",
    400: "#b3f8ed",
    500: "#99f6e4",
    600: "#5eeacf",
    700: "#2dd4b4",
    800: "#14b898",
    900: "#0d947a",
  },
  blue: {
    50: "#f8fbff",
    100: "#eff7ff",
    200: "#e0f0ff",
    300: "#dbecfe",
    400: "#bfddfe",
    500: "#93c5fd",
    600: "#60a9fa",
    700: "#3b93f6",
    800: "#2582eb",
    900: "#1e518a",
  },
  red: { 100: "#fff1f3", 500: "#fda4af", 700: "#f43f55", 900: "#be1227" },
  green: { 100: "#f0fdf4", 500: "#a7f3d0", 700: "#34d399", 900: "#065f46" },
  yellow: { 100: "#fffbeb", 500: "#fde68a", 700: "#fbbf24", 900: "#92400e" },
} as const;

export const colorTokens = {
  primary: {
    base: "#d8b4fe",
    soft: "#faf5ff",
    strong: "#a455f7",
  },
  accent: {
    mint: {
      base: "#99f6e4",
      soft: "#e0fcf6",
      strong: "#2dd4b4",
    },
    blue: {
      base: "#93c5fd",
      soft: "#dbecfe",
      strong: "#3b93f6",
    },
  },
  score: {
    high: {
      base: "#34d399",
      soft: "#f0fdf4",
    },
    medium: {
      base: "#fbbf24",
      soft: "#fffbeb",
    },
    low: {
      base: "#f43f55",
      soft: "#fff1f3",
    },
  },
  feedback: {
    success: "#34d399",
    warning: "#fbbf24",
    danger: "#f43f55",
  },
  surface: {
    base: "#f8f7ff",
    card: "#ffffff",
    cardSoftPurple: "#f3e8ff",
    cardSoftMint: "#e0fcf6",
    darkCard: "#1a1625",
    darkElement: "#2d293b",
  },
  text: {
    primary: "#050316",
    secondary: "#374151",
    muted: "#6b7280",
    tertiary: "#9ca3af",
    onPrimary: "#ffffff",
    onDark: "#f9fafb",
    onDarkMuted: "#e5e7eb",
  },
  border: {
    subtle: "#e8e4f2",
  },
} as const;

