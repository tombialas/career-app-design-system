"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "ghostOnDark"
  | "destructive"
  | "mint"
  | "blue";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ds-primary-base text-ds-text-primary hover:bg-ds-primary-strong hover:text-ds-on-primary " +
    "disabled:bg-ds-primary-soft disabled:text-ds-text-primary border-0",
  secondary:
    "bg-ds-surface-dark-element text-ds-on-dark hover:bg-ds-surface-card-dark " +
    "disabled:opacity-60 border-0",
  ghost:
    "bg-transparent text-ds-text-primary hover:bg-ds-primary-soft hover:text-ds-primary-strong " +
    "disabled:opacity-60 border border-ds-border-subtle",
  ghostOnDark:
    "bg-transparent text-ds-on-dark hover:bg-white/10 " +
    "disabled:opacity-60 border border-white/10",
  destructive:
    "bg-ds-feedback-danger text-ds-on-primary hover:bg-ds-score-low " +
    "disabled:bg-ds-score-low-soft disabled:text-ds-text-primary border-0",
  mint:
    "bg-ds-accent-mint-base text-ds-text-primary hover:bg-ds-accent-mint-strong hover:text-ds-on-primary " +
    "disabled:bg-ds-accent-mint-soft disabled:text-ds-text-primary border-0",
  blue:
    "bg-ds-accent-blue-base text-ds-text-primary hover:bg-ds-accent-blue-strong hover:text-ds-on-primary " +
    "disabled:bg-ds-accent-blue-soft disabled:text-ds-text-primary border-0",
};

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "py-3 px-6 text-sm",
  md: "py-4 px-6 text-base",
  lg: "py-5 px-8 text-base",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={
        "inline-flex items-center justify-center gap-3 rounded-full font-semibold leading-none " +
        "transition-[background-color,color,border-color,transform,box-shadow] duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out-expo)] " +
        "hover:scale-[1.02] hover:shadow-ds-diffuse-sm active:scale-[0.98] " +
        "focus:outline-none focus:ring-2 focus:ring-ds-primary-strong focus:ring-offset-2 " +
        "disabled:pointer-events-none disabled:opacity-60 " +
        variantClasses[variant] +
        " " +
        sizeClasses[size] +
        (className ? " " + className : "")
      }
      {...props}
    >
      {children}
    </button>
  );
}
