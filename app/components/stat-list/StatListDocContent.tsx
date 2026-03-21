"use client";

import { StatList, type StatItem } from "../../../components/patterns/StatList";
import { Users, Target, Zap } from "lucide-react";

export default function StatListDocContent() {
  const stats: StatItem[] = [
    {
      label: "Total Users",
      value: "2,543",
      trend: { value: "12%", isPositive: true },
      icon: <Users className="h-4 w-4" />,
      description: "Active users this month"
    },
    {
      label: "Avg. Match",
      value: "84%",
      trend: { value: "5%", isPositive: true },
      icon: <Target className="h-4 w-4" />,
      description: "AI matching accuracy"
    },
    {
      label: "Interactions",
      value: "12.8k",
      trend: { value: "2%", isPositive: false },
      icon: <Zap className="h-4 w-4" />,
      description: "Daily system pings"
    }
  ];

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Pattern
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Stat list
        </h1>
        <p className="max-w-2xl text-base text-ds-text-secondary leading-relaxed">
          A grid of metric cards (KPIs) used to provide a quick overview of key data points. 
          Built on top of the <code className="text-ds-primary-strong">Card</code> component.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-ds-text-primary">Example (3 Columns)</h2>
        <div className="rounded-3xl border border-ds-border-subtle bg-ds-ui-bg p-8">
          <StatList items={stats} columns={3} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-ds-text-primary">4 Columns</h2>
        <div className="rounded-3xl border border-ds-border-subtle bg-ds-ui-bg p-8">
          <StatList items={[...stats, { label: "Revenue", value: "$12k", trend: { value: "18%", isPositive: true } }]} columns={4} />
        </div>
      </section>
    </div>
  );
}
