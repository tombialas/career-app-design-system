import { Card } from "../../../../components/organisms/Card";
import { colorPalette, colorTokens } from "../../../../tokens/colors";
import { TabsNav, type TabLink } from "../../_components/TabsNav";
import { ScaleStrip } from "./_components/ScaleStrip";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Colors · Career Design System",
  description: "Brand manual and developer reference for color foundations.",
};

type ScaleName = keyof typeof colorPalette;
const scaleStepOrder = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
const tabs: TabLink[] = [
  { value: "primary", label: "Primary" },
  { value: "neutral", label: "Neutral" },
  { value: "system", label: "System" },
];

function getScaleShades(scaleName: ScaleName) {
  return Object.entries(colorPalette[scaleName])
    .sort((a, b) => scaleStepOrder.indexOf(a[0]) - scaleStepOrder.indexOf(b[0]))
    .map(([step, value]) => ({ step, value }));
}

function toLuminance(hex: string) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function PrimaryTab() {
  const primaryFamilies = [
    {
      name: "Royal Signal",
      subtitle: "Core brand authority",
      why: "Defines identity and gives the product its recognizable signature.",
      when: "Primary CTA, key highlights, and branded moments.",
      how: "Use `primary.base` for action, `primary.soft` for subtle backgrounds, `primary.strong` for emphasis.",
      token: "primary",
      scale: "purple" as const,
    },
    {
      name: "Fresh Lift",
      subtitle: "Positive accent",
      why: "Adds lightness and optimistic momentum to support purple.",
      when: "Secondary highlights, success-adjacent visuals, and onboarding tone.",
      how: "Use as support layer; do not replace primary hierarchy.",
      token: "accent.mint",
      scale: "mint" as const,
    },
    {
      name: "Clear Depth",
      subtitle: "Informational accent",
      why: "Introduces clarity and confidence for analytical or informational touchpoints.",
      when: "Data highlights, informative badges, and neutral-cool accents.",
      how: "Use as tertiary accent behind primary and mint.",
      token: "accent.blue",
      scale: "blue" as const,
    },
  ] as const;

  return (
    <section className="space-y-5">
      <div id="primary-intent" className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Primary Palette</h3>
        <p className="text-sm text-ds-text-secondary">
          The expressive layer of the brand. Built for recognition, hierarchy, and emotional tone.
        </p>
      </div>
      <div id="primary-scales" className="space-y-5">
      {primaryFamilies.map((family) => (
        <div key={family.name} className="space-y-4 border-t border-ds-border-subtle pt-5 first:border-t-0 first:pt-0">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">{family.subtitle}</p>
            <h4 className="text-xl font-semibold text-ds-text-primary">{family.name}</h4>
          </div>
          <div className="grid gap-2 text-sm text-ds-text-secondary lg:grid-cols-3">
            <p><strong>Why:</strong> {family.why}</p>
            <p><strong>When:</strong> {family.when}</p>
            <p><strong>How:</strong> {family.how}</p>
          </div>
          <p className="text-xs text-ds-text-muted">
            Token family: <code className="rounded bg-ds-surface-card-soft/70 px-1 py-0.5 font-mono">{family.token}</code>
          </p>
          <ScaleStrip
            title={`${family.name} scale`}
            subtitle="Click any shade to inspect details."
            tokenFamily={family.scale}
            shades={getScaleShades(family.scale)}
          />
        </div>
      ))}
      </div>
      <p className="text-xs text-ds-text-muted">
        Naming note: these editorial names are for narrative clarity in the manual. In implementation and team communication,
        always use semantic token names (e.g. <code className="rounded bg-ds-surface-card-soft/70 px-1 py-0.5 font-mono">primary.base</code>,{" "}
        <code className="rounded bg-ds-surface-card-soft/70 px-1 py-0.5 font-mono">surface.card</code>,{" "}
        <code className="rounded bg-ds-surface-card-soft/70 px-1 py-0.5 font-mono">feedback.success</code>).
      </p>
    </section>
  );
}

function NeutralTab() {
  const neutralTones = [
    { label: "Canvas Mist", token: "surface.base", value: colorTokens.surface.base, note: "Main app/page background" },
    { label: "Pure Card", token: "surface.card", value: colorTokens.surface.card, note: "Primary content container" },
    { label: "Soft Lavender", token: "surface.cardSoftPurple", value: colorTokens.surface.cardSoftPurple, note: "Subtle elevated surface" },
    { label: "Soft Mint", token: "surface.cardSoftMint", value: colorTokens.surface.cardSoftMint, note: "Alternative soft surface" },
    { label: "Ink Primary", token: "text.primary", value: colorTokens.text.primary, note: "Main text and high contrast labels" },
    { label: "Ink Secondary", token: "text.secondary", value: colorTokens.text.secondary, note: "Secondary content and helper text" },
    { label: "Mist Border", token: "border.subtle", value: colorTokens.border.subtle, note: "Dividers and card outlines" },
    { label: "Night Surface", token: "surface.darkCard", value: colorTokens.surface.darkCard, note: "Dark sidebar and premium dark canvas" },
    { label: "Night Element", token: "surface.darkElement", value: colorTokens.surface.darkElement, note: "Dark nested elements" },
    { label: "Ink on Dark", token: "text.onDark", value: colorTokens.text.onDark, note: "High contrast text on dark surfaces" },
  ] as const;

  const lightNeutrals = neutralTones
    .filter((tone) => !tone.label.toLowerCase().includes("soft") && toLuminance(tone.value) >= 200)
    .sort((a, b) => toLuminance(b.value) - toLuminance(a.value));
  const tintedNeutrals = neutralTones
    .filter((tone) => tone.label.toLowerCase().includes("soft"))
    .sort((a, b) => toLuminance(b.value) - toLuminance(a.value));
  const darkNeutrals = neutralTones
    .filter((tone) => toLuminance(tone.value) < 200 && !tone.label.toLowerCase().includes("soft"))
    .sort((a, b) => toLuminance(a.value) - toLuminance(b.value));

  const toStripShades = (items: ReadonlyArray<(typeof neutralTones)[number]>) =>
    items.map((tone, index) => ({
      step: `${index + 1}`,
      value: tone.value,
      label: tone.label,
      token: tone.token,
      note: tone.note,
    }));

  const lightStrip = toStripShades(lightNeutrals);
  const tintedStrip = toStripShades(tintedNeutrals);
  const darkStrip = toStripShades(darkNeutrals);

  return (
    <section className="space-y-5">
      <div id="neutral-intent" className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Neutral Palette</h3>
        <p className="text-sm text-ds-text-secondary">
          The structural layer. It carries readability, whitespace, and premium calm across the system.
        </p>
      </div>
      <div className="grid gap-2 text-sm text-ds-text-secondary lg:grid-cols-3">
        <p><strong>Why:</strong> Neutral tones create hierarchy without noise and keep interfaces breathable.</p>
        <p><strong>When:</strong> Use for canvas, cards, typography, dividers, and dark-mode base surfaces.</p>
        <p><strong>How:</strong> Keep neutral dominance around 60-90% and let accent colors do the signaling.</p>
      </div>
      <div className="space-y-4">
        <div id="neutral-light" className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Light neutrals</p>
          <ScaleStrip
            title="Light neutral strip"
            subtitle="Ordered by luminance."
            tokenFamily="neutral.light"
            shades={lightStrip.map((s) => ({ step: s.step, value: s.value }))}
          />
        </div>
        <div id="neutral-tinted" className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Tinted neutrals</p>
          <ScaleStrip
            title="Tinted neutral strip"
            subtitle="Soft chromatic neutrals for elevated surfaces."
            tokenFamily="neutral.tinted"
            shades={tintedStrip.map((s) => ({ step: s.step, value: s.value }))}
          />
        </div>
        <div id="neutral-dark" className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Dark neutrals</p>
          <ScaleStrip
            title="Dark neutral strip"
            subtitle="High-contrast dark surfaces and text layers."
            tokenFamily="neutral.dark"
            shades={darkStrip.map((s) => ({ step: s.step, value: s.value }))}
          />
        </div>
      </div>
      <Card className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Recommended composition</p>
        <div className="overflow-hidden rounded-xl border border-ds-border-subtle">
          <div className="flex h-10">
            <div className="w-[60%]" style={{ backgroundColor: colorTokens.surface.base }} />
            <div className="w-[30%]" style={{ backgroundColor: colorTokens.text.secondary }} />
            <div className="w-[10%]" style={{ backgroundColor: colorTokens.primary.base }} />
          </div>
        </div>
        <p className="text-xs text-ds-text-secondary">60% neutral surface / 30% structure and text / 10% accent focus.</p>
      </Card>
    </section>
  );
}

function SystemTab() {
  const systemFamilies = [
    {
      name: "Emerald Confirm",
      why: "Creates trust after successful user actions.",
      when: "Success toasts, completed status, and positive confirmations.",
      how: "Use only for system feedback, not as decorative brand accent.",
      scale: "green" as const,
      base: colorTokens.feedback.success,
      token: "feedback.success",
    },
    {
      name: "Amber Watch",
      why: "Signals caution without hard interruption.",
      when: "Warnings, pending states, and required attention.",
      how: "Pair with clear iconography and concise helper copy.",
      scale: "yellow" as const,
      base: colorTokens.feedback.warning,
      token: "feedback.warning",
    },
    {
      name: "Coral Alert",
      why: "Marks critical risk and destructive outcomes.",
      when: "Error banners, validation failures, and destructive actions.",
      how: "Reserve for genuine risk to keep urgency credible.",
      scale: "red" as const,
      base: colorTokens.feedback.danger,
      token: "feedback.danger",
    },
  ] as const;

  return (
    <section className="space-y-5">
      <div id="system-intent" className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">System Palette</h3>
        <p className="text-sm text-ds-text-secondary">
          Functional color language for product feedback only. These colors must remain semantically strict.
        </p>
      </div>
      <div id="system-scales" className="space-y-5">
      {systemFamilies.map((family) => (
        <div key={family.name} className="space-y-4 border-t border-ds-border-subtle pt-5 first:border-t-0 first:pt-0">
          <div className="space-y-1">
            <h4 className="text-xl font-semibold text-ds-text-primary">{family.name}</h4>
            <p className="text-xs text-ds-text-muted">
              Token: <code className="rounded bg-ds-surface-card-soft/70 px-1 py-0.5 font-mono">{family.token}</code> ({family.base})
            </p>
          </div>
          <div className="grid gap-2 text-sm text-ds-text-secondary lg:grid-cols-3">
            <p><strong>Why:</strong> {family.why}</p>
            <p><strong>When:</strong> {family.when}</p>
            <p><strong>How:</strong> {family.how}</p>
          </div>
          <ScaleStrip
            title={`${family.name} scale`}
            subtitle="Click any shade to inspect details."
            tokenFamily={family.scale}
            shades={getScaleShades(family.scale)}
          />
        </div>
      ))}
      </div>
    </section>
  );
}

export default async function ColorsDocsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const tabRaw = sp.tab;
  const tab = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw;
  const active = tabs.some((t) => t.value === tab) ? (tab as string) : "primary";

  const content = active === "neutral" ? <NeutralTab /> : active === "system" ? <SystemTab /> : <PrimaryTab />;

  return (
    <div className="w-full space-y-8 pt-2">
        <header className="space-y-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Category</p>
            <h2 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Colors</h2>
            <p className="max-w-3xl text-[16px] leading-relaxed text-ds-text-secondary">
              Color language split into three practical layers: Primary, Neutral, and System. Each block defines why it exists, when to
              use it, and how to apply it in production.
            </p>
            <TabsNav tabs={tabs} defaultValue="primary" activeValue={active} />
          </div>
        </header>

        {content}

        <section id="implementation" className="space-y-4 border-t border-ds-border-subtle pt-6">
          <h3 className="text-xl font-semibold text-ds-text-primary">Implementation quick reference</h3>
          <div className="space-y-2 text-sm text-ds-text-secondary">
            <p>
              Import semantic source:
              <code className="ml-2 rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs text-ds-text-primary">
                import {"{ colorTokens }"} from "@career/design-system/tokens/colors"
              </code>
            </p>
            <p>
              Tailwind semantic aliases:
              <code className="ml-2 rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs text-ds-text-primary">
                bg-ds-surface-card text-ds-text-primary border-ds-border-subtle
              </code>
            </p>
          <p>
            Documentation behavior note:
            <code className="ml-2 rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs text-ds-text-primary">
              getAccessibleTextColor()
            </code>
            in strips is a readability helper for this manual; application UI should still rely on semantic text tokens (e.g.
            <code className="mx-1 rounded bg-ds-surface-card-soft px-1 py-0.5 font-mono text-xs text-ds-text-primary">text.onDark</code>).
          </p>
          </div>
        </section>
    </div>
  );
}

