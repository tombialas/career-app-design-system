import { Chip } from "../../../components/molecules/Chip";

export const metadata = {
  title: "Chip · Career Design System",
  description: "Chip / badge component: variants, usage",
};

export default function ChipsDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Chip</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Figma: barevné chipy = bg 500, border 700, text 900. Light (UI bg) a dark (UI dark card). Text lowercase, font-semibold.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Barevné varianty (500 / 700 / 900)</h2>
        <div className="flex flex-wrap gap-2">
          <Chip variant="green">chip title</Chip>
          <Chip variant="red">chip title</Chip>
          <Chip variant="yellow">chip title</Chip>
          <Chip variant="purple">chip title</Chip>
          <Chip variant="mint">chip title</Chip>
          <Chip variant="blue">chip title</Chip>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">UI: light a dark</h2>
        <div className="flex flex-wrap gap-2">
          <Chip variant="light">chip title</Chip>
          <Chip variant="light" selected>vybraný</Chip>
          <Chip variant="dark">chip title</Chip>
          <Chip variant="dark" selected>vybraný</Chip>
        </div>
        <p className="mt-2 text-sm text-ds-text-muted">
          <code className="rounded bg-ds-surface-card-soft/70 px-1">selected</code> jen u light/dark.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Badge varianty (analýza)</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Language (jazyk + úroveň), requirementMatched (odpovídá), requirementMissing (chybí). Read-only v kartách analýzy.
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip variant="language">Czech Mateřský jazyk</Chip>
          <Chip variant="language">English Pokročilý</Chip>
          <Chip variant="requirementMatched">React</Chip>
          <Chip variant="requirementMatched">TypeScript</Chip>
          <Chip variant="requirementMissing">GraphQL</Chip>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Kde to použít</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Filtry (skills, tagy), Traffic Light (green/red/yellow). Aliasy: primary→purple, scoreHigh→green, scoreMedium→yellow, scoreLow→red, default→light.
        </p>
        <div className="text-sm text-ds-text-secondary">
          <code className="block overflow-x-auto rounded-xl bg-ds-surface-card/70 border border-ds-border-subtle p-4 text-xs backdrop-blur-sm">
            {`<Chip variant="green">chip title</Chip>`}
          </code>
        </div>
      </section>
    </div>
  );
}
