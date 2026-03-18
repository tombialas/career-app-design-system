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
          Everything you need for UI in the Career App: tokens, primitives, and patterns. In the app:{" "}
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
                Primitives and patterns (Button, Tabs, Card, Toast, Score…). Clear API, specs, and documentation pages.
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
                Colors, spacing, radius, elevation, typography. Always via semantic `ds-*`.
              </p>
            </Card>
          </Link>

          <Card variant="soft" className="col-span-12 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Principles
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ds-text-secondary">
              <li>
                <strong>Playful.</strong> Friendly, light, human—like a reference. No stiff corporate look.
              </li>
              <li>Linear hierarchy: short headings, minimal decoration.</li>
              <li>Surface = border + blur; shadows only as subtle depth.</li>
              <li>Pills and rounded-3xl for main interactions.</li>
            </ul>
          </Card>

          <Link href="/docs/patterns" className="col-span-12 lg:col-span-6">
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
                How cards and badges look in the app: applications grid, detail cards, and skill tags.
              </p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
