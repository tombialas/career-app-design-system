# Career Design System – To‑do

Cíl: **kompletní DS před migrací** do career-app (layout, sidebar, karty, grafy, formuláře). Až bude kompletní, teprve pak importovat do appky.

---

## Done

- [x] **Tokens:** colors (sémantické + full palette), typography, layout (spacing, radius, elevation, diffuse shadows)
- [x] **Komponenty:** Button, Chip (≈ Badge), Input, Card, Label, Separator, Tooltip, DropdownMenu, AlertDialog, Toast, Tabs, Skeleton
- [x] **Domain vizuály:** Score (half-donut, circle), ProgressBar
- [x] **Dokumentace:** Overview, Tokens, Components, DocNav; `docs/USING_IN_APP.md`, `docs/DS_VS_CAREER_APP_CHECK.md`
- [x] **Propojení:** balíček `@career/design-system`, theme.css

---

## Kompletní DS – co doplnit

### Layout & shell

- [x] **Layout / AppShell** – stránkový wrapper: volitelný sidebar (slot), hlavní oblast (main), responzivní. Spacer pro sidebar na desktopu.
- [x] **Sidebar** – boční menu v DS stylu: title, navigace (ikona + label, activeHref), footer slot. Desktop: fixed w-64; mobil: drawer + backdrop + hamburger. Čistě UI (bez auth/router).

### Karty

- [x] **Definice karet a badgeů** – `docs/CARDS_AND_BADGES.md`: slovník typů (Match score card, Skills & requirements card, Vault section card, Match score badge, Skill badge, Language badge, Requirement badge) a vazba na DS komponenty.
- [ ] **Card složení** – CardHeader, CardContent, CardFooter (volitelné sekce, konzistentní padding/spacing). Zachovat stávající Card varianty (default, soft, dark).
- [ ] **Varianty karet** – dokumentované vzory podle CARDS_AND_BADGES (karta s Score, karta s progress bary, karta s badgy).

### Grafy / vizuály

- [ ] **Half donut** – v DS už je jako Score (variant="halfDonut"). Zkontrolovat, že API sedí (value 0–100, barvy pásem); případně export i jako `HalfDonut` pro srozumitelnost.
- [ ] **Donut** – plný kruh, více segmentů (např. podíl dovedností, thematic breakdown). Data: pole `{ value, color?, label? }`, zobrazení jako donut chart. Možná společná báze s Score (SVG kruh + strokeDasharray po segmentech).

### Primitives (formuláře & overlay)

- [ ] **Modal / Dialog** – overlay + content (Radix Dialog), zavírání Escape/klik mimo. Pro formuláře v overlay (EducationModal, ExperienceModal). Styl ds (shadow, radius, focus).
- [ ] **Select** – výběr z options (Radix Select), ds styling.
- [ ] **Checkbox** – ds styling.
- [ ] **Textarea** – víceřádkový vstup, ds styling (konzistentní s Input).

### Tokeny

- [ ] **Motion** – délky animací (--duration-fast / normal / slow), ease. V @theme a v tokens.
- [ ] **Breakpoints** – pokud má být v theme (sm, md, lg, xl), doplnit do @theme; jinak nechat na Tailwind default.

---

## Later (až po kompletním DS)

- **Obsah karet:** složitější vizualizace (např. bar chart) – řešit při konkrétních obrazovkách.
- **Brand / Figma:** sloučení s brand manuálem, sync s Figmou.

---

## Technické poznámky

- **Tailwind v4:** Theme v `app/globals.css` a v `theme.css`. Nové barvy/stíny/motion doplň i do `tokens/*.ts`.
- **Kontrola:** Po změnách ověř na localhost:3001 (Button, Input, Tokens, nové komponenty).

---

*Kompletní DS = layout + sidebar + karty (složení + varianty) + half donut + donut + Modal + Select + Checkbox + Textarea + motion (a volitelně breakpoints). Až bude vše zaškrtnuté, migrace do appky.*
