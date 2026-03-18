"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className = "", ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={`border-b border-ds-border-subtle ${className}`.trim()}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`
        group flex w-full items-center justify-between gap-4 py-4 text-left
        text-ds-text-primary font-semibold
        transition-colors duration-[var(--duration-ds-fast)] ease-[var(--ease-ds-out)]
        hover:text-ds-primary-strong
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary-strong focus-visible:ring-offset-2
        ${className}
      `.trim()}
      {...props}
    >
      <span className="min-w-0 flex-1">{children}</span>
      <ChevronDown
        aria-hidden
        className={`
          h-4 w-4 shrink-0 text-ds-text-muted
          transition-transform duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out)]
          group-data-[state=open]:rotate-180
        `.trim()}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={`
      overflow-hidden text-sm text-ds-text-secondary
      data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down
      ${className}
    `.trim()}
    {...props}
  >
    <div className="pb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

