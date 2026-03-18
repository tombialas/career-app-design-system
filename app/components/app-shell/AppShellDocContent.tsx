"use client";

import Link from "next/link";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import { Card } from "../../../components/organisms/Card";
import { Button } from "../../../components/molecules/Button";
import { Home } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
];

export default function AppShellDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">AppShell</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Page wrapper for the application. It holds the background, layout with a sidebar column, and scrolling (the main area scrolls, not the sidebar).
          Variants: <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">boxed</code> and{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">canvas</code>.
        </p>
      </header>

      {/* Live demo routes are intentionally hidden on the documentation site. */}

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">API</h2>
        <Card className="space-y-3">
          <p className="text-sm text-ds-text-secondary">
            <strong>variant</strong>: boxed (default) or canvas. <strong>sidebar</strong>: any sidebar component (typically <code>Sidebar</code>).
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
            AppShell + Sidebar (inline/drawer) is our foundation for application and documentation layouts.
          </p>
          <div className="rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-4 backdrop-blur-sm">
            <AppShell
              variant="canvas"
              sidebar={
                <div className="hidden lg:block sticky top-0 h-screen">
                  <Sidebar title="Example" themeVariant="dark" variant="inline" navItems={navItems} />
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

