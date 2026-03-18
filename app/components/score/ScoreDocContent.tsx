"use client";

import { Score } from "../../../components/molecules/Score";
import { Card } from "../../../components/organisms/Card";
import { ProgressBar } from "../../../components/molecules/ProgressBar";

export default function ScoreDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Score
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Vizuál skóre 0–100 (karta přihlášky, analýza). Pásma: low / medium / high. Varianty halfDonut (půlkruh) a circle – masivní stroke (12px), výchozí size 120px. U circle je číslo vždy uprostřed kruhu.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ds-text-primary">
          Pattern: Match score badge
        </h2>
        <Card className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Score value={86} variant="circle" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-ds-text-primary">
                86 / 100
              </p>
              <p className="text-xs text-ds-text-muted">
                Potenciální skóre: 95 %
              </p>
            </div>
          </div>
          <div className="grid flex-1 gap-2 text-xs text-ds-text-secondary md:grid-cols-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Odborné dovednosti</span>
                <span className="text-ds-text-muted">80 / 100</span>
              </div>
              <ProgressBar value={80} useScoreColors />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Zkušenosti</span>
                <span className="text-ds-text-muted">100 / 100</span>
              </div>
              <ProgressBar value={100} useScoreColors />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Měkké dovednosti</span>
                <span className="text-ds-text-muted">75 / 100</span>
              </div>
              <ProgressBar value={75} useScoreColors />
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ds-text-primary">
          Variants
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card variant="soft" className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Half-donut (default)
            </p>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center gap-1">
                <Score value={25} />
                <span className="text-xs text-ds-text-muted">25 (low)</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Score value={50} />
                <span className="text-xs text-ds-text-muted">50 (medium)</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Score value={75} />
                <span className="text-xs text-ds-text-muted">75 (high)</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Score value={90} showValue />
                <span className="text-xs text-ds-text-muted">90 + label vedle</span>
              </div>
            </div>
          </Card>

          <Card variant="soft" className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Circle (číslo uprostřed)
            </p>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center gap-1">
                <Score value={40} variant="circle" />
                <span className="text-xs text-ds-text-muted">40</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Score value={70} variant="circle" />
                <span className="text-xs text-ds-text-muted">70</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Score value={86} variant="circle" size={140} />
                <span className="text-xs text-ds-text-muted">86, size=140</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Specification
        </h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Barvy:</strong> ds-score-low, ds-score-medium, ds-score-high</li>
            <li><strong>Pásma:</strong> 0–33 low, 34–66 medium, 67–100 high</li>
            <li><strong>Velikost:</strong> výchozí 120px, stroke 12px (masivní)</li>
            <li><strong>Circle:</strong> číslo vždy uprostřed (text-5xl font-bold)</li>
            <li><strong>Props:</strong> value (0–100), variant (halfDonut | circle), size?, showValue (jen halfDonut)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
