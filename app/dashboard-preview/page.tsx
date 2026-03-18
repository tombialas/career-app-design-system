"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "../../components/organisms/AppShell";
import { Sidebar } from "../../components/organisms/Sidebar";
import { Home, Briefcase, User, Settings } from "lucide-react";
import { MatchScoreCard, SkillsCard, CtaCard } from "./DashboardBento";

const dashboardNavItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard-preview", label: "My Applications", icon: Briefcase },
  { href: "/components/buttons", label: "My Profile", icon: User },
  { href: "/components/inputs", label: "Settings", icon: Settings },
];

export default function DashboardPreviewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppShell
      sidebar={
        <Sidebar
          variant="drawer"
          themeVariant="dark"
          title="Career App"
          navItems={dashboardNavItems.map(({ href, label, icon }) => ({ href, label, icon }))}
          activeHref="/dashboard-preview"
          linkComponent={({ href, children, className, onClick }) => (
            <Link href={href} className={className} onClick={onClick}>
              {children}
            </Link>
          )}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onOpenMenu={() => setSidebarOpen(true)}
          openMenuLabel="Open menu"
          closeMenuLabel="Close menu"
          footer={
            <div className="space-y-1 text-ds-on-dark-muted">
              <p className="text-sm font-medium text-ds-on-dark">Name Surname</p>
              <p className="text-xs">email@domain.com</p>
              <p className="text-xs">16 credits left</p>
            </div>
          }
        />
      }
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-ds-text-primary">
              Dashboard preview
            </h1>
            <p className="mt-1 text-sm text-ds-text-secondary">
              Bento grid: Match Score Card, Skills Card, CTA. Sidebar themeVariant=&quot;dark&quot;.
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-ds-primary-strong hover:underline"
          >
            ← Back to Overview
          </Link>
        </div>

        {/* Bento grid with 24px rounding, diffuse shadows, and Figtree */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div className="md:col-span-2">
            <MatchScoreCard />
          </div>
          <div>
            <CtaCard />
          </div>
          <div className="lg:col-span-2">
            <SkillsCard />
          </div>
          <div className="rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-6 shadow-ds-diffuse-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ds-text-muted">
              Goal vs. experience
            </h3>
            <p className="mt-2 text-sm text-ds-text-secondary">
              Example of another card (Goal vs. experience — metrics). Card + ProgressBar.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
