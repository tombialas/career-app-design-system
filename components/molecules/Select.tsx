"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

const SelectRoot = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className = "", children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={`
      flex h-10 w-full items-center justify-between gap-2 rounded-full border border-ds-border-subtle
      bg-ds-surface-card px-4 text-sm text-ds-text-primary shadow-ds-diffuse-sm
      placeholder:text-ds-text-muted transition-all duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out-expo)]
      focus:outline-none focus:ring-2 focus:ring-ds-primary-strong focus:ring-offset-2 hover:shadow-sm
      disabled:cursor-not-allowed disabled:opacity-60
      data-[placeholder]:text-ds-text-muted
      [&>span]:line-clamp-1
      ${className}
    `.trim()}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 shrink-0 text-ds-text-muted" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className = "", position = "popper", sideOffset = 8, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      sideOffset={sideOffset}
      className={`
        relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[8rem] overflow-hidden
        rounded-2xl border border-ds-border-subtle bg-ds-surface-card shadow-ds-diffuse-md
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
        data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
        ${className}
      `.trim()}
      {...props}
    />
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className = "", ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={`
      relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-8 pr-4 text-sm outline-none
      focus:bg-ds-surface-card-soft focus:text-ds-text-primary
      data-[highlighted]:bg-ds-surface-card-soft data-[highlighted]:text-ds-text-primary
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      [&_span]:absolute [&_span]:left-3 [&_span]:flex [&_span]:items-center
      ${className}
    `.trim()}
    {...props}
  />
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectItemText = SelectPrimitive.ItemText;
const SelectItemIndicator = SelectPrimitive.ItemIndicator;

export const Select = {
  Root: SelectRoot,
  Group: SelectGroup,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Value: SelectValue,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
};
