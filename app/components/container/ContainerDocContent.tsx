"use client";

import { Container } from "../../../components/organisms/Container";
import { Card } from "../../../components/organisms/Card";

export default function ContainerDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Container</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A wrapper for max-width layouts. Use it for content in canvas mode; for 12-column layouts, prefer <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">Grid</code>.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Sizes</h2>
        <div className="space-y-4">
          <Card>
            <Container size="sm">
              <div className="rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-6 text-sm text-ds-text-secondary backdrop-blur-sm">
                sm — 640px
              </div>
            </Container>
          </Card>
          <Card>
            <Container size="xl">
              <div className="rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-6 text-sm text-ds-text-secondary backdrop-blur-sm">
                xl — 1280px
              </div>
            </Container>
          </Card>
        </div>
      </section>
    </div>
  );
}

