"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={`
      inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full
      ring-1 ring-ds-border-subtle ring-offset-1 ring-offset-ds-surface-page
      ${className}
    `.trim()}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={`
      h-full w-full object-cover
      ${className}
    `.trim()}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className = "", ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={`
      flex h-full w-full items-center justify-center
      bg-ds-surface-card-soft text-ds-text-primary text-sm font-semibold tracking-wide
      ${className}
    `.trim()}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

