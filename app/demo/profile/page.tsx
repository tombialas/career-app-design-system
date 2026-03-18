"use client";

import Link from "next/link";
import * as React from "react";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import ProfileTabsClient from "./ProfileTabsClient";
import { User } from "lucide-react";

const navItems = [{ href: "/demo/profile", label: "My Profile", icon: User }];

export default function DemoProfilePage() {
  return (
    <AppShell
      variant="canvas"
      sidebar={
        <div className="hidden lg:block sticky top-0 h-screen">
          <Sidebar
            variant="inline"
            themeVariant="dark"
            title="Logo"
            navItems={navItems}
            activeHref="/demo/profile"
            linkComponent={({ href, children, className }) => (
              <Link href={href} className={className}>
                {children}
              </Link>
            )}
          />
        </div>
      }
    >
      <div className="max-w-[1200px] w-full mx-auto space-y-8 px-4 lg:px-8 pt-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Demo</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-ds-text-primary">
                My Profile
              </h1>
              <p className="mt-1 text-sm text-ds-text-secondary">
                Category & Tabs pattern: sidebar = jedna sekce, obsah = Tabs s URL stavem.
              </p>
            </div>
            <Link href="/" className="text-sm font-medium text-ds-primary-strong hover:underline">
              ← Zpět na Overview
            </Link>
          </div>
        </header>

        <React.Suspense fallback={<div className="text-sm text-ds-text-secondary">Loading…</div>}>
          <ProfileTabsClient />
        </React.Suspense>
      </div>
    </AppShell>
  );
}

