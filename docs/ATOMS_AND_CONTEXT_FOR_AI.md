# Career Design System – atomy a kontext pro AI (Gemini / další agenty)

Tento soubor shrnuje, **co je v Career Design Systemu hotové**: hlavní atomy (komponenty), tokeny, layout a pravidla. Můžeš ho dát do kontextu jinému modelu (např. Gemini), aby viděl, na čem jsme pracovali a co používat.

---

## 1. Hlavní atomy (komponenty)

| Komponenta | Účel | Klíčové props / poznámky |
|------------|------|---------------------------|
| **Button** | Primární akce, CTA | variant (default, secondary, ghost, danger), size (sm, md, lg) |
| **Chip** | Tagy, badgy (skill, language, requirement) | variant, removable, viz `docs/CARDS_AND_BADGES.md` |
| **Input** | Textové pole formuláře | label, error, size (sm, md, lg), pill tvar (rounded-full), ds-border-subtle |
| **Card** | Kontejner bloků | variant: default, soft, dark, highlightPink, highlightGreen, highlightBlue; compact, hoverable |
| **Label** | Popisek k inputům / políčkům | htmlFor, required |
| **Separator** | Vizuální oddělení | orientace horizontal/vertical |
| **Tooltip** | Nápověda na hover | Radix, ds styling |
| **DropdownMenu** | Akce / menu | Radix, položky s ikonou |
| **AlertDialog** | Potvrzení / varování | Radix, title, description, akce |
| **Toast** | Krátká notifikace | Toaster provider, success/error/info |
| **Tabs** | Přepínání sekcí | Radix, ds styling |
| **Skeleton** | Placeholder při načítání | animace puls |
| **Score** | Vizuál skóre 0–100 | value, variant: halfDonut \| circle, showValue; pásma low/medium/high (ds-score-*) |
| **MatchScoreRing** | Apple-style kruhy (total + hard/soft/experience) | total, hard, soft, experience, size, totalStrokeWidth, metricStrokeWidth; 4 soustředné kruhy, Lucide ikona uprostřed |
| **ProgressBar** | Horizontální pruh 0–100 | value, useScoreColors (low/medium/high) |
| **ListItem** | Řádek typu Settings/FAQ | label, value?, chevron, onClick |
| **AppShell** | Stránkový wrapper | sidebar (slot), children (main) |
| **Sidebar** | Boční menu | variant: drawer \| inline; title, navItems (flat nebo skupiny), activeHref, linkComponent (Next Link), footer; drawer = fixed + hamburger na mobilu |
| **Container** | Max-width wrapper | size (xs–xl) |
| **DocLayout** | Layout DS dokumentace | Pozadí stránky ds-surface-page (purple-300), průhledný Sidebar, ui-bg box (ds-ui-bg F8F7FF, margin kolem, rounded-3xl, border, shadow), scroll uvnitř boxu |

---

## 2. Tokeny (vždy používat, žádné raw hex)

- **Barvy:**  
  `ds-text-primary`, `ds-text-secondary`, `ds-text-muted`, `ds-text-tertiary`  
  `ds-surface-base`, `ds-surface-card`, `ds-surface-card-soft`, `ds-surface-page`, `ds-ui-bg`, `ds-ui-border`  
  `ds-border-subtle`, `ds-primary-strong`, `ds-purple-900`  
  `ds-accent-pink-soft`, `ds-accent-green-soft`, `ds-accent-blue-soft`  
  `ds-score-low`, `ds-score-medium`, `ds-score-high`  
  `ds-feedback-danger`
- **Stíny:** `shadow-ds-diffuse-sm`, `shadow-ds-diffuse-md`, `shadow-ds-diffuse-lg`
- **Font:** Figtree (`--font-figtree`)
- Definice: **`theme.css`** (jediný `@theme` pro `ds-*`); `app/globals.css` jen importuje `theme.css` + docs-only. Volitelně `tokens/*.ts`.

---

## 3. Layout (pravidla)

- **Stránka:** pozadí `ds-surface-page` (purple-300). Sidebar průhledný (bez vlastního pozadí). Hlavní obsah = jeden box `ds-ui-bg` (#F8F7FF), kolem dokola margin (purple-300 prosvítá), `rounded-3xl`, `ds-ui-border`, shadow, scroll uvnitř boxu.
- **Obsah:** max-width 1280px, base unit 8px (spacing 4–64). Grid 12 sloupců, gutter 24px.
- **Slovník karet a badgeů:** `docs/CARDS_AND_BADGES.md` (Match score card, Skills card, Vault card, různé badgy).

---

## 4. Konvence

- **Mood:** Hravé, přátelské, měkké barvy. Žádný corporate look. Glassmorphism, Progressive Disclosure.
- **Stack:** React, TypeScript, Tailwind v4, Radix kde je to možné. Komponenty v `components/`, dokumentace v `app/components/<název>/page.tsx`.
- **Export:** balíček `@career/design-system`, `theme.css`, exporty v `package.json` (components/Score, Button, atd.).

---

## 5. Co dát AI jako kontext

- **Tenhle soubor** – přehled atomů a pravidel.
- **`.cursor/rules/career-design-system.mdc`** – plná pravidla pro agenta (rozsah, reference, technický stack, konvence).
- **`DESIGN_SYSTEM_TODO.md`** – co je Done vs. co doplnit (Modal, Select, Checkbox, Textarea, Donut, motion, atd.).
- **`docs/CARDS_AND_BADGES.md`** – typy karet a badgeů a vazba na komponenty.
- **`docs/FIGMA_DASHBOARD_LAYOUT.md`** – layout z Figmy (pozadí, sidebar, ui-bg box, margin).

Pro rychlý „co jsme udělali“ stačí tento soubor + `DESIGN_SYSTEM_TODO.md`. Pro implementaci v appce přidej ještě rules a CARDS_AND_BADGES.
