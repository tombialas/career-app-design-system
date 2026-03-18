"use client";

import type { TextareaHTMLAttributes } from "react";
import { forwardRef, useId } from "react";
import { Label } from "../atoms/Label";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const reactId = useId();
    const textareaId = id ?? reactId;
    const hasError = Boolean(error);

    return (
      <div className="w-full min-w-0">
        {label && textareaId && (
          <Label htmlFor={textareaId} className="mb-1.5">
            {label}
          </Label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full min-h-[120px] rounded-2xl border bg-ds-surface-card px-4 py-3 font-sans text-ds-text-primary
            shadow-ds-diffuse-sm placeholder:text-ds-text-muted
            transition-all duration-[var(--duration-ds-fast)] ease-[var(--ease-ds-out)]
            focus:outline-none focus:ring-2 focus:ring-ds-primary-strong focus:ring-offset-2 focus:shadow-ds-diffuse-md
            disabled:cursor-not-allowed disabled:opacity-60
            ${hasError ? "border-ds-feedback-danger ring-2 ring-ds-feedback-danger ring-offset-2" : "border-ds-border-subtle"}
            ${className}
          `.trim()}
          aria-invalid={hasError}
          aria-describedby={error && textareaId ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={textareaId ? `${textareaId}-error` : undefined}
            className="mt-1.5 text-sm text-ds-feedback-danger"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
