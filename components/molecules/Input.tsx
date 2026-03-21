"use client";

import type { InputHTMLAttributes } from "react";
import { forwardRef, useId } from "react";
import { Label } from "../atoms/Label";

export type InputSize = "sm" | "md" | "lg";

/** Omit HTML 'size' (number) so our size (sm|md|lg) doesn't conflict. */
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  error?: string;
  size?: InputSize;
};

const sizeClasses: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-11 px-4 text-base",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, size = "md", className = "", id, ...props }, ref) => {
    const reactId = useId();
    const inputId = id ?? reactId;
    const hasError = Boolean(error);

    return (
      <div className="w-full min-w-0">
        {label && inputId && (
          <Label htmlFor={inputId} className="mb-2">
            {label}
          </Label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full rounded-full border bg-ds-surface-card font-sans text-ds-text-primary
            shadow-ds-diffuse-sm placeholder:text-ds-text-muted
            transition-all duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out-expo)]
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:shadow-ds-diffuse-md hover:border-ds-border-subtle/80 hover:shadow-sm
            disabled:cursor-not-allowed disabled:opacity-60
            ${hasError ? "border-ds-feedback-danger ring-2 ring-ds-feedback-danger ring-offset-2" : "border-ds-border-subtle"}
            ${sizeClasses[size]}
            ${className}
          `.trim()}
          aria-invalid={hasError}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={inputId ? `${inputId}-error` : undefined}
            className="mt-2 text-xs font-semibold tracking-wide text-ds-feedback-danger"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
