"use client";

import type { ReactNode } from "react";

type EmptyStateProps = {
  /** Ikona nebo ilustrace (Lucide ikona doporučeno). */
  icon?: ReactNode;
  /** Hlavní nadpis. */
  title: string;
  /** Popis pod nadpisem. */
  description?: string;
  /** Volitelná CTA (Button nebo odkaz). */
  action?: ReactNode;
  className?: string;
};

/** Prázdný stav: ikona + nadpis + popis + volitelná akce. */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-3xl border border-dashed border-ds-border-subtle bg-ds-surface-base/50 p-8 text-center ${className}`.trim()}
    >
      {icon != null && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ds-surface-card-soft text-ds-text-muted">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-ds-text-primary">{title}</h3>
      {description != null && description.length > 0 && (
        <p className="mt-2 mb-6 max-w-sm text-sm text-ds-text-secondary">{description}</p>
      )}
      {action != null && <div className={description != null && description.length > 0 ? "" : "mt-6"}>{action}</div>}
    </div>
  );
}
