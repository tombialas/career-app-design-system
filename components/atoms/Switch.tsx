"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className = "", ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
      className={`
      inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent
      bg-ds-border-subtle data-[state=checked]:bg-ds-primary-strong
      transition-colors duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out-expo)]
      hover:bg-ds-text-muted/20 data-[state=checked]:hover:bg-ds-primary-strong/90
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary-strong focus-visible:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-50
      ${className}
    `.trim()}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={`
        pointer-events-none block h-5 w-5 rounded-full bg-white shadow-ds-diffuse-sm
        translate-x-0.5 data-[state=checked]:translate-x-5
        transition-transform duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out-expo)]
      `.trim()}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };

