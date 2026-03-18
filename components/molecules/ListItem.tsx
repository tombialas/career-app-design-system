"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";

type ListItemProps = {
  /** Main label (e.g. "Settings", "Language"). */
  label: React.ReactNode;
  /** Optional right side (e.g. value, badge). */
  value?: React.ReactNode;
  /** Show chevron (default true). */
  showChevron?: boolean;
  /** Click handler; when set, row is interactive (button). */
  onClick?: () => void;
  className?: string;
};

/**
 * One row in a list (e.g. Settings, Language, FAQ). Reference: card-like row with label, optional value, chevron.
 */
export function ListItem({
  label,
  value,
  showChevron = true,
  onClick,
  className = "",
}: ListItemProps) {
  const isInteractive = onClick != null;
  const content = (
    <>
      <span className="min-w-0 flex-1 font-normal text-base text-ds-text-primary">{label}</span>
      {value != null && <span className="text-sm text-ds-text-muted">{value}</span>}
      {showChevron && <ChevronRight className="h-4 w-4 shrink-0 text-ds-text-tertiary" />}
    </>
  );

  const baseClass = `
    flex w-full items-center gap-3 rounded-xl border border-ds-border-subtle bg-ds-surface-card px-4 py-3 text-left
    transition-colors
    ${isInteractive ? "cursor-pointer hover:bg-ds-surface-card-soft" : ""}
    ${className}
  `.trim();

  if (isInteractive) {
    return (
      <button type="button" onClick={onClick} className={baseClass}>
        {content}
      </button>
    );
  }
  return <div className={baseClass}>{content}</div>;
}
