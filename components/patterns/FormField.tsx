"use client";

import type { ReactNode } from "react";
import { Label } from "../atoms/Label";

type FormFieldProps = {
  /** Id pro propojení s inputem (htmlFor na Label). Předat stejné id do Input/Select/Textarea. */
  id?: string;
  label: ReactNode;
  /** Povinné pole – Label zobrazí červenou hvězdičku (předává do atomu Label). */
  isRequired?: boolean;
  /** Input, Select, Textarea, atd. */
  children: ReactNode;
  /** Chybová hláška pod polem. */
  error?: ReactNode;
  /** Dodatečný popis pod labelem (např. hint). */
  description?: ReactNode;
  className?: string;
};

/** Wrapper: Label + pole + volitelný error a description. Konzistentní spacing. */
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
