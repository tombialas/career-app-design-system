"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className = "", sideOffset = 8, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`
        z-[var(--z-ds-dropdown)] min-w-[12rem] overflow-hidden rounded-2xl border border-ds-border-subtle bg-ds-surface-card/90 backdrop-blur-xl p-2
        text-ds-text-primary shadow-ds-diffuse-md
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
        data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
        ${className}
      `.trim()}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    destructive?: boolean;
  }
>(({ className = "", inset, destructive, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={`
      relative flex cursor-default select-none items-center gap-3 rounded-lg px-3 py-2 text-base outline-none
      transition-colors duration-[var(--duration-ds-fast)]
      ${
        destructive
          ? "text-ds-feedback-danger focus:bg-ds-feedback-danger focus:text-ds-on-primary data-[highlighted]:bg-ds-feedback-danger data-[highlighted]:text-ds-on-primary"
          : "focus:bg-ds-surface-card-soft focus:text-ds-text-primary data-[highlighted]:bg-ds-surface-card-soft data-[highlighted]:text-ds-text-primary"
      }
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
      ${inset ? "pl-8" : ""}
      ${className}
    `.trim()}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className = "", ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={`-mx-2 my-1 h-[1px] bg-ds-border-subtle ${className}`.trim()}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
};
