"use client";

import * as React from "react";
import { Card } from "../organisms/Card";

export type StatItem = {
  label: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
};

type StatListProps = {
  items: StatItem[];
  /** Grid columns: 1 (default), 2, 3, or 4. */
  columns?: 1 | 2 | 3 | 4;
  className?: string;
};

/**
 * StatList: A high-end grid of KPI cards. 
 * Features subtle shadows, premium typography and 4pt spacing.
 */
export function StatList({ items, columns = 3, className = "" }: StatListProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-4 sm:gap-6 ${gridCols} ${className}`.trim()}>
      {items.map((stat, idx) => (
        <Card key={idx} hoverable className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              {stat.label}
            </span>
            {stat.icon && (
              <span className="text-ds-text-muted opacity-60">
                {stat.icon}
              </span>
            )}
          </div>
          
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-ds-text-primary">
              {stat.value}
            </span>
            {stat.trend && (
              <span className={`text-xs font-bold ${stat.trend.isPositive ? 'text-ds-green-700' : 'text-ds-red-700'}`}>
                {stat.trend.isPositive ? '+' : ''}{stat.trend.value}
              </span>
            )}
          </div>

          {stat.description && (
            <p className="mt-1 text-xs text-ds-text-tertiary">
              {stat.description}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}
