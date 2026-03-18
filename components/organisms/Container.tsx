"use client";

import * as React from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

type ContainerProps = {
  /** Max width: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px. Default: xl. */
  size?: ContainerSize;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1280px]",
  "2xl": "max-w-[1536px]",
};

export function Container({
  size = "xl",
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
