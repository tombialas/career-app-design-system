"use client";

import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { Card } from "../../../components/organisms/Card";
import { Badge } from "../../../components/atoms/Badge";

function Box({ label }: { label: string }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 text-sm font-semibold text-ds-text-primary backdrop-blur-sm">
      {label}
    </div>
  );
}

export default function GridLayoutDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Grid layout</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Single source of truth for the 12-column system (base 4, md 8, lg 12) + tokenized gaps.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Example: 3×4 columns</h2>
        <Card className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-ds-text-secondary">
            <Badge>grid-cols-4/8/12</Badge>
            <Badge variant="primary">gap=lg</Badge>
          </div>
          <Grid gap="lg">
            <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
              <Box label="col 4" />
            </GridCol>
            <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
              <Box label="col 4" />
            </GridCol>
            <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
              <Box label="col 4" />
            </GridCol>
          </Grid>
        </Card>
      </section>
    </div>
  );
}

