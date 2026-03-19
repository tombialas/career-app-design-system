import type { Config } from "tailwindcss";

/** @theme pro ds-* je v theme.css (import z app/globals.css). Tento config jen content paths; bez importů z tokens. */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

