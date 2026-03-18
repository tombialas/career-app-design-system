"use client";

import { Skeleton } from "../../../components/molecules/Skeleton";

export default function SkeletonDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Skeleton
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Placeholder for loading (workspace, analysis). A block with <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">animate-pulse</code> and color ds-border-subtle. Set width and height via <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">className</code> (e.g. h-4 w-48).
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Variants</h2>
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm text-ds-text-muted">Text line</p>
            <Skeleton className="h-4 w-64" />
          </div>
          <div>
            <p className="mb-2 text-sm text-ds-text-muted">Three lines (block)</p>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-ds-text-muted">Avatar + text</p>
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-ds-text-muted">Card (placeholder)</p>
            <div className="rounded-2xl border border-ds-border-subtle p-6">
              <Skeleton className="mb-4 h-6 w-1/2" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Specification
        </h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Color:</strong> bg-ds-border-subtle</li>
            <li><strong>Animation:</strong> animate-pulse (Tailwind)</li>
            <li><strong>Rounding:</strong> rounded-lg</li>
            <li><strong>A11y:</strong> role="status", aria-label="Loading"</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
