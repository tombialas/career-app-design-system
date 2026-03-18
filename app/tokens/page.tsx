import { colorPalette, colorTokens } from "../../tokens/colors";
import { borderWidthTokens, radiusTokens, shadowTokens, spacingTokens, zIndexTokens } from "../../tokens/layout";
import { durationTokens, easingTokens } from "../../tokens/motion";
import { typographyTokens } from "../../tokens/typography";

export const metadata = {
  title: "Tokens · Career Design System",
  description: "Color, typography, and layout tokens",
};

export default function TokensPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Foundation
        </p>
        <h1
          className="tracking-tight text-ds-text-primary"
          style={{
            fontSize: typographyTokens.heading1.fontSize,
            lineHeight: 1.15,
            fontWeight: 600,
          }}
        >
          Tokens
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Semantic tokens: colors, typography, layout, motion, z-index, and borders. The single source of truth—don’t use ad-hoc values.
        </p>
      </header>

      <section id="colors" className="scroll-mt-6">
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Colors</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Brand, system states (score, feedback), surfaces and text.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-ds-text-secondary">Brand & CTA</h3>
            <div className="mt-2 flex flex-wrap gap-4">
              <ColorSwatch name="primary" desc="Primary CTA" value={colorTokens.primary.base} />
              <ColorSwatch name="accent.mint" desc="Calm / success" value={colorTokens.accent.mint.base} />
              <ColorSwatch name="accent.blue" desc="Analytics / info" value={colorTokens.accent.blue.base} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ds-text-secondary">Score (Traffic Lights)</h3>
            <div className="mt-2 flex flex-wrap gap-4">
              <ColorSwatch name="score.high" desc="High Match" value={colorTokens.score.high.base} />
              <ColorSwatch name="score.medium" desc="Potential Risk" value={colorTokens.score.medium.base} />
              <ColorSwatch name="score.low" desc="Low Match" value={colorTokens.score.low.base} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ds-text-secondary">Surfaces</h3>
            <div className="mt-2 flex flex-wrap gap-4">
              <ColorSwatch name="surface.base" desc="App background" value={colorTokens.surface.base} />
              <ColorSwatch name="surface.card" desc="Card" value={colorTokens.surface.card} />
              <ColorSwatch name="surface.darkCard" desc="Hero block" value={colorTokens.surface.darkCard} dark />
            </div>
          </div>
        </div>
      </section>

      <section id="color-scales">
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Color scales (full palette)</h2>
        <p className="mb-4 text-sm text-ds-text-primary">
          Every shade for each brand and system color. Prefer semantic tokens (above) when a role exists; use these when you need a specific step (e.g. soft background, border, or a shade not yet mapped to a token).
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-1 text-sm font-semibold text-ds-text-secondary">Purple (primary brand)</h3>
            <p className="mb-2 text-xs text-ds-text-primary">
              50–200: very light backgrounds, inactive/ghost states. 500: main CTA, primary actions. 600–700: hover, pressed, links. 800–900: text or strong accent on light backgrounds.
            </p>
            <div className="flex flex-wrap gap-1">
              {(Object.entries(colorPalette.purple) as [string, string][]).map(([step, hex]) => (
                <ScaleSwatch key={step} step={step} hex={hex} dark={Number(step) >= 600} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-1 text-sm font-semibold text-ds-text-secondary">Mint (calm / success accent)</h3>
            <p className="mb-2 text-xs text-ds-text-primary">
              50–200: soft success backgrounds, “ready” states. 500: accent for success/calm. 600–700: hover, active success. 800–900: strong teal for text or emphasis.
            </p>
            <div className="flex flex-wrap gap-1">
              {(Object.entries(colorPalette.mint) as [string, string][]).map(([step, hex]) => (
                <ScaleSwatch key={step} step={step} hex={hex} dark={Number(step) >= 600} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-1 text-sm font-semibold text-ds-text-secondary">Blue (info / analytics)</h3>
            <p className="mb-2 text-xs text-ds-text-primary">
              50–200: light info backgrounds, charts. 500: analytics accent, secondary CTAs. 600–700: hover, links. 800–900: text or strong accent on light.
            </p>
            <div className="flex flex-wrap gap-1">
              {(Object.entries(colorPalette.blue) as [string, string][]).map(([step, hex]) => (
                <ScaleSwatch key={step} step={step} hex={hex} dark={Number(step) >= 600} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-1 text-sm font-semibold text-ds-text-secondary">System: red, green, yellow</h3>
            <p className="mb-2 text-xs text-ds-text-primary">
              100: soft background for toasts/alerts. 500–700: score badges (Traffic Lights), buttons, icons. 900: dark text on light when you need maximum contrast. Use for feedback (success, warning, error) and Fit/Growth score.
            </p>
            <div className="flex flex-wrap gap-3">
              <div>
                <p className="mb-1 text-[11px] font-medium text-ds-text-primary">red</p>
                <div className="flex gap-1">
                  {(Object.entries(colorPalette.red) as [string, string][]).map(([step, hex]) => (
                    <ScaleSwatch key={step} step={step} hex={hex} dark={step === "700" || step === "900"} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-medium text-ds-text-primary">green</p>
                <div className="flex gap-1">
                  {(Object.entries(colorPalette.green) as [string, string][]).map(([step, hex]) => (
                    <ScaleSwatch key={step} step={step} hex={hex} dark={step === "700" || step === "900"} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-medium text-ds-text-primary">yellow</p>
                <div className="flex gap-1">
                  {(Object.entries(colorPalette.yellow) as [string, string][]).map(([step, hex]) => (
                    <ScaleSwatch key={step} step={step} hex={hex} dark={step === "700" || step === "900"} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="typography">
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Typography</h2>
        <p className="mb-4 text-sm text-ds-text-primary">
          Figtree. Role: hero, page title, section, body, button, caption, badge.
        </p>
        <div className="space-y-2">
          {(
            [
              ["heading1", "Hero heading"],
              ["heading2", "Page title"],
              ["heading3", "Section: Fit Score"],
              ["heading4", "Block: Hard skills"],
              ["bodyL", "Body text."],
              ["button", "Button label"],
              ["caption", "Meta: 2d ago"],
              ["labelTiny", "BADGE"],
            ] as const
          ).map(([key, sample]) => {
            const t = typographyTokens[key];
            return (
              <div
                key={key}
                className="flex items-baseline justify-between gap-4 rounded-lg bg-ds-surface-base/50 px-3 py-1.5"
              >
                <div className="min-w-0">
                  <div
                    style={{
                      fontSize: t.fontSize,
                      lineHeight: 1.1,
                      fontWeight: t.fontWeight,
                    }}
                  >
                    {sample}
                  </div>
                  <p className="mt-0.5 text-[11px] text-ds-text-primary">{t.label}</p>
                </div>
                <span className="shrink-0 text-[11px] text-ds-text-tertiary">
                  {t.fontSize} / {t.lineHeight} · {t.fontWeight}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="layout">
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Layout</h2>
        <p className="mb-4 text-sm text-ds-text-primary">
          Spacing (4px base), radius, elevation, shadows.
        </p>
        <div>
          <h3 className="text-sm font-semibold text-ds-text-secondary">Spacing</h3>
          <p className="mt-1 text-sm text-ds-text-primary">
            {Object.entries(spacingTokens).map(([k, v]) => `${k}: ${v}px`).join(", ")}
          </p>
          <h3 className="mt-4 text-sm font-semibold text-ds-text-secondary">Radius</h3>
          <p className="mt-1 text-sm text-ds-text-primary">
            sm {radiusTokens.sm}px, md {radiusTokens.md}px, lg {radiusTokens.lg}px, xl {radiusTokens.xl}px, pill
          </p>
          <h3 className="mt-4 text-sm font-semibold text-ds-text-secondary">Elevation</h3>
          <p className="mt-1 text-sm text-ds-text-primary">none, card, cardHover, modal</p>
          <h3 className="mt-4 text-sm font-semibold text-ds-text-secondary">Shadows (diffuse)</h3>
          <p className="mt-1 text-sm text-ds-text-primary">
            Large blur, low opacity — soft and visible. For inputs, floating elements.
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            {(["diffuseSm", "diffuseMd", "diffuseLg"] as const).map((key) => (
              <div
                key={key}
                className="h-16 w-24 rounded-2xl bg-ds-surface-card"
                style={{ boxShadow: shadowTokens[key] }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="motion">
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Motion</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Duration: fast (hover, feedback), normal (dropdown, modal open), slow (sidebar/drawer). Easing: ease-out-expo for smooth arrivals—cards and overlays don’t snap linearly.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-ds-text-secondary">Duration</h3>
            <ul className="mt-2 space-y-1 text-sm text-ds-text-primary">
              <li>
                <code className="rounded bg-ds-surface-card-soft/70 px-1">fast</code> {durationTokens.fast} — button hover, focus
              </li>
              <li>
                <code className="rounded bg-ds-surface-card-soft/70 px-1">normal</code> {durationTokens.normal} — dropdown open, modal
              </li>
              <li>
                <code className="rounded bg-ds-surface-card-soft/70 px-1">slow</code> {durationTokens.slow} — sidebar / drawer slide-out
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ds-text-secondary">Easing</h3>
            <ul className="mt-2 space-y-1 text-sm text-ds-text-primary">
              <li><code className="rounded bg-ds-surface-card-soft/70 px-1">outExpo</code> {easingTokens.outExpo}</li>
              <li><code className="rounded bg-ds-surface-card-soft/70 px-1">out</code> {easingTokens.out}</li>
              <li><code className="rounded bg-ds-surface-card-soft/70 px-1">linear</code> — progress, indeterminate</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-ds-text-muted">
          CSS: <code>var(--duration-ds-fast)</code>, <code>var(--ease-ds-out-expo)</code>
        </p>
      </section>

      <section id="z-index">
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Z-Index</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          One z-index scale across the app. Overlay sits under modals, toasts stay on top.
        </p>
        <ul className="space-y-1 text-sm text-ds-text-primary">
          {(
            [
              ["base", "Base layer"],
              ["above", "Above content (sticky)"],
              ["overlay", "Overlay (drawer backdrop)"],
              ["dropdown", "Dropdown, popover"],
              ["modal", "Modal, dialog"],
              ["toast", "Toast notifications"],
              ["max", "Max (tooltips; ensure on top)"],
            ] as const
          ).map(([key, desc]) => (
            <li key={key}>
              <code className="rounded bg-ds-surface-card-soft/70 px-1">z-ds-{key}</code> {zIndexTokens[key]} — {desc}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ds-text-muted">
          CSS: <code>var(--z-ds-overlay)</code>, <code>var(--z-ds-modal)</code>
        </p>
      </section>

      <section id="border-width">
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Stroke / Border width</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Border thickness for dividers and focus rings.
        </p>
        <div className="flex flex-wrap items-baseline gap-6">
          {(Object.entries(borderWidthTokens) as [keyof typeof borderWidthTokens, number][]).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center gap-1">
              <div
                className="bg-ds-border-subtle"
                style={{ height: value === 0 ? 2 : value * 4, width: 48 }}
              />
              <span className="text-xs font-medium text-ds-text-primary">{key}</span>
              <span className="text-[11px] text-ds-text-muted">{value === 0 ? "0" : `${value}px`}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-ds-text-muted">
          CSS: <code>var(--border-width-ds-thin)</code>, <code>var(--border-width-ds-medium)</code>
        </p>
      </section>
    </div>
  );
}

function ColorSwatch({
  name,
  desc,
  value,
  dark,
}: { name: string; desc: string; value: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl border border-ds-border-subtle shadow-sm" style={{ backgroundColor: value }} />
      <div>
        <p className="text-xs font-semibold text-ds-text-primary">{name}</p>
        <p className="text-[11px] text-ds-text-primary">{desc}</p>
        <p className={`text-[11px] ${dark ? "text-ds-on-dark-muted" : "text-ds-text-primary"}`}>{value}</p>
      </div>
    </div>
  );
}

function ScaleSwatch({
  step,
  hex,
  dark,
}: { step: string; hex: string; dark?: boolean }) {
  return (
    <div
      className="flex h-9 w-9 flex-col items-center justify-end rounded-lg pb-0.5 text-[10px]"
      style={{ backgroundColor: hex }}
      title={hex}
    >
      <span className={dark ? "text-white" : "text-ds-text-secondary"}>{step}</span>
    </div>
  );
}
