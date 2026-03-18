"use client";

import type { ReactNode } from "react";

type CardVariant =
  | "default"
  | "soft"
  | "dark"
  | "glass"
  | "highlightPink"
  | "highlightGreen"
  | "highlightBlue";

type CardProps = {
  variant?: CardVariant;
  /** Slight lift + stronger shadow on hover (for clickable cards). */
  hoverable?: boolean;
  /** Tighter padding for feature blocks (icon + title + meta). */
  compact?: boolean;
  /** Standard padding: md = p-6, lg = p-10 (large hero cards). Ignored for sections/compact. */
  padding?: "md" | "lg";
  /** Use Card.Header / Content / Footer — then Card has no own padding (24px padding is provided in sections). */
  sections?: boolean;
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

const variantClasses: Record<CardVariant, string> = {
  default:
    "bg-ds-surface-card/70 text-ds-text-primary backdrop-blur-xl border border-ds-border-subtle shadow-ds-diffuse-sm",
  soft:
    "bg-ds-surface-card-soft text-ds-text-primary backdrop-blur-xl border border-ds-border-subtle shadow-ds-diffuse-sm",
  dark:
    "bg-ds-surface-card-dark text-ds-on-dark backdrop-blur-xl border border-white/10 shadow-ds-diffuse-sm",
  glass:
    "bg-white/5 text-ds-on-dark backdrop-blur-md border border-white/10 shadow-none",
  highlightPink:
    "bg-ds-accent-pink-soft text-ds-text-primary border border-white/40 shadow-ds-diffuse-sm",
  highlightGreen:
    "bg-ds-accent-green-soft text-ds-text-primary border border-white/40 shadow-ds-diffuse-sm",
  highlightBlue:
    "bg-ds-accent-blue-soft text-ds-text-primary border border-white/40 shadow-ds-diffuse-sm",
};

export function Card({
  variant = "default",
  hoverable = false,
  compact = false,
  padding = "md",
  sections = false,
  children,
  className = "",
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={`
        rounded-3xl transition-all duration-[var(--duration-ds-fast)] ease-[var(--ease-ds-out)]
        ${sections ? "p-0" : compact ? "p-4" : padding === "lg" ? "p-10" : "p-6"}
        ${variantClasses[variant]}
        ${hoverable ? "hover:shadow-ds-diffuse-md hover:-translate-y-0.5 cursor-pointer hover:border-ds-border-subtle/80" : ""}
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
}

/** Card sections when sections={true}. Padding 24px (p-6), transitions are tightened (pb-3 / pt-3). */
function CardHeader({ className = "", ...props }: { className?: string; children?: ReactNode }) {
  return <div className={`p-6 pb-3 ${className}`.trim()} {...props} />;
}

function CardContent({ className = "", ...props }: { className?: string; children?: ReactNode }) {
  return <div className={`px-6 py-3 ${className}`.trim()} {...props} />;
}

function CardFooter({ className = "", ...props }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={`border-t border-ds-border-subtle p-6 pt-3 ${className}`.trim()}
      {...props}
    />
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
