# Career Design System

Tokens and React components for **Career App**. Consumed as **`@career/design-system`**.

- **Docs (web):** deploy / local `npm run dev:ds` (port 3001)
- **Integration:** see [`docs/USING_IN_APP.md`](docs/USING_IN_APP.md) and [`docs/INTEGRATION_CHECKLIST.md`](docs/INTEGRATION_CHECKLIST.md)

## Install from GitHub (Career App)

```bash
npm install github:tombialas/career-app-design-system#main
```

Or `package.json`:

```json
{
  "dependencies": {
    "@career/design-system": "github:tombialas/career-app-design-system#main"
  }
}
```

Pin a **commit SHA** or **tag** for reproducible builds.

## Requirements

- **React** 18 or 19 (peer)
- **Tailwind CSS v4** in the host app
- **Figtree** (or load the same font as in the app layout)

## Health check (maintainers)

```bash
npm run verify
```

Runs `verify:exports` (every `package.json` export exists) and `verify:theme` (heuristic: `ds-*` utilities / `var(--*ds*)` in `components/` + `app/` have a matching custom property in `theme.css`).
