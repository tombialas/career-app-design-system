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
          Víceřádkový vstup. Styl konzistentní s Inputem: rounded-2xl, border-ds-border-subtle, focus ring ds-primary-strong.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">S labelem</h2>
        <div className="max-w-md">
          <Textarea label="Poznámka" placeholder="Nepovinný popis…" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Stavy</h2>
        <div className="max-w-md space-y-4">
          <Textarea label="S chybou" error="Toto pole je povinné." defaultValue="Neplatná hodnota" />
          <Textarea label="Disabled" disabled placeholder="Nelze editovat" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Shape:</strong> rounded-2xl (ne pill, aby text nevytékal)</li>
          <li><strong>Border:</strong> ds-border-subtle; error = ds-feedback-danger</li>
          <li><strong>Focus:</strong> ring-2 ring-ds-primary-strong</li>
        </ul>
      </section>
    </div>
  );
}
