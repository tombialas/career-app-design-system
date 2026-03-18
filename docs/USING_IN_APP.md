# Using the Design System in Career App

Až budeš mít aplikaci (Next.js / Vite / …) v repu vedle `career-design-system`, použij DS takto.

## 1. Závislost

V projektu aplikace (např. `04_Career_App_Produkt` nebo nový Next app):

```bash
npm install ../career-design-system
```

Nebo v `package.json`:

```json
{
  "dependencies": {
    "@career/design-system": "file:../career-design-system"
  }
}
```

Potom `npm install`.

## 2. Theme (Tailwind v4)

Aplikace musí načíst náš theme, aby třídy `ds-*` fungovaly. V hlavním CSS souboru (např. `app/globals.css`):

```css
@import "tailwindcss";
@import "@career/design-system/theme.css";

/* zbytek tvého CSS */
```

Tím se v projektu objeví barvy (`bg-ds-surface-dark`, `text-ds-text-primary`, …) a stíny (`shadow-ds-diffuse-sm`, …).

## 3. Tokeny (JS/TS)

Kde potřebuješ hodnoty v kódu (např. pro inline styly nebo konfiguraci):

```ts
import { colorTokens } from "@career/design-system/tokens/colors";
import { spacingTokens, radiusTokens } from "@career/design-system/tokens/layout";
import { typographyTokens } from "@career/design-system/tokens/typography";
```

## 4. Komponenty

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
```

Komponenty používají třídy `ds-*`, takže v aplikaci musí být načtený theme (krok 2). Font Figtree si v aplikaci načti stejně jako v DS (např. `next/font/google`).

## 5. Shrnutí

| Co | Jak |
|----|-----|
| Barvy, stíny v UI | Theme v CSS (`@import "@career/design-system/theme.css"`) |
| Hodnoty v kódu | Import z `@career/design-system/tokens/*` |
| Button, Chip, Input | Import z `@career/design-system/components/*` |

Při přidání nových barev nebo stínů v DS doplň je i do `theme.css` a do `app/globals.css` (dokumentační web), aby zůstaly v sync.
