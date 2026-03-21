"use client";

import type { LabelHTMLAttributes } from "react";
import { forwardRef } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  /** Shows a red asterisk after the text (required field). */
  isRequired?: boolean;
};

/** Typografie podle labelTiny: 12px, bold, uppercase, tracking-wider. */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", isRequired, children, ...props }, ref) => (
    <label
      ref={ref}
      className={`block text-xs font-bold uppercase tracking-[0.12em] text-ds-text-secondary select-none ${className}`.trim()}
      {...props}
    >
      {children}
      {isRequired && (
        <span aria-hidden="true" className="text-ds-feedback-danger"> *</span>
      )}
    </label>
  )
);

Label.displayName = "Label";
