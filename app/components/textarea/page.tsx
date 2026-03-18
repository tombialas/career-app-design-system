import { Textarea } from "../../../components/molecules/Textarea";

export const metadata = {
  title: "Textarea · Career Design System",
  description: "Textarea: multi-line input, label, error, usage",
};

export default function TextareaDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Textarea</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Multi-line input. Styling is consistent with Input: rounded-2xl, border-ds-border-subtle, and a focus ring with ds-primary-strong.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">With label</h2>
        <div className="max-w-md">
          <Textarea label="Note" placeholder="Optional description…" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">States</h2>
        <div className="max-w-md space-y-4">
          <Textarea label="With error" error="This field is required." defaultValue="Invalid value" />
          <Textarea label="Disabled" disabled placeholder="Cannot edit" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Shape:</strong> rounded-2xl (not pill, so text doesn't overflow)</li>
          <li><strong>Border:</strong> ds-border-subtle; error = ds-feedback-danger</li>
          <li><strong>Focus:</strong> ring-2 ring-ds-primary-strong</li>
        </ul>
      </section>
    </div>
  );
}
