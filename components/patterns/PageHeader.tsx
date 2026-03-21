"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../molecules/Button";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  /** Page title (H1). */
  title: string;
  /** Subtitle or short description beneath the title. */
  description?: string;
  /** Array of crumbs like [{ label: "Home", href: "/" }, { label: "Users" }]. */
  breadcrumbs?: BreadcrumbItem[];
  /** Right side elements (usually Buttons or search). */
  actions?: React.ReactNode;
  className?: string;
};

/**
 * 2026 High-End Page Header: breadcrumbs + title/desc + global actions.
 * Enforces 8pt/4pt rhythm and premium typography.
 */
export function PageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`space-y-4 py-8 lg:py-10 ${className}`.trim()}>
      {/* Breadcrumbs */}
      {breadcrumbs != null && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-xs font-medium text-ds-text-muted">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="transition-colors hover:text-ds-primary-strong"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-ds-text-secondary">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      {/* Main content flex row */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary lg:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base text-ds-text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex shrink-0 items-center gap-3 pt-2 sm:pt-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
