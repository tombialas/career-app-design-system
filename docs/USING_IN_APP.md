# Using the Design System in Career App

Target host: **Next.js 16+** with **Tailwind CSS v4** and **React 18/19**. See also [`INTEGRATION_CHECKLIST.md`](./INTEGRATION_CHECKLIST.md).

## 1. Dependency

### From GitHub (recommended for `career-app-mvp`)

```bash
npm install github:tombialas/career-app-design-system#main
```

Pin a **tag** or **commit SHA** instead of `#main` for reproducible builds.

### Local monorepo / adjacent folder

```bash
npm install ../career-design-system
```

Or in `package.json`:

```json
{
  "dependencies": {
    "@career/design-system": "file:../career-design-system"
  }
}
```

Then `npm install`.

## 2. Next.js — transpile the package

Git-installed packages are often pre-transpiled by Next, but enabling this avoids surprises:

```ts
// next.config.ts
const nextConfig = {
  transpilePackages: ["@career/design-system"],
};
export default nextConfig;
```

## 3. Theme (Tailwind v4)

The app must load the DS theme so `ds-*` utilities resolve. In your global CSS (e.g. `app/globals.css`):

```css
@import "tailwindcss";
@import "@career/design-system/theme.css";

/* rest of your app CSS */
```

Load **Figtree** the same way as in the DS app (e.g. `next/font/google`).

**Single source of truth:** All `@theme { … }` tokens for `ds-*` live in **`theme.css`** at the package root. The DS docs site’s `app/globals.css` only imports `../theme.css` plus docs-only styles (fonts, accordion keyframes) — it does **not** duplicate the theme block. After changing tokens, run `npm run verify:theme` (heuristic coverage check).

## 4. Tokens (JS/TS)

```ts
import { colorTokens } from "@career/design-system/tokens/colors";
import { spacingTokens, radiusTokens } from "@career/design-system/tokens/layout";
import { typographyTokens } from "@career/design-system/tokens/typography";
import { durationTokens, easingTokens } from "@career/design-system/tokens/motion";
```

## 5. Components

Stable subpath exports (see `package.json` → `"exports"`):

```tsx
import { Button } from "@career/design-system/components/Button";
import { Chip } from "@career/design-system/components/Chip";
import { Input } from "@career/design-system/components/Input";
import { Card } from "@career/design-system/components/Card";
import { Label } from "@career/design-system/components/Label";
import { Separator } from "@career/design-system/components/Separator";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@career/design-system/components/Tooltip";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@career/design-system/components/DropdownMenu";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@career/design-system/components/AlertDialog";
import { Toaster, useToast } from "@career/design-system/components/Toaster";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@career/design-system/components/Tabs";
import { Skeleton } from "@career/design-system/components/Skeleton";
import { Score } from "@career/design-system/components/Score";
import { ProgressBar } from "@career/design-system/components/ProgressBar";
import { AppShell } from "@career/design-system/components/AppShell";
import { Sidebar } from "@career/design-system/components/Sidebar";
import { Container } from "@career/design-system/components/Container";
import { ListItem } from "@career/design-system/components/ListItem";
import { Modal } from "@career/design-system/components/Modal";
import { Select } from "@career/design-system/components/Select";
import { Textarea } from "@career/design-system/components/Textarea";
import { Checkbox } from "@career/design-system/components/Checkbox";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@career/design-system/components/Accordion";
import { Popover, PopoverTrigger, PopoverContent } from "@career/design-system/components/Popover";
import { Grid, GridCol } from "@career/design-system/components/GridLayout";
import { FormField } from "@career/design-system/components/FormField";
import { EmptyState } from "@career/design-system/components/EmptyState";
import { SkillBadge } from "@career/design-system/components/SkillBadge";
```

`DocSearch` is available for **Next.js** hosts only (`next/navigation`):

```tsx
import { DocSearch } from "@career/design-system/components/DocSearch";
```

Run **`npm run verify:exports`** in the DS repo after changing exports.

## 6. Summary

| Need | How |
|------|-----|
| Colors / shadows in UI | `@import "@career/design-system/theme.css"` |
| Values in code | `@career/design-system/tokens/*` |
| UI primitives | `@career/design-system/components/*` |
