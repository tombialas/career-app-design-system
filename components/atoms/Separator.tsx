"use client";

import type { HTMLAttributes } from "react";

export type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
  /** When true, role="none" for decorative dividers (default). When false, role="separator" for accessibility. */
  decorative?: boolean;
};

export function Separator({
  orientation = "horizontal",
  decorative = true,
  className = "",
  ...props
}: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={`
        shrink-0 bg-ds-border-subtle opacity-50
        ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"}
        ${className}
      `.trim()}
      {...props}
    />
  );
}
