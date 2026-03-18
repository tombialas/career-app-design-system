import { Label } from "../../../components/atoms/Label";
import { Input } from "../../../components/molecules/Input";

export const metadata = {
  title: "Label · Career Design System",
  description: "Standalone label for form fields",
};

export default function LabelDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Label</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A standalone label for fields when you need more control than the Input’s <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">label</code> (custom layout, multiple inputs under one label).
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">With input</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">htmlFor</code> + input <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">id</code> pro a11y.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="label-demo-field">Job title</Label>
          <Input id="label-demo-field" placeholder="e.g. Product Manager" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Required field (isRequired)</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">isRequired</code> adds a red asterisk after the text. One prop—no manual annotation.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="label-required-field" isRequired>Email</Label>
          <Input id="label-required-field" placeholder="email@example.com" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Typography:</strong> labelTiny — 12px, font-bold, uppercase, tracking-wider, text-ds-text-primary</li>
            <li><strong>Required:</strong> isRequired → asterisk in text-ds-feedback-danger, aria-hidden</li>
            <li><strong>Spacing:</strong> add margin (e.g. mb-1.5) when used above an input</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
