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
          Wrapper pro konzistentní formuláře: Label (s htmlFor), volitelný description, dítě (Input / Select / Textarea), chybová hláška. Spacing space-y-2.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Základní</h2>
        <div className="max-w-sm">
          <FormField id="demo-name" label="Jméno">
            <Input id="demo-name" placeholder="Vaše jméno" />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">S popisem a chybou</h2>
        <div className="max-w-sm space-y-4">
          <FormField
            id="demo-email"
            label="Email"
            description="Použijeme ho jen pro notifikace."
          >
            <Input id="demo-email" placeholder="email@example.com" />
          </FormField>
          <FormField
            id="demo-err"
            label="Pole s chybou"
            error="Toto pole je povinné."
          >
            <Input id="demo-err" placeholder="Prázdné" />
          </FormField>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Label:</strong> Label s htmlFor když je id; jinak span s text-sm font-medium</li>
          <li><strong>Error:</strong> text-ds-feedback-danger, role="alert"</li>
          <li><strong>Spacing:</strong> space-y-2 mezi label, description, child, error</li>
        </ul>
      </section>
    </div>
  );
}
