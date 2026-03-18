import Link from "next/link";
import { Card } from "../components/organisms/Card";

export default function OverviewPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Career App · Design System
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ds-text-primary">
              Overview
            </h1>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Link href="/tokens" className="text-sm font-medium text-ds-text-secondary hover:text-ds-text-primary">
              Tokens
            </Link>
            <span className="text-ds-border-subtle">/</span>
            <Link
              href="/components/buttons"
              className="text-sm font-medium text-ds-text-secondary hover:text-ds-text-primary"
            >
              Components
            </Link>
          </div>
        </div>
        <p className="max-w-3xl text-[16px] leading-relaxed text-ds-text-secondary">
          Všechno, co potřebuješ pro UI v Career App: tokeny, primitives a vzory. V appce:{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">
            docs/USING_IN_APP.md
          </code>
          .
        </p>
      </header>

      <section aria-label="Bento">
        <div className="grid grid-cols-12 gap-4 lg:gap-5">
          <Link href="/components/buttons" className="col-span-12 lg:col-span-7">
            <Card hoverable className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                Start here
              </p>
              <h2 className="mt-2 text-xl font-semibold text-ds-text-primary">
                Components
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ds-text-secondary">
                Primitives a patterns (Button, Tabs, Card, Toast, Score…). Jasné API, specifikace, doc stránky.
              </p>
            </Card>
          </Link>

          <Link href="/tokens" className="col-span-12 lg:col-span-5">
            <Card hoverable variant="highlightBlue" className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                Foundation
              </p>
              <h2 className="mt-2 text-xl font-semibold text-ds-text-primary">
                Tokens
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ds-text-secondary">
                Barvy, spacing, radius, elevation, typografie. Vždy přes sémantické `ds-*`.
              </p>
            </Card>
          </Link>

          <Card variant="soft" className="col-span-12 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Principles
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ds-text-secondary">
              <li><strong>Hravé.</strong> Přátelské, lehké, lidské – jako reference. Žádný strnulý corporate look.</li>
              <li>Linear hierarchie: krátké nadpisy, minimum dekorací.</li>
              <li>Surface = border + blur; stín jen jako jemná hloubka.</li>
              <li>Pill a rounded-3xl pro hlavní interakce.</li>
            </ul>
          </Card>

          <Link href="/demo/cards" className="col-span-12 lg:col-span-6">
            <Card hoverable variant="soft" className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                Patterns
              </p>
              <h2 className="mt-2 text-xl font-semibold text-ds-text-primary">
                Match score cards & badges
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ds-text-secondary">
                <span className="rounded-full bg-ds-surface-card-soft/70 px-3 py-1">Match score card</span>
                <span className="rounded-full bg-ds-surface-card-soft/70 px-3 py-1">Score badge</span>
                <span className="rounded-full bg-ds-surface-card-soft/70 px-3 py-1">Skill badge</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ds-text-secondary">
                Jak karta a badgy vypadají v aplikaci: grid přihlášek, detail karty, dovednostní tagy.
              </p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
