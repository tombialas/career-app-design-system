import { colorPalette, colorTokens } from "../../../../tokens/colors";
import { typographyTokens } from "../../../../tokens/typography";
import { borderWidthTokens, radiusTokens, spacingTokens, zIndexTokens } from "../../../../tokens/layout";
import { durationTokens, easingTokens } from "../../../../tokens/motion";
import { TabsNav, type TabLink } from "../../_components/TabsNav";
import { LinkButton } from "../../_components/LinkButton";
import { Palette, Type } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Design Tokens · Career Design System",
  description: "Single source of truth for design tokens across color, type, layout, and motion.",
};

const tabs: TabLink[] = [
  { value: "overview", label: "Overview" },
  { value: "colors", label: "Colors" },
  { value: "typography", label: "Typography" },
  { value: "system", label: "Layout & Motion" },
  { value: "guardrails", label: "Guardrails" },
];

function OverviewTab() {
  const semanticColorCount = [
    ...Object.values(colorTokens.primary),
    ...Object.values(colorTokens.accent.mint),
    ...Object.values(colorTokens.accent.blue),
    ...Object.values(colorTokens.score.high),
    ...Object.values(colorTokens.score.medium),
    ...Object.values(colorTokens.score.low),
    ...Object.values(colorTokens.feedback),
    ...Object.values(colorTokens.surface),
    ...Object.values(colorTokens.text),
    ...Object.values(colorTokens.border),
  ].length;

  const paletteScaleCount = Object.values(colorPalette).reduce((acc, scale) => acc + Object.keys(scale).length, 0);

  const tokenGroups: Array<{ name: string; why: string; when: string; how: string; quick: string }> = [
    {
      name: "Colors",
      why: "Defines brand identity, hierarchy, and system feedback language.",
      when: "Any foreground/background/status usage in product and marketing UI.",
      how: "Prefer semantic tokens (`colorTokens`). Use raw scales (`colorPalette`) only when role-based token is missing.",
      quick: `${semanticColorCount} semantic values + ${paletteScaleCount} raw scale steps`,
    },
    {
      name: "Typography",
      why: "Creates visual rhythm, readability, and brand tone.",
      when: "All textual surfaces across app, web content, and export outputs.",
      how: "Use predefined roles from `typographyTokens` and keep hierarchy consistent.",
      quick: `${Object.keys(typographyTokens).length} typography roles`,
    },
    {
      name: "Layout",
      why: "Keeps spacing, shape, and layering consistent across components.",
      when: "Any container, spacing, border, radius, or stacking decision.",
      how: "Use `spacing`, `radius`, `borderWidth`, and `zIndex` tokens before custom values.",
      quick: `${Object.keys(spacingTokens).length} spacing + ${Object.keys(radiusTokens).length} radius + ${Object.keys(zIndexTokens).length} z-index`,
    },
    {
      name: "Motion",
      why: "Makes interaction feel polished and predictable.",
      when: "Hover, open/close transitions, overlays, and state changes.",
      how: "Pick duration by intent (`fast/normal/slow`) and easing from token set.",
      quick: `${Object.keys(durationTokens).length} durations + ${Object.keys(easingTokens).length} easings`,
    },
  ] as const;

  return (
    <section className="space-y-6">
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Why</p>
          <p className="text-sm text-ds-text-secondary">
            Remove ad-hoc styling and align design intent with implementation outcomes.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">When</p>
          <p className="text-sm text-ds-text-secondary">
            Every new component, redesign, or UI refactor starts from tokens, not random values.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">How</p>
          <p className="text-sm text-ds-text-secondary">
            Pick semantic role first; if missing, extend token set and then consume.
          </p>
        </div>
      </div>

      <div className="space-y-4 border-t border-ds-border-subtle pt-6">
        <h3 className="text-xl font-semibold text-ds-text-primary">Token groups</h3>
        {tokenGroups.map((group) => (
          <div key={group.name} className="space-y-2 border-t border-ds-border-subtle pt-4 first:border-t-0 first:pt-0">
            <h4 className="text-lg font-semibold text-ds-text-primary">{group.name}</h4>
            <div className="grid gap-2 text-sm text-ds-text-secondary lg:grid-cols-3">
              <p><strong>Why:</strong> {group.why}</p>
              <p><strong>When:</strong> {group.when}</p>
              <p><strong>How:</strong> {group.how}</p>
            </div>
            <p className="text-xs text-ds-text-muted">{group.quick}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ColorsTab() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Colors token map</h3>
        <p className="text-sm text-ds-text-secondary">
          Semantic roles live in `colorTokens`; raw scales in `colorPalette` are fallback steps when semantic role is missing.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Semantic families</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
            <li>primary / accent</li>
            <li>surface / text / border</li>
            <li>score / feedback</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Raw scales</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
            <li>purple, mint, blue</li>
            <li>red, green, yellow</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Rule</p>
          <p className="text-sm text-ds-text-secondary">
            If semantic token exists, use it first. Raw shades are for controlled, explicit exceptions.
          </p>
        </div>
      </div>
      <div className="space-y-2 border-t border-ds-border-subtle pt-4 text-sm text-ds-text-secondary">
        <p>
          <strong>Imports:</strong>{" "}
          <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs text-ds-text-primary">
            import {"{ colorTokens, colorPalette }"} from "@career/design-system/tokens/colors"
          </code>
        </p>
        <p>
          Details are fully documented in <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">/docs/foundations/colors</code>.
        </p>
        <div className="pt-2">
          <LinkButton href="/docs/foundations/colors">
            <Palette className="h-4 w-4" aria-hidden />
            Open Colors foundation
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function TypographyTab() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Typography token map</h3>
        <p className="text-sm text-ds-text-secondary">
          `typographyTokens` define strict role-based sizing, line-height, and weight for product and content surfaces.
        </p>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        {Object.entries(typographyTokens).map(([key, token]) => (
          <div key={key} className="grid gap-1 text-sm text-ds-text-secondary lg:grid-cols-[160px,1fr]">
            <p className="font-mono text-xs text-ds-text-muted">{key}</p>
            <p>
              <strong>{token.label}</strong> — {token.fontSize}px / {token.lineHeight}px / {token.fontWeight}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-2 border-t border-ds-border-subtle pt-4 text-sm text-ds-text-secondary">
        <p>
          <strong>Import:</strong>{" "}
          <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs text-ds-text-primary">
            import {"{ typographyTokens }"} from "@career/design-system/tokens/typography"
          </code>
        </p>
        <p>
          Details are fully documented in <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">/docs/foundations/typography</code>.
        </p>
        <div className="pt-2">
          <LinkButton href="/docs/foundations/typography">
            <Type className="h-4 w-4" aria-hidden />
            Open Typography foundation
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function SystemTab() {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Layout and motion system tokens</h3>
        <p className="text-sm text-ds-text-secondary">
          Structural and kinetic tokens that define geometry, spacing rhythm, and interaction timing.
        </p>
      </div>

      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <h4 className="text-lg font-semibold text-ds-text-primary">Layout</h4>
        <div className="grid gap-3 lg:grid-cols-3 text-sm text-ds-text-secondary">
          <p><strong>Spacing:</strong> {Object.entries(spacingTokens).map(([k, v]) => `${k}:${v}px`).join(" · ")}</p>
          <p><strong>Radius:</strong> {Object.entries(radiusTokens).map(([k, v]) => `${k}:${v}px`).join(" · ")}</p>
          <p><strong>Border widths:</strong> {Object.entries(borderWidthTokens).map(([k, v]) => `${k}:${v}px`).join(" · ")}</p>
        </div>
        <p className="text-sm text-ds-text-secondary">
          <strong>Z-index:</strong> {Object.entries(zIndexTokens).map(([k, v]) => `${k}:${v}`).join(" · ")}
        </p>
      </div>

      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <h4 className="text-lg font-semibold text-ds-text-primary">Motion</h4>
        <div className="grid gap-3 lg:grid-cols-2 text-sm text-ds-text-secondary">
          <p><strong>Durations:</strong> {Object.entries(durationTokens).map(([k, v]) => `${k}:${v}`).join(" · ")}</p>
          <p><strong>Easing:</strong> {Object.entries(easingTokens).map(([k, v]) => `${k}:${v}`).join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}

function GuardrailsTab() {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Production guardrails</h3>
        <p className="text-sm text-ds-text-secondary">
          Non-negotiable rules that prevent style drift and enforce consistent implementation.
        </p>
      </div>

      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <h4 className="text-lg font-semibold text-ds-text-primary">Token naming anatomy</h4>
        <p className="text-sm text-ds-text-secondary">
          Every token follows: <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">[prefix]-[category]-[role/modifier]</code>
        </p>
        <p className="text-sm text-ds-text-secondary">
          Example: <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">ds-surface-card-soft</code> ={" "}
          <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">ds</code> +{" "}
          <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">surface</code> +{" "}
          <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">card-soft</code>
        </p>
      </div>

      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <h4 className="text-lg font-semibold text-ds-text-primary">Layout hard rules</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>Strictly enforce the 8pt grid rhythm for spacing decisions.</li>
          <li>Interactive elements must default to `rounded-full` (pill) or `rounded-3xl` to preserve brand geometry.</li>
          <li>
            <strong>Nested track + thumb</strong> (tabs, segmented control): outer radius must equal inner radius + track padding — CSS{" "}
            <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">--radius-ds-nested-outer</code> ={" "}
            <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">calc(inner + --spacing-ds-tab-track-pad)</code>
            . See <code className="rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs">nestedTabChromeTokens</code> in layout tokens.
          </li>
          <li>Do not fallback to generic radius defaults (`rounded-md`) when DS geometry is defined.</li>
        </ul>
      </div>

      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <h4 className="text-lg font-semibold text-ds-text-primary">Motion hard rules</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>UI must feel snappy and responsive; default state changes should stay at fast/normal durations.</li>
          <li>Never exceed 300ms for common interactions (hover, state change, modal open) unless explicitly justified.</li>
          <li>Reserve slow tokens for large layout shifts or narrative onboarding only.</li>
        </ul>
      </div>

      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <h4 className="text-lg font-semibold text-ds-text-primary">General quality rules</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>No hardcoded visual values inside production components when a token exists.</li>
          <li>One semantic meaning = one token path; avoid aliases that duplicate existing roles.</li>
          <li>Token changes are documented in Foundations first, then consumed by components.</li>
        </ul>
      </div>
    </section>
  );
}

export default async function DesignTokensDocsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const tabRaw = sp.tab;
  const tab = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw;
  const active = tabs.some((t) => t.value === tab) ? (tab as string) : "overview";

  const content =
    active === "colors" ? (
      <ColorsTab />
    ) : active === "typography" ? (
      <TypographyTab />
    ) : active === "system" ? (
      <SystemTab />
    ) : active === "guardrails" ? (
      <GuardrailsTab />
    ) : (
      <OverviewTab />
    );

  return (
    <div className="w-full space-y-8 pt-2">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Category</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Design Tokens</h2>
        <p className="max-w-3xl text-[16px] leading-relaxed text-ds-text-secondary">
          Foundation contract for designers and developers. Everything token-related is available here in Foundations UI.
        </p>
        <TabsNav tabs={tabs} defaultValue="overview" activeValue={active} />
      </header>
      {content}
    </div>
  );
}

