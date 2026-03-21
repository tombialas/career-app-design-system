"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

type SpinnerSize = "sm" | "md" | "lg";

type SpinnerProps = {
  size?: SpinnerSize;
  className?: string;
};

const sizeClasses: Record<SpinnerSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function Spinner({ size = "md", className = "" }: SpinnerProps) {
  const colorClass = className.includes("text-") ? "" : "text-ds-text-secondary/50";
  return (
    <Loader2
      aria-label="Loading"
      role="status"
      className={`animate-spin ${sizeClasses[size]} ${colorClass} ${className}`.trim()}
    />
  );
}

