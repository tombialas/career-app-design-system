"use client";

import type { ReactNode } from "react";
import { Label } from "../atoms/Label";

type FormFieldProps = {
  /** Id for linking to an input (htmlFor on Label). Pass the same id to Input/Select/Textarea. */
  id?: string;
  label: ReactNode;
  /** Required field — Label shows a red asterisk (passed to the Label atom). */
  isRequired?: boolean;
  /** Input, Select, Textarea, etc. */
  children: ReactNode;
  /** Error message shown under the field. */
  error?: ReactNode;
  /** Additional description under the label (e.g. hint). */
  description?: ReactNode;
  className?: string;
};

/** Wrapper: Label + field + optional error and description. Consistent spacing. */
export function FormField({
  id,
  label,
  isRequired,
  children,
  error,
  description,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`.trim()}>
      {id != null ? (
        <Label htmlFor={id} isRequired={isRequired}>{label}</Label>
      ) : (
        <span className="block text-[12px] font-bold uppercase tracking-wider text-ds-text-primary">{label}</span>
      )}
      {description != null && (
        <p className="text-xs text-ds-text-muted">{description}</p>
      )}
      {children}
      {error != null && (
        <p className="text-sm text-ds-feedback-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
