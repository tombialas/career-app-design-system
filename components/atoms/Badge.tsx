"use client";

import * as React from "react";

type BadgeVariant = "default" | "primary" | "destructive";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-ds-surface-card-soft text-ds-text-secondary border border-ds-border-subtle",
  primary: "bg-ds-primary-strong text-ds-on-primary border border-white/10",
  destructive: "bg-ds-feedback-danger text-ds-on-primary border border-white/10",
};

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center rounded-full px-2 py-0.5
        text-[10px] font-bold uppercase tracking-wider
        ${variantClasses[variant]}
        ${className}
      `.trim()}
      {...props}
    />
  );
}

