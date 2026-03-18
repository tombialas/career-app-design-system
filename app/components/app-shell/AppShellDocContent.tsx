"use client";

import Link from "next/link";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import { Card } from "../../../components/organisms/Card";
import { Button } from "../../../components/molecules/Button";
import { Home, Briefcase } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/demo/dashboard", label: "My Applications", icon: Briefcase },
];

export default function AppShellDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">AppShell</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Page wrapper pro aplikaci. Drží background, layout se sidebar sloupcem a scroll (scrolluje main, ne sidebar).
          Varianty: <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">boxed</code> a{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">canvas</code>.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Live demos</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/demo/layout" className="text-sm font-medium text-ds-primary-strong hover:underline">
            App shell preview
          </Link>
          <Link href="/demo/dashboard" className="text-sm font-medium text-ds-primary-strong hover:underline">
            My Applications
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">API</h2>
        <Card className="space-y-3">
          <p className="text-sm text-ds-text-secondary">
            <strong>variant</strong>: boxed (default) nebo canvas. <strong>sidebar</strong>: libovolný sidebar komponent (typicky <code>Sidebar</code>).
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="ghost">
              boxed
            </Button>
            <Button size="sm" variant="ghost">
              canvas
            </Button>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Composition (example)</h2>
        <Card className="space-y-3">
          <p className="text-sm text-ds-text-secondary">
            AppShell + Sidebar (inline/drawer) je náš základ pro layout aplikace i dokumentace.
          </p>
          <div className="rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-4 backdrop-blur-sm">
            <AppShell
              variant="canvas"
              sidebar={
                <div className="hidden lg:block sticky top-0 h-screen">
                  <Sidebar title="Demo" themeVariant="dark" variant="inline" navItems={navItems} />
                </div>
              }
            >
              <div className="p-4 text-sm text-ds-text-secondary">Canvas content area</div>
            </AppShell>
          </div>
        </Card>
      </section>
    </div>
  );
}

