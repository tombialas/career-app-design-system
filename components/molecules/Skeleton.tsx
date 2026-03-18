"use client";

import * as React from "react";

type SkeletonProps = React.ComponentPropsWithoutRef<"div">;

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={`
        animate-pulse rounded-lg bg-ds-border-subtle
        ${className}
      `.trim()}
      {...props}
    />
  )
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
