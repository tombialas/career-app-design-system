"use client";

import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/organisms/Tabs";

export default function TabsDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Tabs
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Sekce profilu, kroky v tailoru. Radix Tabs —{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsRoot</code>,{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsList</code>,{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsTrigger</code>,{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsContent</code>. Klávesová navigace, focus ring.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Default
        </h2>
        <TabsRoot defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Přehled</TabsTrigger>
            <TabsTrigger value="experience">Zkušenosti</TabsTrigger>
            <TabsTrigger value="skills">Dovednosti</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-sm text-ds-text-secondary">
              Obsah záložky Přehled. Sem přijde shrnutí profilu, doporučení, atd.
            </p>
          </TabsContent>
          <TabsContent value="experience">
            <p className="text-sm text-ds-text-secondary">
              Obsah záložky Zkušenosti. Chronologie rolí a projektů.
            </p>
          </TabsContent>
          <TabsContent value="skills">
            <p className="text-sm text-ds-text-secondary">
              Obsah záložky Dovednosti. Kompetence, jazyky, nástroje.
            </p>
          </TabsContent>
        </TabsRoot>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Specification
        </h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong>TabsList:</strong> rounded-lg, bg-ds-surface-card-soft/60,
              p-1, inline-flex
            </li>
            <li>
              <strong>TabsTrigger:</strong> data-[state=active] bg-ds-surface-card,
              shadow-ds-diffuse-sm, focus-visible ring
            </li>
            <li>
              <strong>TabsContent:</strong> mt-3, skrytý když inactive
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
