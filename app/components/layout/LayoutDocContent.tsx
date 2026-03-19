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
          How to compose pages: tokens (container, spacing), Container, grid, and AppShell (AppShell + Sidebar). Docs share DocNav on the left.
        </p>
      </header>

      {/* 1. Layout tokeny */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Layout tokens
        </h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Import from{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">@career/design-system/tokens/layout</code>.
        </p>
        <div className="overflow-hidden rounded-xl border border-ds-border-subtle">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ds-border-subtle bg-ds-surface-card-soft/60">
                <th className="px-4 py-3 font-medium text-ds-text-primary">Token</th>
                <th className="px-4 py-3 font-medium text-ds-text-primary">Values</th>
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
          Limits the content width and adds horizontal padding (px-4 sm:px-6 lg:px-8). Great for centered, readable layouts.
        </p>
        <div className="rounded-lg border border-ds-border-subtle bg-ds-surface-card-soft/40 p-4">
          <p className="mb-2 text-xs font-medium text-ds-text-muted">Container size=&quot;md&quot; (768px)</p>
          <Container size="md" className="rounded-lg border-2 border-dashed border-ds-border-subtle bg-ds-surface-card py-4 text-center text-sm text-ds-text-secondary">
            Container content
          </Container>
        </div>
      </section>

      {/* 3. Grid */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Grid
        </h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Use Tailwind <code className="rounded bg-ds-surface-card-soft px-1">grid grid-cols-*</code> and <code className="rounded bg-ds-surface-card-soft px-1">gap-*</code> (gap matches spacing tokens). For more complex layouts use <code className="rounded bg-ds-surface-card-soft px-1">grid-cols-12</code> + <code className="rounded bg-ds-surface-card-soft px-1">col-span-*</code>.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-ds-border-subtle bg-ds-surface-card p-4 text-center text-sm text-ds-text-secondary">
              Col {i}
            </div>
          ))}
        </div>
      </section>

      {/* 4. App shell: demo link (hidden), no live sidebar */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          App shell (AppShell + Sidebar)
        </h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          For pages with side navigation (dashboard, profile). In this documentation, you always see DocNav on the left. The app uses its own Sidebar instead of DocNav—same structure shown in the full-page demo.
        </p>
        <div className="rounded-xl border border-ds-border-subtle bg-ds-surface-card p-6">
          <p className="mb-4 text-sm text-ds-text-secondary">
            <strong>Full-page demo</strong> shows AppShell + Sidebar without DocNav.
          </p>
          {/* Demo routes are intentionally hidden on the documentation site. */}
        </div>
        <p className="mt-4 text-xs text-ds-text-muted">
          Sidebar: w-64, fixed, nav + footer slot. Mobile: drawer + backdrop + hamburger.
        </p>
      </section>

      {/* 4.1 Responsive behavior */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Breakpoints & behavior</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Our responsive switch is intentionally simple: we key behavior off <strong>Tailwind `lg`</strong>.
        </p>
        <div className="rounded-xl border border-ds-border-subtle bg-ds-surface-card-soft/40 p-4">
          <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
            <li>
              <strong>Desktop (&gt;= `lg`, ~1024px and up)</strong>: use <strong>inline</strong> sidebar inside a sticky wrapper.
            </li>
            <li>
              <strong>Mobile / Tablet (&lt; `lg`, below ~1024px)</strong>: use <strong>drawer</strong> sidebar with a hamburger trigger; content remains in the main scroll area.
            </li>
            <li>
              <strong>Spacing</strong>: page padding typically follows <code className="rounded bg-ds-surface-card-soft px-1">px-4</code> (mobile) and <code className="rounded bg-ds-surface-card-soft px-1">lg:px-8</code> (desktop).
            </li>
            <li>
              <strong>Grid</strong>: keep card/layout structure stable; only adjust column count and padding at breakpoints (see <strong>Grid</strong> token guidance).
            </li>
          </ul>
        </div>
      </section>

      {/* 5. When to use what */}
      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          When to use what
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>
            <strong>Container</strong> – page content (forms, text) when you don’t need full width.
          </li>
          <li><strong>AppShell + Sidebar</strong> – apps with navigation (dashboard, candidate area).</li>
          <li>
            <strong>Grid</strong> – cards side-by-side, two-column forms, and responsive grids.
          </li>
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
            <li><strong>Sidebar:</strong> w-64, fixed, bg-ds-surface-card, border-ds-border-subtle; title, nav (activeHref), footer slot; mobile: drawer + backdrop + hamburger</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
