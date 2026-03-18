import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { TabsNav, type TabLink } from "../_components/TabsNav";

import FormFieldDocPage from "../../components/form-field/page";
import SkillBadgeDocPage from "../../components/skill-badge/page";
import EmptyStateDocPage from "../../components/empty-state/page";

const tabs: TabLink[] = [
  { value: "form-field", label: "Form field" },
  { value: "skill-badge", label: "Skill badge" },
  { value: "empty-state", label: "Empty state" },
];

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Patterns · Career Design System",
  description: "Patterns: composed UI patterns (form field, empty state, skill badge, etc.).",
};

export default async function PatternsDocsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const tabRaw = sp.tab;
  const tab = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw;
  const active = tabs.some((t) => t.value === tab) ? (tab as string) : "form-field";

  const content =
    active === "skill-badge" ? (
      <SkillBadgeDocPage />
    ) : active === "empty-state" ? (
      <EmptyStateDocPage />
    ) : (
      <FormFieldDocPage />
    );

  return (
    <Grid gap="lg" className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8">
      <GridCol lgSpan={9} className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
            Category
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Patterns</h1>
          <TabsNav tabs={tabs} defaultValue="form-field" activeValue={active} />
        </div>
        {content}
      </GridCol>
      <GridCol lgSpan={3} />
    </Grid>
  );
}

