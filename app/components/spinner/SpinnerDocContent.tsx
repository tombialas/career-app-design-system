"use client";

import { Spinner } from "../../../components/atoms/Spinner";

export default function SpinnerDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Spinner</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Jednoduchý loader pro async stavy. Používá Lucide <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">Loader2</code>{" "}
          a <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">animate-spin</code>.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Sizes</h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <Spinner size="sm" />
            <span className="text-sm text-ds-text-secondary">sm</span>
          </div>
          <div className="flex items-center gap-3">
            <Spinner size="md" />
            <span className="text-sm text-ds-text-secondary">md</span>
          </div>
          <div className="flex items-center gap-3">
            <Spinner size="lg" />
            <span className="text-sm text-ds-text-secondary">lg</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Color override</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Spinner className="text-ds-primary-strong" />
          <Spinner className="text-ds-purple-900" />
          <Spinner className="text-ds-text-primary" />
        </div>
      </section>
    </div>
  );
}

