import { FormField } from "../../../components/patterns/FormField";
import { Input } from "../../../components/molecules/Input";

export const metadata = {
  title: "Form field · Career Design System",
  description: "Form field wrapper: Label + input + error + description",
};

export default function FormFieldDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Form field
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A wrapper for consistent forms: Label (with htmlFor), optional description, child (Input / Select / Textarea), and an error message. Uses space-y-2 spacing.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Basic</h2>
        <div className="max-w-sm">
          <FormField id="demo-name" label="Name">
            <Input id="demo-name" placeholder="Your name" />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">With description and error</h2>
        <div className="max-w-sm space-y-4">
          <FormField
            id="demo-email"
            label="Email"
            description="We use this only for notifications."
          >
            <Input id="demo-email" placeholder="email@example.com" />
          </FormField>
          <FormField
            id="demo-err"
            label="Error field"
            error="This field is required."
          >
            <Input id="demo-err" placeholder="Empty" />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Label:</strong> Uses htmlFor when an id is present; otherwise renders a span with text-sm font-medium</li>
          <li><strong>Error:</strong> text-ds-feedback-danger, role="alert"</li>
          <li><strong>Spacing:</strong> space-y-2 between label, description, child, and error</li>
        </ul>
      </section>
    </div>
  );
}
