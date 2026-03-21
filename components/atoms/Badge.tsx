"use client";

import * as React from "react";

type BadgeVariant = "default" | "primary" | "destructive";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-ds-surface-card-soft/50 text-ds-text-secondary border border-ds-border-subtle/50 shadow-sm",
  primary: "bg-ds-primary-strong/10 text-ds-primary-strong border border-ds-primary-strong/20",
  destructive: "bg-ds-feedback-danger/10 text-ds-feedback-danger border border-ds-feedback-danger/20",
};

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center rounded-full px-3 py-1
        text-xs font-semibold uppercase tracking-[0.08em]
        backdrop-blur-sm
        ${variantClasses[variant]}
        ${className}
      `.trim()}
      {...props}
    />
  );
}

