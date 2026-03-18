import { Card } from "../../../components/organisms/Card";
import { Button } from "../../../components/molecules/Button";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Card · Career Design System",
  description: "Card component: variants, hoverable, usage for results and Vault",
};

export default function CardDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Card</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A container for results, Vault items, and hero blocks. Variants: default, soft, dark, and reference accents (highlightPink / Green / Blue).
          Optionally{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">hoverable</code>,{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">compact</code>.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Variants</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          default, soft, dark, and accents (reference: pink, green, blue).
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card variant="default">
            <p className="text-sm font-medium text-ds-text-primary">Default</p>
            <p className="mt-1 text-sm text-ds-text-secondary">White card with diffuse shadow.</p>
          </Card>
          <Card variant="soft">
            <p className="text-sm font-medium text-ds-text-primary">Soft</p>
            <p className="mt-1 text-sm text-ds-text-secondary">Purple tint.</p>
          </Card>
          <Card variant="dark">
            <p className="text-sm font-medium text-ds-on-dark">Dark</p>
            <p className="mt-1 text-sm text-ds-on-dark-muted">Hero / CTA.</p>
          </Card>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Card variant="highlightPink" compact>
            <p className="text-sm font-medium text-ds-text-primary">Highlight Pink</p>
            <p className="mt-0.5 text-xs text-ds-text-muted">5 min</p>
          </Card>
          <Card variant="highlightGreen" compact>
            <p className="text-sm font-medium text-ds-text-primary">Highlight Green</p>
            <p className="mt-0.5 text-xs text-ds-text-muted">12 min</p>
          </Card>
          <Card variant="highlightBlue" compact>
            <p className="text-sm font-medium text-ds-text-primary">Highlight Blue</p>
            <p className="mt-0.5 text-xs text-ds-text-muted">15 min</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Hoverable</h2>
        <p className="mb-4 text-sm text-ds-text-primary">
          For clickable cards: slight lift and stronger shadow on hover (150ms ease-out).
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card variant="default" hoverable>
            <p className="text-sm font-medium text-ds-text-primary">Result card</p>
            <p className="mt-1 text-sm text-ds-text-muted">Role · Company</p>
          </Card>
          <Card variant="default" hoverable>
            <p className="text-sm font-medium text-ds-text-primary">Vault item</p>
            <p className="mt-1 text-sm text-ds-text-muted">Snippet or skill</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Usage</h2>
        <p className="mb-4 text-sm text-ds-text-primary">
          Dark card: primary + ghostOnDark buttons (same as Button doc). Default card for lists and detail blocks.
        </p>
        <Card variant="dark" className="max-w-md">
          <p className="mb-4 text-sm text-ds-on-dark">
            Hero or CTA block: use primary + ghost for actions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <Sparkles className="h-5 w-5" />
              Tailor now
            </Button>
            <Button variant="ghostOnDark">Skip</Button>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Radius:</strong> 3xl</li>
            <li><strong>Padding:</strong> p-6 (24px); compact → p-4</li>
            <li><strong>Highlight:</strong> highlightPink | highlightGreen | highlightBlue (ds-accent-*-soft)</li>
            <li><strong>Default:</strong> frosted surface (bg-ds-surface-card/70 + blur + border)</li>
            <li><strong>Hoverable:</strong> hover shadow-ds-diffuse-md, -translate-y-0.5, 150ms ease-out</li>
            <li><strong>Semantic:</strong> optional <code className="rounded bg-ds-surface-card-soft/70 px-1">as</code> (div | article | section)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
