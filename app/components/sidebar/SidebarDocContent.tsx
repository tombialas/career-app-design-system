"use client";

import { Sidebar } from "../../../components/organisms/Sidebar";
import { Card } from "../../../components/organisms/Card";
import Link from "next/link";
import { Home } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
];

export default function SidebarDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Sidebar</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Navigation panel: <strong>inline</strong> (floating bento) and <strong>drawer</strong> (mobile overlay).
          The inline variant is a floating card and can be dark (app screens) or transparent.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Inline (dark)</h2>
        <Card className="p-6">
          <div className="max-w-[340px]">
            <Sidebar
              variant="inline"
              themeVariant="dark"
              title="Logo"
              navItems={navItems}
              activeHref="/"
              linkComponent={({ href, children, className }) => (
                <Link href={href} className={className}>
                  {children}
                </Link>
              )}
            />
          </div>
        </Card>
      </section>

      {/* Live demo routes are intentionally hidden on the documentation site. */}
    </div>
  );
}

