# Double-check: Design System vs Career App (MVP)

Kontrola proti **skutečnému kódu** v `career-app-mvp` (`/Users/tombialas/Documents/CAREER APP/Career_app_2026/career-app-mvp`).

---

## 1. Komponenty z `@/components/ui` (co app používá)

| UI soubor v appce | Použití v appce | DS ekvivalent | Stav |
|-------------------|-----------------|---------------|------|
| `button` | Všude (tailor, dashboard, forms, cards, sidebar, …) | Button | ✅ |
| `card` | analysis-dashboard, experience-audit, requirements-checklist, login, onboarding | Card | ✅ |
| `input` | Forms (profile, job-input, skills, login, modals) | Input | ✅ |
| `label` | Všechny formuláře | Label | ✅ |
| `separator` | analysis-dashboard | Separator | ✅ |
| `skeleton` | analysis-dashboard, profile-editor, experience-editor, onboarding, workspace-skeleton, streaming parsers | Skeleton | ✅ |
| `badge` | tailor, onboarding, skill-badge, insights, streaming parsers, timeline | Chip (≈ Badge) | ✅ |
| `tooltip` | analysis-dashboard, skill-badge, analysis-result, application-card, experience-editor, onboarding, timeline, insights | Tooltip | ✅ |
| `dropdown-menu` | tailor-workspace, language-switcher, application-card | DropdownMenu | ✅ |
| `alert-dialog` | sources-page, application-card, applications-grid, skills-page | AlertDialog | ✅ |
| `tabs` | (v ui/) | Tabs | ✅ |
| `toast` + `use-toast` | layout (ToastProviderInternal), workbench-client | Toaster + useToast | ✅ |

**Závěr:** Všechny UI primitives, které app importuje z `@/components/ui`, máme v DS.

---

## 2. Domain / vlastní komponenty v appce

| Komponenta v appce | Co dělá | DS ekvivalent | Poznámka |
|--------------------|---------|---------------|----------|
| `half-donut.tsx` | Půlkruh 0–100, barvy red &lt;50 / amber 50–79 / emerald 80+, číslo uvnitř | **Score** (variant="halfDonut", showValue) | Pásma v DS: 0–33 low, 34–66 medium, 67–100 high. Při migraci buď srovnat prahy, nebo přidat prop pro custom prahy. |
| `application-card.tsx` | Karta aplikace: HalfDonut, tlačítka, dropdown, AlertDialog | Card + Score + Button + DropdownMenu + AlertDialog | Skládá se z DS komponent. |
| `analysis-summary-bar.tsx` | Sticky bar: kruh s číslem (score), titulka, tlačítko „Show Analysis“ | Score (circle) nebo Chip + Button; barvy score | Layout je specifický pro app; barvy lze sjednotit na ds-score-*. |
| `loading-status.tsx` | Kroky + progress bar (h-2, rounded-full, %), compact/ne | **ProgressBar** + vlastní text kroků | Progress bar lze nahradit DS ProgressBar (default fialová). |
| `workspace-skeleton.tsx` | Skeleton pro tailor workspace | Skeleton | ✅ |
| `education-modal.tsx` / `experience-modal.tsx` | Formulář v overlay (fixed inset-0, bg-black/50, content box) | Žádný generic Modal v DS | App nepoužívá Radix Dialog – vlastní overlay. V DS je „Modal“ v Later; až budeš chtít sjednotit vzhled, můžeš přidat DS Modal. |

---

## 3. Co v appce není z ui/

- **Dialog/Modal** – v `ui/` není. EducationModal a ExperienceModal jsou vlastní implementace (fixed + overlay). DS má zatím jen AlertDialog (potvrzení), ne obecný modal.
- **Select, Checkbox, Textarea, Radio** – v grepovaných importech z `@/components/ui` nejsou. Pokud jsou někde jinde, doplnit do tohoto checku.

---

## 4. Shrnutí

- **Máš pokryté** všechny komponenty z `@/components/ui`, které career-app-mvp aktuálně používá (Button, Card, Input, Label, Separator, Skeleton, Badge→Chip, Tooltip, DropdownMenu, AlertDialog, Tabs, Toast).
- **Domain vizuály** (HalfDonut → Score, progress v LoadingStatus → ProgressBar, workspace skeleton → Skeleton) mají v DS ekvivalent; při migraci jen sjednotit tokeny (ds-score-*, ds-primary-strong) a případně prahy u Score.
- **Later:** Obecný Modal (overlay + content) pro Education/Experience modaly až budeš chtít převést na DS; další formuláře (Select, Checkbox, …) podle potřeby.

*Poslední kontrola: podle kódu v career-app-mvp (grep na @/components/ui a na half-donut, application-card, analysis-summary-bar, loading-status, workspace-skeleton, modals).*
