import { Input } from "../../../components/molecules/Input";

export const metadata = {
  title: "Input · Career Design System",
  description: "Input component: sizes, label, error state, usage",
};

export default function InputDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Input</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Textové pole pro formuláře – pill tvar, diffuse shadow. Volitelně label a chybová hláška; chyba = feedback.danger (ring).
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">S labelem</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Prop <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">label</code> pro a11y; propojí se přes htmlFor/id.
        </p>
        <div className="max-w-sm space-y-4">
          <Input label="Job title" placeholder="e.g. Product Manager" />
          <Input label="Company" placeholder="Optional" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Sizes</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          sm, md (default), lg – výška a padding v souladu s Buttonem.
        </p>
        <div className="max-w-sm space-y-4">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium (default)" />
          <Input size="lg" placeholder="Large" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Stavy</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Error = červený ring + helper text; disabled = snížená opacity, bez interakce.
        </p>
        <div className="max-w-sm space-y-4">
          <Input
            label="Email"
            placeholder="you@example.com"
            defaultValue="you@example.com"
            error="Please enter a valid email address."
          />
          <Input label="Disabled" placeholder="Cannot edit" defaultValue="Cannot edit" disabled />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Shape:</strong> pill (rounded-full)</li>
            <li><strong>Shadow:</strong> shadow-ds-diffuse-sm default, shadow-ds-diffuse-md on focus</li>
            <li><strong>Focus:</strong> ring 2px ds-primary-strong, offset 2</li>
            <li><strong>Error:</strong> ring ds-feedback-danger + helper text</li>
            <li><strong>Font:</strong> Figtree, body size (16px default); placeholder uses text.muted</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
