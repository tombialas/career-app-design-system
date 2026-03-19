import { typographyTokens } from "../../../../tokens/typography";
import { TabsNav, type TabLink } from "../../_components/TabsNav";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Typography · Career Design System",
  description: "Brand manual and implementation reference for typography.",
};

const tabs: TabLink[] = [
  { value: "font-system", label: "Font System" },
  { value: "digital-ui", label: "Digital UI" },
  { value: "web-content", label: "Web Content" },
  { value: "print", label: "Print" },
];

function TypeSample({
  name,
  fontSize,
  lineHeight,
  fontWeight,
  label,
}: {
  name: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  label: string;
}) {
  return (
    <div className="space-y-2 border-t border-ds-border-subtle pt-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">{name}</p>
      <p
        className="text-ds-text-primary"
        style={{ fontSize: `${Math.max(fontSize * 0.9, 14)}px`, lineHeight: `${Math.max(lineHeight * 0.9, 20)}px`, fontWeight }}
      >
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="font-mono text-xs text-ds-text-secondary">
        {label} - {fontSize}px / {lineHeight}px / {fontWeight}
      </p>
    </div>
  );
}

function FontSystemTab() {
  const items = Object.entries(typographyTokens);
  const usageByToken: Record<string, string> = {
    heading1: "Hero headlines and key campaign statements. Use once per view for dominant context framing.",
    heading2: "Page-level titles for major sections and route headers.",
    heading3: "Section headers inside pages, cards, and structured content blocks.",
    heading4: "Compact subsection titles and component block headers.",
    bodyL: "Default paragraph copy, form help text, and narrative product explanations.",
    button: "Button labels and high-priority interactive controls.",
    caption: "Metadata, timestamps, secondary notes, and technical references.",
    labelTiny: "Micro-labels in chips, badges, and status markers.",
  };

  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Font system</h3>
        <p className="text-sm text-ds-text-secondary">
          Figtree is the primary brand voice. Keep a clean sans-serif fallback stack for environments where custom fonts are unavailable.
        </p>
      </div>
      <div className="grid gap-4 text-sm text-ds-text-secondary lg:grid-cols-3">
        <p>
          <strong>Primary font:</strong> Figtree. Modern, geometric, and highly readable for UI and marketing surfaces.
        </p>
        <p>
          <strong>Fallback:</strong> system sans-serif stack. For office docs and legacy tools, use Arial-compatible rendering.
        </p>
        <p>
          <strong>Licensing principle:</strong> prefer open, low-friction licensing for long-term scale and handoff simplicity.
        </p>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Download</p>
        <p className="text-sm text-ds-text-secondary">
          Source of truth for the primary typeface:
          {" "}
          <a
            href="https://fonts.google.com/specimen/Figtree"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ds-primary-strong underline decoration-ds-primary-strong/40 underline-offset-4"
          >
            Figtree on Google Fonts
          </a>
          .
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {items.map(([name, token]) => (
          <div key={name} className="space-y-2">
            <TypeSample
              name={name}
              label={token.label}
              fontSize={token.fontSize}
              lineHeight={token.lineHeight}
              fontWeight={token.fontWeight}
            />
            <p className="text-sm text-ds-text-secondary">
              <strong>Use:</strong> {usageByToken[name] ?? "General-purpose typographic role."}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Forbidden manipulations</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>Do not stretch or condense letterforms manually.</li>
          <li>Do not fake bold/italic styles if real weights are available.</li>
          <li>Avoid all-caps for long headings or body text blocks.</li>
        </ul>
      </div>
    </section>
  );
}

function DigitalUITab() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Digital UI typography</h3>
        <p className="text-sm text-ds-text-secondary">
          UI typography is optimized for scanability and touch-first interactions, not long reading sessions.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Why</p>
          <p className="text-sm text-ds-text-secondary">
            Users scan screens quickly. Clear hierarchy reduces decision friction and supports conversion.
          </p>
        </div>
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">When</p>
          <p className="text-sm text-ds-text-secondary">
            App screens, web interfaces, dashboards, onboarding, and conversion-focused sections.
          </p>
        </div>
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">How</p>
          <p className="text-sm text-ds-text-secondary">
            Keep one H1 per page, preserve heading rhythm, and maintain consistent line-height ratios.
          </p>
        </div>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">UI type scale standards</p>
        <div className="overflow-hidden rounded-xl border border-ds-border-subtle bg-ds-surface-card/40">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ds-border-subtle bg-ds-surface-card-soft/60">
                <th className="px-3 py-2 font-medium text-ds-text-primary">Role</th>
                <th className="px-3 py-2 font-medium text-ds-text-primary">Token</th>
                <th className="px-3 py-2 font-medium text-ds-text-primary">Desktop / Tablet / Mobile</th>
                <th className="px-3 py-2 font-medium text-ds-text-primary">Rule</th>
              </tr>
            </thead>
            <tbody className="text-ds-text-secondary">
              <tr className="border-b border-ds-border-subtle">
                <td className="px-3 py-2">H1</td>
                <td className="px-3 py-2 font-mono text-xs">heading1</td>
                <td className="px-3 py-2">48 / 40 / 32</td>
                <td className="px-3 py-2">Max once per page</td>
              </tr>
              <tr className="border-b border-ds-border-subtle">
                <td className="px-3 py-2">H2</td>
                <td className="px-3 py-2 font-mono text-xs">heading2</td>
                <td className="px-3 py-2">32 / 28 / 24</td>
                <td className="px-3 py-2">Major section boundaries</td>
              </tr>
              <tr className="border-b border-ds-border-subtle">
                <td className="px-3 py-2">Body</td>
                <td className="px-3 py-2 font-mono text-xs">bodyL</td>
                <td className="px-3 py-2">16 / 16 / 16</td>
                <td className="px-3 py-2">Baseline for readability</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Meta</td>
                <td className="px-3 py-2 font-mono text-xs">caption</td>
                <td className="px-3 py-2">12 / 12 / 12</td>
                <td className="px-3 py-2">Only for secondary metadata</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Minimum interaction legibility</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>Body text should default to comfortable sizes (16px baseline where possible).</li>
          <li>Avoid dense blocks: cap readable line length for narrative copy (around 60-75 chars).</li>
          <li>Key CTA labels must be visually dominant and never rely on color alone.</li>
          <li>Maintain touch-first readability: avoid tiny labels under 12px for interactive elements.</li>
        </ul>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Do / Don&apos;t</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-sm text-emerald-900">
            <p className="font-semibold">Do</p>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>Use clear heading cadence and predictable spacing.</li>
              <li>Keep line-height airy for body copy.</li>
              <li>Use semantic token mapping in components.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3 text-sm text-rose-900">
            <p className="font-semibold">Don&apos;t</p>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>Don&apos;t compress copy into dense paragraphs.</li>
              <li>Don&apos;t mix ad-hoc sizes in one component family.</li>
              <li>Don&apos;t rely on uppercase for visual hierarchy.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebContentTab() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Web content rules</h3>
        <p className="text-sm text-ds-text-secondary">
          Editorial content needs stricter rhythm to preserve readability and SEO semantics.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Hierarchy and semantics</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
            <li>Exactly one H1 per page.</li>
            <li>Use H2/H3/H4 for logical sectioning, not for visual hacks.</li>
            <li>Do not skip heading levels without reason.</li>
          </ul>
        </div>
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Readability cadence</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
            <li>Prefer left alignment for body copy.</li>
            <li>Keep paragraphs short and scannable with intentional whitespace.</li>
            <li>Use note/caption styles for metadata and technical references.</li>
          </ul>
        </div>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Golden standards for web typography</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>Maximum readable paragraph width: target ~600-720px for long-form text blocks.</li>
          <li>Keep line-height around 140-160% for paragraphs to reduce fatigue.</li>
          <li>Use one visual intent per heading level across the whole site.</li>
          <li>Do not publish pages with missing metadata or malformed heading structure.</li>
          <li>
            <strong>Tracking rule:</strong> headings above 24px use tighter letter-spacing (around -0.02em to -0.03em);
            body/meta stay near 0; all-caps labels require wider tracking (+0.05em to +0.10em).
          </li>
          <li>
            <strong>Paragraph rhythm:</strong> spacing between paragraphs should be at least 1.5x line-height (use tokenized vertical rhythm
            like <code className="mx-1 rounded bg-ds-surface-card-soft/70 px-1 py-0.5 font-mono text-xs">space-y-4</code> for text groups).
          </li>
          <li>
            <strong>Export robustness:</strong> generated PDF CV outputs must not use weights below 400. Light/Thin styles degrade too easily
            in compressed PDFs and low-end printers.
          </li>
        </ul>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Example hierarchy map</p>
        <div className="space-y-2">
          <p className="text-4xl font-semibold leading-tight text-ds-text-primary">H1 Page title</p>
          <p className="text-2xl font-semibold leading-tight text-ds-text-primary">H2 Section title</p>
          <p className="text-xl font-semibold leading-snug text-ds-text-primary">H3 Subsection title</p>
          <p className="text-base leading-relaxed text-ds-text-secondary">
            Body copy should remain highly readable and use consistent spacing to avoid visual fatigue.
          </p>
          <p className="text-xs text-ds-text-muted">Note / caption metadata style</p>
        </div>
      </div>
    </section>
  );
}

function PrintTab() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-ds-text-primary">Print and physical media</h3>
        <p className="text-sm text-ds-text-secondary">
          Print typography represents brand quality in a tactile context; technical hygiene is non-negotiable.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Layout discipline</p>
          <p className="text-sm text-ds-text-secondary">
            Keep spacing and margins in modular increments. Protect text with safe zones and generous whitespace.
          </p>
        </div>
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Production setup</p>
          <p className="text-sm text-ds-text-secondary">
            Prepare print files with bleed and correct print color profiles. Validate type rendering before export.
          </p>
        </div>
        <div className="space-y-2 border-t border-ds-border-subtle pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Quality control</p>
          <p className="text-sm text-ds-text-secondary">
            Final human proofreading is mandatory. Typography errors in print are costly and damage brand trust.
          </p>
        </div>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Print specification checklist</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>Use professional tools for output (InDesign/Illustrator class), never office editors for final print assets.</li>
          <li>Apply bleed (typically 3mm) and safe zones before export.</li>
          <li>Convert to print color space and verify output proof before production run.</li>
          <li>Ensure typographic consistency between digital and print brand hierarchy.</li>
        </ul>
      </div>
      <div className="space-y-3 border-t border-ds-border-subtle pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">Operational signage rules</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>No handwritten notices in customer-facing environments.</li>
          <li>No all-caps panic messaging for temporary outages.</li>
          <li>Keep copy empathetic, concise, and solution-oriented.</li>
        </ul>
      </div>
    </section>
  );
}

export default async function TypographyDocsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const tabRaw = sp.tab;
  const tab = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw;
  const active = tabs.some((t) => t.value === tab) ? (tab as string) : "font-system";

  const content =
    active === "digital-ui" ? (
      <DigitalUITab />
    ) : active === "web-content" ? (
      <WebContentTab />
    ) : active === "print" ? (
      <PrintTab />
    ) : (
      <FontSystemTab />
    );

  return (
    <div className="w-full space-y-8 pt-2">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Category</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Typography</h2>
        <p className="max-w-3xl text-[16px] leading-relaxed text-ds-text-secondary">
          Typography is the operational voice of the brand. This manual aligns visual tone, readability, and implementation discipline.
        </p>
        <TabsNav tabs={tabs} defaultValue="font-system" activeValue={active} />
      </header>
      {content}
    </div>
  );
}

