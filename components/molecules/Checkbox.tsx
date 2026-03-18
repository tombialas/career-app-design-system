"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className = "", ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={`
      size-5 shrink-0 rounded-md border-2 border-ds-border-subtle
      bg-ds-surface-card text-ds-on-dark
      focus:outline-none focus:ring-2 focus:ring-ds-primary-strong focus:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-60
      data-[state=checked]:border-ds-primary-strong data-[state=checked]:bg-ds-primary-strong
      ${className}
    `.trim()}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      <Check className="h-3 w-3 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
