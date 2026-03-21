"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const TabsRoot = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className = "", ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={`w-full min-w-0 ${className}`.trim()}
    {...props}
  />
));
TabsRoot.displayName = "TabsRoot";

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className = "", children, ...props }, ref) => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const rafIdRef = React.useRef<number | null>(null);
  const [indicator, setIndicator] = React.useState({ left: 0, top: 0, width: 0, height: 0 });

  const updateIndicator = React.useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.querySelector<HTMLButtonElement>("button[data-state='active']");
    if (!active) return;
    // getBoundingClientRect works consistently in Safari; offsetLeft/offsetParent can be wrong in flex containers there.
    const listRect = list.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const left = activeRect.left - listRect.left + list.scrollLeft;
    const top = activeRect.top - listRect.top + list.scrollTop;
    const width = activeRect.width;
    const height = activeRect.height;
    setIndicator((prev) =>
      prev.left === left && prev.top === top && prev.width === width && prev.height === height
        ? prev
        : { left, top, width, height },
    );
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
        const top = activeRect.top - listRect.top + list.scrollTop;
        const width = activeRect.width;
        const height = activeRect.height;
        setIndicator((prev) => (prev.width === 0 ? { left, top, width, height } : prev));
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
        relative box-border inline-flex max-w-full min-h-0 min-w-0 flex-wrap items-center justify-start
        gap-[var(--spacing-ds-tab-track-pad)] rounded-[var(--radius-ds-nested-outer)] border border-ds-border-subtle bg-ds-surface-base
        p-[var(--spacing-ds-tab-track-pad)] text-ds-text-muted
        ${className}
      `.trim()}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-[1] will-change-[transform,width,height] rounded-[var(--radius-ds-nested-inner)] bg-white shadow-ds-diffuse-sm transition-[transform,width,height] duration-[var(--duration-ds-normal)] ease-[var(--ease-ds-out)]"
        style={{
          transform: `translate3d(${indicator.left}px, ${indicator.top}px, 0)`,
          width: indicator.width,
          height: indicator.height,
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
      relative z-10 inline-flex min-h-9 min-w-0 max-w-full shrink-0 items-center justify-center break-words whitespace-normal rounded-[var(--radius-ds-nested-inner)] px-3 py-1.5 text-center text-sm font-medium leading-snug [overflow-wrap:anywhere] sm:whitespace-nowrap
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
