"use client";

import * as React from "react";

type AppShellProps = {
  /** Sidebar component (e.g. <Sidebar ... />). Omit for no sidebar. */
  sidebar?: React.ReactNode;
  /** Layout variant: boxed = floating content box, canvas = render content directly on page background. */
  variant?: "boxed" | "canvas";
  /** Main content. Rendered inside a floating box (Apple-style). */
  children: React.ReactNode;
  className?: string;
};

/**
 * Layout wrapper: optional sidebar + main area. Background ds-surface-page; main content in a floating box (rounded, shadow, border).
 */
export function AppShell({
  sidebar,
  variant = "boxed",
  children,
  className = "",
}: AppShellProps) {
  return (
    <div
      className={`flex h-screen min-h-0 overflow-hidden bg-ds-surface-base font-[family-name:var(--font-figtree),system-ui,sans-serif] ${className}`.trim()}
    >
      {sidebar}
      {variant === "boxed" ? (
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto pb-8 pt-14 lg:pt-8">
          {/* Floating box: odstup m-4/m-6, rounded-3xl, shadow-ds-diffuse-lg. Scrolluje main, ne box. */}
          <div className="m-4 rounded-3xl border border-ds-border-subtle bg-ds-ui-bg shadow-ds-diffuse-lg lg:m-6">
            <div className="p-4 sm:p-6 lg:p-8">
              {children}
            </div>
          </div>
        </main>
      ) : (
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto px-4 pb-10 pt-14 lg:px-8 lg:pb-12 lg:pt-10">
          {children}
        </main>
      )}
    </div>
  );
}
