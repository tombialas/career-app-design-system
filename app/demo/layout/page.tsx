"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import { Button } from "../../../components/molecules/Button";
import { Home, FolderOpen, User, Settings } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/tokens", label: "Tokens", icon: FolderOpen },
  { href: "/components/buttons", label: "Buttons", icon: User },
  { href: "/components/card", label: "Card", icon: Settings },
];

export default function DemoLayoutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppShell
      sidebar={
        <Sidebar
          title="Career DS"
          navItems={navItems}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onOpenMenu={() => setSidebarOpen(true)}
          openMenuLabel="Otevřít menu"
          closeMenuLabel="Zavřít menu"
          footer={
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ds-surface-card-soft text-sm font-semibold text-ds-purple-900">
                  U
                </div>
                <span className="truncate text-sm text-ds-text-secondary">user@example.com</span>
              </div>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Odhlásit
              </Button>
            </div>
          }
        />
      }
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ds-text-primary">App shell demo</h1>
          <Link
            href="/components/layout"
            className="text-sm font-medium text-ds-primary-strong hover:underline"
          >
            ← Zpět na dokumentaci Layout
          </Link>
        </div>
        <p className="text-ds-text-secondary">
          Toto je full-page demo layoutu bez DocNav. V aplikaci takto použiješ AppShell + Sidebar jako jediný shell.
        </p>
        <div className="rounded-xl border border-ds-border-subtle bg-ds-surface-card p-6">
          <h2 className="text-lg font-semibold text-ds-text-primary">Hlavní obsah</h2>
          <p className="mt-2 text-sm text-ds-text-secondary">
            Main area s paddingem. Sidebar vlevo (desktop) nebo v draweru (mobil – hamburger).
          </p>
        </div>
      </div>
    </AppShell>
  );
}
