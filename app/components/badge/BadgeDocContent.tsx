"use client";

import { Badge } from "../../../components/atoms/Badge";

export default function BadgeDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Badge</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A small indicator (not a Chip). Typically used for PRO tags, tiny count badges, or subtle status labels.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Varianty</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="primary">PRO</Badge>
          <Badge variant="destructive">3</Badge>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>
            <strong>Typography:</strong> text-[10px] font-bold uppercase tracking-wider
          </li>
          <li>
            <strong>Shape:</strong> rounded-full, padding px-2 py-0.5
          </li>
          <li>
            <strong>Variants:</strong> default / primary / destructive
          </li>
        </ul>
      </section>
    </div>
  );
}

