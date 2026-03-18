"use client";

import type { ReactNode } from "react";

type GridGap = "md" | "lg";

type GridProps = {
  /** 12-col system: base=4, md=8, lg=12. */
  children: ReactNode;
  /** md = gap-6, lg = gap-8 */
  gap?: GridGap;
  className?: string;
};

const gapClasses: Record<GridGap, string> = {
  md: "gap-6",
  lg: "gap-8",
};

export function Grid({ children, gap = "md", className = "" }: GridProps) {
  return (
    <div
      className={`
        grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
        ${gapClasses[gap]}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}

type GridColProps = {
  children?: ReactNode;
  /** Span (1–12). If not provided, takes full row at each breakpoint. */
  span?: number;
  smSpan?: number;
  mdSpan?: number;
  lgSpan?: number;
  className?: string;
};

function clampSpan(value: number, min = 1, max = 12) {
  return Math.max(min, Math.min(max, value));
}

const colSpanClasses = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
} as const;

const mdColSpanClasses = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
} as const;

const lgColSpanClasses = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
} as const;

export function GridCol({
  children,
  span,
  smSpan,
  mdSpan,
  lgSpan,
  className = "",
}: GridColProps) {
  const base = clampSpan(smSpan ?? span ?? 4);
  const md = clampSpan(mdSpan ?? span ?? 8);
  const lg = clampSpan(lgSpan ?? span ?? 12);

  return (
    <div
      className={`
        ${colSpanClasses[base as keyof typeof colSpanClasses]}
        ${mdColSpanClasses[md as keyof typeof mdColSpanClasses]}
        ${lgColSpanClasses[lg as keyof typeof lgColSpanClasses]}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}

