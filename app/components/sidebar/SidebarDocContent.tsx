"use client";

import { Sidebar } from "../../../components/organisms/Sidebar";
import { Card } from "../../../components/organisms/Card";
import Link from "next/link";
import { Home, Briefcase, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/demo/dashboard", label: "My Applications", icon: Briefcase },
  { href: "/demo/profile", label: "My Profile", icon: User },
];

export default function SidebarDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Sidebar</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Navigační panel: <strong>inline</strong> (floating bento) a <strong>drawer</strong> (mobile overlay).
          Inline varianta je plovoucí card a může být dark (app screens) nebo transparent.
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
              activeHref="/demo/dashboard"
              linkComponent={({ href, children, className }) => (
                <Link href={href} className={className}>
                  {children}
                </Link>
              )}
            />
          </div>
        </Card>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Live demos</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/demo/dashboard" className="text-sm font-medium text-ds-primary-strong hover:underline">
            My Applications
          </Link>
          <Link href="/demo/profile" className="text-sm font-medium text-ds-primary-strong hover:underline">
            My Profile
          </Link>
        </div>
      </section>
    </div>
  );
}

