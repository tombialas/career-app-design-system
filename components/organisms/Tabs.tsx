"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className = "", children, ...props }, ref) => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const rafIdRef = React.useRef<number | null>(null);
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0 });

  const updateIndicator = React.useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.querySelector<HTMLButtonElement>("button[data-state='active']");
    if (!active) return;
    // getBoundingClientRect works consistently in Safari; offsetLeft/offsetParent can be wrong in flex containers there.
    const listRect = list.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const left = activeRect.left - listRect.left + list.scrollLeft;
    const width = activeRect.width;
    setIndicator((prev) => (prev.left === left && prev.width === width ? prev : { left, width }));
  }, []);

  // Initial mount: set indicator sync so the pill is visible (otherwise it stays width: 0).
  // Tab change: double rAF so the pill stays at old position for one paint, then animates to new.
  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (list) {
      const active = list.querySelector<HTMLButtonElement>("button[data-state='active']");
      if (active) {
        const listRect = list.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();
        const left = activeRect.left - listRect.left + list.scrollLeft;
        const width = activeRect.width;
        setIndicator((prev) => (prev.width === 0 ? { left, width } : prev));
      }
    }
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(updateIndicator);
      rafIdRef.current = raf2;
    });
    rafIdRef.current = raf1;
    return () => {
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
    };
  });

  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const ro = new ResizeObserver(updateIndicator);
    ro.observe(list);
    return () => ro.disconnect();
  }, [updateIndicator]);

  const mergedRef = (node: HTMLDivElement | null) => {
    (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  return (
    <TabsPrimitive.List
      ref={mergedRef}
      className={`
        relative inline-flex h-10 w-fit items-center justify-center rounded-full border border-ds-border-subtle bg-ds-surface-base p-1
        text-ds-text-muted
        ${className}
      `.trim()}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-1 left-0 z-[1] will-change-[transform,width] rounded-full bg-ds-surface-card shadow-ds-diffuse-sm transition-[transform,width] duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out)]"
        style={{
          transform: `translateX(${indicator.left}px)`,
          width: indicator.width,
          top: 4,
          bottom: 4,
        }}
      />
      {children}
    </TabsPrimitive.List>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={`
      relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium
      text-ds-text-muted transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary-strong focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50
      data-[state=active]:font-semibold data-[state=active]:text-ds-text-primary
      ${className}
    `.trim()}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={`
      mt-3 focus-visible:outline-none
      data-[state=inactive]:hidden
      ${className}
    `.trim()}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsRoot, TabsList, TabsTrigger, TabsContent };
