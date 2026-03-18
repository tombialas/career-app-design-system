# Karty a badgy – definice pro Career App

Jednotný slovník karet a badgeů napříč obrazovkami. Každý typ má název, účel, skladbu a vazbu na DS komponenty.

---

## Karty (Cards)

### 1. Match score card (karta přihlášky v seznamu)

**Kde:** Moje žádosti – mřížka karet.

**Účel:** Jedna přihláška v přehledu: skóre, role, firma, datum. Klik → detail / úprava.

**Skladba:**
- **Levý horní roh:** checkbox (výběr pro hromadné akce).
- **Pravý horní roh:** menu akcí (tři tečky) – DropdownMenu.
- **Střed nahoře:** **Match score badge** (Score 0–100, halfDonut nebo circle, barva dle pásma).
- **Pod badge:** job title (bold, větší), pod ním company (menší, muted).
- **Dole:** „Analyzováno“ + „Created DD/MM/YYYY HH:mm“ (malý, tertiary text).

**DS:** `Card` (default, hoverable), `Score`, `DropdownMenu`, checkbox (až bude v DS). Bento grid: stejná výška, responzivní počet sloupců.

---

### 2. Match score card – detail (hlavní skóre na stránce Úprava žádosti)

**Kde:** Úprava žádosti – levá horní karta.

**Účel:** Hlavní vizuál shody pro jednu přihlášku: aktuální skóre, potenciální skóre, rozklad do dimenzí.

**Skladba:**
- Velký **Score** (circle nebo halfDonut) s hodnotou „X / 100“.
- Řádek „Potenciální skóre: XY%“ (volitelně s CTA odemknutí).
- 3 horizontální **ProgressBar** s labely: Odborné dovednosti, Zkušenosti, Měkké dovednosti (hodnoty např. 80/100, 100/100, 75/100).

**DS:** `Card`, `Score` (variant circle), `ProgressBar`, typografie ds-text-*.

---

### 3. Skills & requirements card (Proč sedíte / Co posílit)

**Kde:** Úprava žádosti – pravá horní karta.

**Účel:** Textové bloky + badgy: proč sedíte, klíčové dovednosti, co posílit, chybějící požadavky.

**Skladba:**
- Sekce **Proč sedíte** – odstavec textu.
- **Klíčové odpovídající dovednosti** – řada **requirement/skill badgeů** (odpovídá, např. fialový accent).
- Sekce **Co posílit** – odstavec.
- **Chybějící požadavky** – řada **requirement badgeů** (chybí, jiná varianta / barva).

**DS:** `Card`, `Chip` nebo vlastní badge (viz badgy níže). Nadpisy: uppercase malé, ds-text-muted.

---

### 4. AI analysis / Důkazy card

**Kde:** Úprava žádosti – levá dolní karta.

**Účel:** Cíl vs. zkušenosti – důkazy z CV, odemknutí potenciálního skóre, AI analýza.

**Skladba:**
- Nadpis „Cíl vs. vaše zkušenosti - důkazy“, podtitul typu „Odemkněte potenciální skóre (95%)“.
- 1–2 odstavce AI textu.
- Dole: stavová řádka např. „Shoda 68% → 95%“.

**DS:** `Card`, typografie, volitelně `Button` (CTA odemknutí).

---

### 5. Goal vs. experience card (Cíl vs. vaše zkušenosti – metriky)

**Kde:** Úprava žádosti – pravá dolní karta.

**Účel:** Konkrétní metriky: dovednost / dimenze + progress bar, porovnání „Vy: X – Cíl: Y“.

**Skladba:**
- Nadpis „CÍL VS. VAŠE ZKUŠENOSTI“.
- Položky: label (např. „Marketing“), **ProgressBar**, text „Vy: 8.4 let – Cíl: 3 let“.

**DS:** `Card`, `ProgressBar`, text ds-text-secondary.

---

### 6. Vault section card (The Vault – celá stránka / sekce)

**Kde:** Můj profil – The Vault (Osobní údaje, Praxe, Dovednosti a jazyky, …).

**Účel:** Jedna velká „karta“ stránky: nadpis + tagline, vnitřní vertikální navigace (taby / sekce), obsah sekce.

**Skladba:**
- Hlavička: „The Vault“ + tagline („Váš profil je zdroj pravdy…“).
- Levý okraj: vertikální sekce (Osobní údaje, Praxe, Dovednosti a jazyky, Kariérní přehled, Zdroje) – aktivní zvýrazněno (např. ds-surface-card-soft).
- Hlavní obsah: podle sekce – formuláře, **skill badgy**, **language badgy**, input + „Přidat“.

**DS:** `Card` nebo kontejner s border/radius, `ListItem` nebo taby pro sekce, Input, Button, badgy.

---

## Badgy (Badges)

### 1. Match score badge

**Kde:** Uvnitř Match score card (seznam i detail).

**Účel:** Na první pohled ukázat skóre 0–100 a pásmo (high / medium / low).

**Vzhled:** Kruh nebo půlkruh (Score), uprostřed číslo. Barva oblouku: zelená (high), žlutá/oranžová (medium), červená (low) – tokeny ds-score-high/medium/low.

**DS:** Komponenta `Score` (variant halfDonut | circle), value 0–100, volitelně showValue.

---

### 2. Skill badge (dovednost v The Vault)

**Kde:** The Vault – Dovednosti a jazyky: Odborné dovednosti, Měkké dovednosti.

**Účel:** Jedna dovednost jako odstranitelný/editující tag.

**Vzhled:** Pill / velmi zaoblený obdélník. Odborné: světle modrá/fialová; Měkké: světle fialová. Text + ikona „x“ (odstranit), u některých tužka (edit).

**DS:** `Chip` nebo vlastní badge s variantami (hard / soft), onClick remove, volitelně edit ikona.

---

### 3. Language badge (jazyk v The Vault)

**Kde:** The Vault – Dovednosti a jazyky – jazyky.

**Účel:** Jazyk + úroveň (Mateřský, Pokročilý, …), odstranitelný.

**Vzhled:** Velmi zaoblený obdélník, světle žlutá/oranžová. Text např. „Czech Mateřský jazyk“, „English Pokročilý“ + „x“.

**DS:** `Chip` s variantou pro jazyk (např. accent žlutá/oranž), nebo vlastní LanguageBadge.

---

### 4. Requirement / key skill badge (v analýze – odpovídá / chybí)

**Kde:** Úprava žádosti – Skills & requirements card: „Klíčové odpovídající dovednosti“, „Chybějící požadavky“.

**Účel:** Jedna dovednost/požadavek z analýzy – buď odpovídá (máte), nebo chybí.

**Vzhled:** Malý pill, světle fialové pozadí, fialový text, malá ikona (lock / check). Varianta „chybí“ může být jiná barva nebo styl (muted, outline).

**DS:** `Chip` variant primary/mint nebo vlastní RequirementBadge (matched | missing). Bez remove – jen čtení.

---

## Shrnutí vazeb na DS

| Prvek              | DS komponenta / tokeny |
|--------------------|------------------------|
| Karta (obal)       | Card (default, soft, hoverable) |
| Match score vizuál | Score (halfDonut, circle) |
| Progress v kartě  | ProgressBar |
| Skill / language tag | Chip nebo vlastní badge |
| Requirement tag    | Chip (variant) nebo RequirementBadge |
| Menu na kartě      | DropdownMenu |
| Sekce Vault        | Card + ListItem nebo Tabs |

---

*Tento dokument je zdroj pravdy pro názvy a skladbu karet a badgeů. Při přidávání nových obrazovek nebo komponent v appce na něj odkazuj.*
