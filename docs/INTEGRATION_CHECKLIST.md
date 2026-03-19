# Career App ↔ Design System — integration checklist

Use this to get to a **production-safe** wire from GitHub → `career-app-mvp`.

## A. Design system repo (source of truth)

- [ ] **`npm run verify:exports`** passes on `main` (CI or pre-push).
- [ ] **`package.json` `exports`** point to real files under `components/` / `tokens/` (no stale flat paths).
- [ ] **`theme.css`** is the only `@theme` source for `ds-*` (docs site imports it; no duplicate block in `app/globals.css`). Run `npm run verify:theme` in the DS repo when changing tokens or utilities.
- [ ] **Versioning:** tag releases (`v1.0.1`) or pin app to commit SHA; avoid silent `main` drift for production.

## B. Career App (`career-app-mvp`)

- [ ] Add dependency: `npm install github:tombialas/career-app-design-system#<ref>`.
- [ ] In global CSS (e.g. `app/globals.css`):  
  `@import "tailwindcss";`  
  `@import "@career/design-system/theme.css";`
- [ ] **Figtree** loaded the same way as in DS (e.g. `next/font/google`).
- [ ] **React** satisfies peer (`^18 || ^19`) — you are already on React 19 / Next 16 ✓
- [ ] **Transpile** the package if needed: in `next.config` use `transpilePackages: ['@career/design-system']` (recommended for GitHub/git installs).
- [ ] **Dedupe Radix / lucide** if you see duplicate bundles: align versions where practical, run `npm dedupe`, inspect bundle.

## C. Smoke test (must pass before “done”)

- [ ] One screen imports **Button + Card** from `@career/design-system/components/*` and renders correctly.
- [ ] One screen uses **tokens** from `@career/design-system/tokens/colors` (or layout) without runtime error.
- [ ] **`next build`** succeeds in Career App with DS linked.

## D. Optional hardening

- [ ] **GitHub Action** on DS repo: `npm ci && npm run verify:exports && npm run build`.
- [ ] **Dependabot** or scheduled bump of DS ref in Career App.
- [ ] **Publish to npm** (private or public) instead of `github:` for faster installs and lockfile clarity.

## E. Next-only components

These use `next/navigation` or `next/link` and are only valid in **Next.js** hosts:

- `DocSearch` (`@career/design-system/components/DocSearch`)

Do not import them from a non-Next bundle (e.g. Vite SPA) without refactoring.
