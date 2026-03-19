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
          Profile sections, steps in tailoring. Radix Tabs —{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsRoot</code>,{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsList</code>,{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsTrigger</code>,{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TabsContent</code>. Keyboard navigation, focus ring.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Default
        </h2>
        <TabsRoot defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-sm text-ds-text-secondary">
              Overview tab content. This is where you place a profile summary, recommendations, and more.
            </p>
          </TabsContent>
          <TabsContent value="experience">
            <p className="text-sm text-ds-text-secondary">
              Experience tab content. A chronology of roles and projects.
            </p>
          </TabsContent>
          <TabsContent value="skills">
            <p className="text-sm text-ds-text-secondary">
              Skills tab content. Competencies, languages, and tools.
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
              <strong>TabsList:</strong> <code className="rounded bg-ds-surface-card-soft/70 px-1 text-xs">rounded-[var(--radius-ds-nested-outer)]</code>{" "}
              (= inner <code className="rounded bg-ds-surface-card-soft/70 px-1 text-xs">--radius-ds-nested-inner</code> + track pad{" "}
              <code className="rounded bg-ds-surface-card-soft/70 px-1 text-xs">--spacing-ds-tab-track-pad</code>),{" "}
              <code className="rounded bg-ds-surface-card-soft/70 px-1 text-xs">p-[var(--spacing-ds-tab-track-pad)]</code>,{" "}
              <code className="rounded bg-ds-surface-card-soft/70 px-1 text-xs">w-fit max-w-full flex flex-wrap justify-start</code>, bg track token
            </li>
            <li>
              <strong>TabsTrigger:</strong> <code className="rounded bg-ds-surface-card-soft/70 px-1 text-xs">rounded-[var(--radius-ds-nested-inner)]</code>, sliding pill matches trigger box; data-[state=active] styling via indicator; focus-visible ring
            </li>
            <li>
              <strong>TabsContent:</strong> mt-3, hidden when inactive
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
