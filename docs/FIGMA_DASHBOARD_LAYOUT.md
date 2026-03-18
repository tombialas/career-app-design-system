# Figma Dashboard – pravidla z návrhu

Referenční pravidla vytažená z Figma návrhu Dashboardu (Career App). Slouží pro konzistentní implementaci layoutu, karet a inputů. Kde je to možné, mapovat na existující DS tokeny a komponenty.

---

## 1. Layout

- **Pozadí stránky:** Jedna barva – **purple-300** (v DS: `ds-surface-page`). Žádné „poletující“ centrum – celá stránka má toto pozadí.
- **Sidebar menu:** **Průhledný** – nemá vlastní pozadí ani border, přebírá pozadí stránky (purple-300). Fixní šířka vlevo, hierarchická navigace.
- **Hlavní obsah (ui-bg box):** Jeden box s pozadím **ui-bg** (`ds-ui-bg` = **F8F7FF**), **border** (`ds-ui-border`), **rounded corners kolem dokola** (`rounded-3xl`), **shadow**. Kolem boxu je **margin** (padding oblasti), takže je **vidět purple-300** z pozadí stránky kolem dokola. Box má **min. výšku viewportu minus margin**; když je obsah vyšší, **scrollujeme uvnitř boxu** (`overflow-auto`).
- **Responzivita:** Na mobilu sidebar → drawer/hamburger; ui-bg box s marginem.

**Mapování v DS:** DocLayout: `bg-ds-surface-page` na stránku; Sidebar inline s `bg-transparent`, bez border-r; oblast obsahu má padding (`p-4 lg:p-6`); uvnitř jeden `div` s `bg-ds-ui-bg` (#F8F7FF), `border-ds-ui-border`, `rounded-3xl`, `shadow-ds-diffuse-md`, `min-h-[calc(100vh-…)]`, `overflow-auto`.

---

## 2. Karty (metric / feature cards)

- **Tvar:** Zaoblený obdélník, jemný drop shadow, „elevated“ dojem.
- **Struktura:** Ikona nahoře v čtverci s akcentovou barvou (zelená / modrá / fialová) → tučný nadpis → krátký popis (body text).
- **Barvy:** Jedna výrazná pastelová barva na kartu (světle zelená, světle modrá, světle fialová) – odpovídá typu metriky/feature.
- **Typografie:** Nadpis = výrazný (Heading 3 nebo 4), popis = menší (body L nebo caption).

**Mapování v DS:** `Card` s variantami `highlightGreen`, `highlightBlue`; default/soft + ikona v boxu. Stíny: `shadow-ds-diffuse-sm` / `shadow-ds-diffuse-md`. Typografie: ds-text-primary pro nadpis, ds-text-secondary pro popis. Barvy pouze ds-accent-*-soft / ds-score-*.

---

## 3. Input + akční tlačítko

- **Input:** Jednořádkový, zaoblené rohy, světlé pozadí a jemný border. Placeholder např. „Paste job description or URL.“
- **Akční tlačítko:** Kruhové, vedle (nebo uvnitř) inputu. Ikona (např. sparkle/hvězda) v brand barvě (fialová) na světle fialovém pozadí.

**Mapování v DS:** `Input` komponenta (ds styling). Tlačítko: `Button` s variantou např. „icon“ nebo „ghost“, `rounded-full`, ikona z Lucide. Barvy: ds-primary-strong, ds-accent-pink-soft / ds-accent-*-soft.

---

## 4. Typografie (Figma „Ag“ styly)

| Figma styl        | Velikost / řádek | Použití v DS / appce        |
|-------------------|------------------|-----------------------------|
| Ag Heading 1      | 48 / 56          | Hero, velké nadpisy         |
| Ag Heading 2      | 32 / 40          | Sekční nadpisy              |
| Ag Heading 3      | 24 / 32          | Nadpisy karet, podsekce     |
| Ag Heading 4      | 20 / 28          | Menší nadpisy               |
| Ag body L         | 16 / 24          | Odstavce, popis karet       |
| Ag button        | 15 / 16          | Tlačítka                    |
| Ag caption       | 12 / 16          | Metadata, hinty             |
| Ag label tiny     | 12 / 12          | Labely, tagy                 |

**Mapování:** Font zůstává Figtree. V theme/tokens mít odpovídající velikosti a line-height; v komponentách používat sémantické třídy (např. `text-ds-*` tam, kde máme typografické tokeny).

---

## 5. Barvy (brand z Figmy)

- **Purple:** škála 50–900 (pozadí sidebaru, primární akcenty, tlačítko).
- **Mint:** 50–300 (jedna z pastelových variant karet).
- **Další:** modrá, růžová/červená pro další karty a stavy.

**Mapování:** Držet se `ds-primary-*`, `ds-accent-*-soft`, `ds-score-*`. Nové barvy přidávat do `@theme` a `tokens/*.ts`, ne hardcodovat hex v komponentách.

---

## 6. Ikony a spacing

- **Ikony:** Jednotný styl (v Figmě vrstvy „Lucide“) – lineární, jednoduché.
- **Spacing:** Konzistentní mezery mezi sekcemi, kartami a bloky; base unit 8px (4, 8, 12, 16, 20, 24, 32, 40, 48, 64).

**Mapování:** Lucide React v DS/appce. Spacing z `tokens/layout.ts` (spacingTokens).

---

## DS web to používá

Stránky dokumentace (kromě `/demo/*`) používají: **pozadí stránky** `ds-surface-page` (purple-300), **průhledný Sidebar** (bez pozadí i bez borderu), **jeden ui-bg box** s `ds-ui-bg` (F8F7FF), margin kolem dokola (purple-300 prosvítá), `rounded-3xl`, `ds-ui-border`, `shadow-ds-diffuse-md`, scroll uvnitř boxu. Implementace: `components/DocLayout.tsx`.

---

## Shrnutí pro implementaci

- **Layout:** AppShell + floating content box (rounded-3xl, shadow-ds-diffuse) + fixed sidebar.
- **Karty:** Card (highlightGreen/Blue nebo soft) + ikona v barevném boxu + nadpis + popis.
- **Input:** Input + kruhové tlačítko s ikonou (ds-primary / ds-accent).
- **Typo a barvy:** Figma „Ag“ a brand palety mapovat na ds-* tokeny a Figtree.
- **Žádné hex v UI:** vše přes theme/tokens.
