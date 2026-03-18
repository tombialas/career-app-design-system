import { Separator } from "../../../components/atoms/Separator";

export const metadata = {
  title: "Separator · Career Design System",
  description: "Horizontal or vertical divider",
};

export default function SeparatorDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Separator</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Oddělovač mezi sekcemi. Barva: ds-border-subtle. Výchozí dekorativní (role="none"); <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">decorative=false</code> pro sémantické oddělovače.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Horizontal</h2>
        <div className="space-y-4 rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-6 backdrop-blur-sm">
          <p className="text-sm text-ds-text-primary">Content above</p>
          <Separator />
          <p className="text-sm text-ds-text-primary">Content below</p>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Vertical</h2>
        <div className="flex h-20 items-center gap-4 rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-6 backdrop-blur-sm">
          <span className="text-sm text-ds-text-primary">Left</span>
          <Separator orientation="vertical" className="h-full" />
          <span className="text-sm text-ds-text-primary">Center</span>
          <Separator orientation="vertical" className="h-full" />
          <span className="text-sm text-ds-text-primary">Right</span>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Color:</strong> bg-ds-border-subtle</li>
            <li><strong>Horizontal:</strong> h-px w-full</li>
            <li><strong>Vertical:</strong> h-full w-px (parent must have height)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
