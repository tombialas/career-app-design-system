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
          Figma: colored chips = bg 500, border 700, text 900. Light (UI background) and dark (UI dark card). Lowercase text, font-semibold.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Color variants (500 / 700 / 900)</h2>
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
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">UI: light and dark</h2>
        <div className="flex flex-wrap gap-2">
          <Chip variant="light">chip title</Chip>
          <Chip variant="light" selected>selected</Chip>
          <Chip variant="dark">chip title</Chip>
          <Chip variant="dark" selected>selected</Chip>
        </div>
        <p className="mt-2 text-sm text-ds-text-muted">
          <code className="rounded bg-ds-surface-card-soft/70 px-1">selected</code> only in light/dark.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Badge variants (analysis)</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Language (language + level), requirementMatched (matches), requirementMissing (missing). Read-only inside analysis cards.
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip variant="language">Czech - Native language</Chip>
          <Chip variant="language">English - Advanced</Chip>
          <Chip variant="requirementMatched">React</Chip>
          <Chip variant="requirementMatched">TypeScript</Chip>
          <Chip variant="requirementMissing">GraphQL</Chip>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Where to use</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Filters (skills, tags), Traffic Light (green/red/yellow). Aliases: primary→purple, scoreHigh→green, scoreMedium→yellow, scoreLow→red, default→light.
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
