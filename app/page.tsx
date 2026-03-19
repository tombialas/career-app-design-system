import Link from "next/link";
import { Component, Palette, Type, Compass, Box, Blocks, LayoutGrid, Shapes } from "lucide-react";
import { docsIndex } from "../config/docsIndex";
import { DocSearch } from "../components/molecules/DocSearch";
import { ComponentShowcase } from "./_components/ComponentShowcase";

const quickLinks: Array<{ href: string; label: string; description: string; icon: React.ReactNode }> = [
  { href: "/docs/foundations/design-tokens", label: "Design Tokens", description: "Colors, type, layout, motion", icon: <Component className="h-5 w-5" /> },
  { href: "/docs/foundations/colors", label: "Colors", description: "Palettes and semantic roles", icon: <Palette className="h-5 w-5" /> },
  { href: "/docs/foundations/typography", label: "Typography", description: "Figtree font system and rules", icon: <Type className="h-5 w-5" /> },
  { href: "/docs/brand/mission-vision", label: "Brand", description: "Mission, vision, tone of voice", icon: <Compass className="h-5 w-5" /> },
];

const componentLinks: Array<{ href: string; label: string; count: string; icon: React.ReactNode }> = [
  { href: "/docs/atoms", label: "Atoms", count: "6 components", icon: <Box className="h-4 w-4" /> },
  { href: "/docs/molecules", label: "Molecules", count: "11 components", icon: <Blocks className="h-4 w-4" /> },
  { href: "/docs/organisms", label: "Organisms", count: "9 components", icon: <LayoutGrid className="h-4 w-4" /> },
  { href: "/docs/patterns", label: "Patterns", count: "3 patterns", icon: <Shapes className="h-4 w-4" /> },
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <header className="space-y-6 pt-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ds-text-muted">
            Career App · Design System
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ds-text-primary lg:text-5xl">
            Build with purpose.
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
            Tokens, components, and patterns for Career App. One system, one source of truth —
            from brand identity to production-ready UI.
          </p>
        </div>
        <div className="max-w-xl">
          <DocSearch entries={docsIndex} />
        </div>
      </header>

      {/* Quick links — foundations & brand */}
      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-ds-text-primary">
          Foundations
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start gap-3 rounded-3xl border border-ds-border-subtle bg-ds-surface-card/50 p-4 transition-all duration-[var(--duration-ds-fast)] hover:border-ds-border-subtle/80 hover:shadow-ds-diffuse-md hover:-translate-y-0.5"
            >
              <span className="mt-0.5 shrink-0 text-ds-text-muted transition-colors group-hover:text-ds-primary-strong">
                {link.icon}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ds-text-primary">{link.label}</p>
                <p className="mt-0.5 text-xs text-ds-text-muted">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Component categories */}
      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-ds-text-primary">
            Components
          </h2>
          <div className="hidden items-center gap-1.5 sm:flex">
            {componentLinks.map((cl) => (
              <Link
                key={cl.href}
                href={cl.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-ds-border-subtle bg-ds-surface-card-soft/50 px-3 py-1.5 text-xs font-medium text-ds-text-secondary transition-colors hover:border-ds-primary-strong hover:text-ds-primary-strong"
              >
                {cl.icon}
                {cl.label}
                <span className="text-ds-text-muted">· {cl.count}</span>
              </Link>
            ))}
          </div>
        </div>
        <ComponentShowcase />
      </section>

      {/* Design principles */}
      <section className="space-y-5 border-t border-ds-border-subtle pt-8">
        <h2 className="text-xl font-semibold tracking-tight text-ds-text-primary">
          Design principles
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-ds-text-primary">Playful & human</p>
            <p className="text-sm leading-relaxed text-ds-text-secondary">
              Friendly and light. No stiff corporate aesthetics. Short headings, minimal decoration, warm interactions.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-ds-text-primary">Pill geometry</p>
            <p className="text-sm leading-relaxed text-ds-text-secondary">
              Pills (<code className="rounded bg-ds-surface-card-soft px-1 text-xs">rounded-full</code>) and <code className="rounded bg-ds-surface-card-soft px-1 text-xs">rounded-3xl</code> for all interactive elements. 8pt grid rhythm.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-ds-text-primary">Snappy motion</p>
            <p className="text-sm leading-relaxed text-ds-text-secondary">
              Never exceed 300ms for common interactions. Surface = border + blur; shadows as subtle depth only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
