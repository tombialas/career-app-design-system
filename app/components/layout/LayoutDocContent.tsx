"use client";

import Link from "next/link";
import { Container } from "../../../components/organisms/Container";
import { containerTokens, spacingTokens } from "../../../tokens/layout";

export default function LayoutDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Foundation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Layout
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Jak skládat stránky: tokeny (kontejner, spacing), Container, grid a app shell (AppShell + Sidebar). Doc stránky sdílejí DocNav vlevo.
        </p>
      </header>

      {/* 1. Layout tokeny */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Layout tokeny
        </h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Import z <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">@career/design-system/tokens/layout</code>.
        </p>
        <div className="overflow-hidden rounded-xl border border-ds-border-subtle">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ds-border-subtle bg-ds-surface-card-soft/60">
                <th className="px-4 py-3 font-medium text-ds-text-primary">Token</th>
                <th className="px-4 py-3 font-medium text-ds-text-primary">Hodnoty</th>
              </tr>
            </thead>
            <tbody className="text-ds-text-secondary">
              <tr className="border-b border-ds-border-subtle">
                <td className="px-4 py-3 font-medium">containerTokens</td>
                <td className="px-4 py-3">sm {containerTokens.sm}px, md {containerTokens.md}px, lg {containerTokens.lg}px, xl {containerTokens.xl}px, 2xl {containerTokens["2xl"]}px</td>
              </tr>
              <tr className="border-b border-ds-border-subtle">
                <td className="px-4 py-3 font-medium">spacingTokens</td>
                <td className="px-4 py-3">1–16 (4px base): {Object.entries(spacingTokens).slice(0, 6).map(([k, v]) => `${k}: ${v}px`).join(", ")} …</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Container */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Container
        </h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Omezí šířku obsahu a přidá horizontální padding (px-4 sm:px-6 lg:px-8). Pro centrovaný obsah a čitelnou šířku.
        </p>
        <div className="rounded-lg border border-ds-border-subtle bg-ds-surface-card-soft/40 p-4">
          <p className="mb-2 text-xs font-medium text-ds-text-muted">Container size=&quot;md&quot; (768px)</p>
          <Container size="md" className="rounded-lg border-2 border-dashed border-ds-border-subtle bg-ds-surface-card py-4 text-center text-sm text-ds-text-secondary">
            Obsah uvnitř kontejneru
          </Container>
        </div>
      </section>

      {/* 3. Grid */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Grid
        </h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Používej Tailwind <code className="rounded bg-ds-surface-card-soft px-1">grid grid-cols-*</code> a <code className="rounded bg-ds-surface-card-soft px-1">gap-*</code> (gap odpovídá spacing tokenům). Pro složitější layouty <code className="rounded bg-ds-surface-card-soft px-1">grid-cols-12</code> + <code className="rounded bg-ds-surface-card-soft px-1">col-span-*</code>.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-ds-border-subtle bg-ds-surface-card p-4 text-center text-sm text-ds-text-secondary">
              Col {i}
            </div>
          ))}
        </div>
      </section>

      {/* 4. App shell – odkaz na demo, žádný živý sidebar */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          App shell (AppShell + Sidebar)
        </h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Pro stránky s boční navigací (dashboard, profil). Na této dokumentaci máš vlevo vždy jen DocNav. Aplikace bude mít místo DocNav vlastní Sidebar – stejnou strukturu uvidíš na full-page demo.
        </p>
        <div className="rounded-xl border border-ds-border-subtle bg-ds-surface-card p-6">
          <p className="mb-4 text-sm text-ds-text-secondary">
            <strong>Full-page demo</strong> ukazuje AppShell + Sidebar bez DocNav (jako v reálné appce).
          </p>
          <Link
            href="/demo/layout"
            className="inline-flex items-center gap-2 rounded-lg bg-ds-primary-strong px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Otevřít demo layoutu →
          </Link>
        </div>
        <p className="mt-4 text-xs text-ds-text-muted">
          Sidebar: w-64, fixed, nav + footer slot. Mobil: drawer + backdrop + hamburger.
        </p>
      </section>

      {/* 5. Kdy co použít */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Kdy co použít
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Container</strong> – obsah stránky (formuláře, text), když nechceš full-width.</li>
          <li><strong>AppShell + Sidebar</strong> – aplikace s navigací (dashboard, candidate area).</li>
          <li><strong>Grid</strong> – karty vedle sebe, formuláře ve dvou sloupcích, mřížky.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Specification
        </h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Container:</strong> size sm|md|lg|xl|2xl, mx-auto, px-4 sm:px-6 lg:px-8</li>
            <li><strong>AppShell:</strong> flex min-h-screen, bg-ds-surface-base; sidebar + spacer w-64 (lg) + main (flex-1, p-4 sm:p-6 lg:p-8)</li>
            <li><strong>Sidebar:</strong> w-64, fixed, bg-ds-surface-card, border-ds-border-subtle; title, nav (activeHref), footer slot; mobil: drawer + backdrop + hamburger</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
