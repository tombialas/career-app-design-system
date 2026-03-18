import type { Config } from "tailwindcss";

/** Theme je v praxi v app/globals.css (@theme). Config slouží jen pro content paths; bez importů z tokens (Next/PostCSS config loader je nenačítá). */
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

