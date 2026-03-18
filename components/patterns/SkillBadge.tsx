"use client";

import type { ReactNode } from "react";
import { X, Pencil } from "lucide-react";

type SkillBadgeProps = {
  children: ReactNode;
  /** Hard = light blue, soft = light purple. */
  variant?: "hard" | "soft";
  onRemove?: () => void;
  onEdit?: () => void;
  className?: string;
};

const skillBadgeStyles = {
  hard: "bg-ds-accent-blue-soft text-ds-text-primary",
  soft: "bg-ds-primary-soft text-ds-text-primary",
} as const;

/** Skill tag in The Vault: one pill with text + optional remove/edit icons. */
export function SkillBadge({
  children,
  variant = "soft",
  onRemove,
  onEdit,
  className = "",
}: SkillBadgeProps) {
  const s = skillBadgeStyles[variant];
  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full px-3 py-1.5
        text-xs font-bold uppercase tracking-wide
        transition-colors duration-[var(--duration-ds-fast)] ease-[var(--ease-ds-out)]
        ${s}
        ${className}
      `.trim()}
    >
      {children}
      {onEdit != null && (
        <button
          type="button"
          onClick={onEdit}
          aria-label="Upravit"
          className="rounded-full p-0.5 opacity-70 hover:opacity-100"
        >
          <Pencil className="h-3.5 w-3.5" />
        </button>
      )}
      {onRemove != null && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Odstranit"
          className="rounded-full p-0.5 opacity-70 hover:opacity-100"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </span>
  );
}
