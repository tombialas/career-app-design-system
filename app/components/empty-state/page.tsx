import { EmptyState } from "../../../components/patterns/EmptyState";
import { Button } from "../../../components/molecules/Button";
import { Inbox } from "lucide-react";

export const metadata = {
  title: "Empty state · Career Design System",
  description: "Empty state pattern: ikona + nadpis + popis + CTA",
};

export default function EmptyStateDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Pattern
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Empty state
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Prázdný stav sekce: ikona v kruhu, nadpis, popis a volitelná CTA. Použití: žádné přihlášky, prázdný Vault, prázdný výsledek vyhledávání.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Základní</h2>
        <div className="max-w-md">
          <EmptyState
            icon={<Inbox className="h-7 w-7" />}
            title="Zatím žádné přihlášky"
            description="Až budete mít přihlášky, objeví se zde. Můžete začít prohlížením nabídek."
          />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">S CTA</h2>
        <div className="max-w-md">
          <EmptyState
            icon={<Inbox className="h-7 w-7" />}
            title="Žádné výsledky"
            description="Zkuste změnit filtry nebo hledaný výraz."
            action={<Button>Zkusit znovu</Button>}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Kontejner:</strong> rounded-3xl, border-dashed, bg-ds-surface-base/50, p-8, text-center</li>
          <li><strong>Ikona:</strong> volitelná, v kruhu 16×16, bg-ds-surface-card-soft</li>
          <li><strong>Title:</strong> text-lg font-bold</li>
          <li><strong>Description:</strong> mt-2 mb-6, max-w-sm, text-sm text-secondary</li>
        </ul>
      </section>
    </div>
  );
}
