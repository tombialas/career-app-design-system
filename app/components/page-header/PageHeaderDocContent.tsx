"use client";

import { PageHeader } from "../../../components/patterns/PageHeader";
import { Button } from "../../../components/molecules/Button";
import { Plus, Download } from "lucide-react";

export default function PageHeaderDocContent() {
  const crumbs = [
    { label: "Dashboard", href: "#" },
    { label: "Users", href: "#" },
    { label: "Edit User" },
  ];

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Pattern
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Page header
        </h1>
        <p className="max-w-2xl text-base text-ds-text-secondary leading-relaxed">
          The standard way to start a feature page. Handles hierarchy, navigation (breadcrumbs), and primary/secondary actions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-ds-text-primary">Full example</h2>
        <div className="rounded-3xl border border-ds-border-subtle bg-ds-ui-bg p-8">
          <PageHeader
            title="User Profile"
            description="Manage user information, permissions and activity history."
            breadcrumbs={crumbs}
            actions={
              <>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add New
                </Button>
              </>
            }
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-ds-text-primary">Minimal (Title only)</h2>
        <div className="rounded-3xl border border-ds-border-subtle bg-ds-ui-bg p-8">
          <PageHeader title="Settings" />
        </div>
      </section>
    </div>
  );
}
