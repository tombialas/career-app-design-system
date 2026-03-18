import { Sparkles } from "lucide-react";
import { Button } from "../../../components/molecules/Button";
import { spacingTokens } from "../../../tokens/layout";

const buttonPaddingSpec: Record<string, string> = {
  sm: `${spacingTokens[3]}px / ${spacingTokens[6]}px`,
  md: `${spacingTokens[4]}px / ${spacingTokens[6]}px`,
  lg: `${spacingTokens[5]}px / ${spacingTokens[8]}px`,
};

export const metadata = {
  title: "Button · Career Design System",
  description: "Button component: variants, sizes, usage",
};

export default function ButtonsDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Button</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Pill-shaped CTA — one color, three levels (default, hover, inactive). Icons: Lucide as the child, with{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">gap-3</code>.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Variants</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">primary, secondary, ghost, mint, blue, destructive.</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">
            <Sparkles className="h-5 w-5" />
            Tailor my CV (1 credit)
          </Button>
          <Button variant="primary" disabled>Inactive</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="mint">Mint</Button>
          <Button variant="blue">Blue</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Sizes</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          sm, md (default), lg — comfortable for both finger and mouse.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Padding (vertical / horizontal):</strong> sm {buttonPaddingSpec.sm} · md {buttonPaddingSpec.md} · lg {buttonPaddingSpec.lg}</li>
            <li><strong>Gap</strong> between icon and label: {spacingTokens[3]}px (gap-3)</li>
            <li><strong>Radius:</strong> pill (9999px)</li>
            <li><strong>Font:</strong> Figtree 600, size depends on button size</li>
            <li><strong>Motion:</strong> 150ms ease-out; hover scale 1.02, active scale 0.98 (see Overview → Motion & interaction).</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Usage</h2>
        <div className="rounded-2xl bg-ds-surface-dark p-6 text-ds-on-dark">
          <p className="mb-4 text-sm text-ds-on-dark">
            On dark cards (hero blocks): primary + ghost.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <Sparkles className="h-5 w-5" />
              Tailor now
            </Button>
            <Button variant="ghostOnDark">Skip</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
