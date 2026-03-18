import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { TabsNav, type TabLink } from "../_components/TabsNav";

import ButtonsDocPage from "../../components/buttons/page";
import InputDocPage from "../../components/input/page";
import TextareaDocPage from "../../components/textarea/page";
import CheckboxDocPage from "../../components/checkbox/page";
import SelectDocPage from "../../components/select/page";
import ChipsDocPage from "../../components/chips/page";
import ProgressBarDocPage from "../../components/progress-bar/page";
import ScoreDocPage from "../../components/score/page";
import TooltipDocPage from "../../components/tooltip/page";
import SkeletonDocPage from "../../components/skeleton/page";
import ListItemDocPage from "../../components/list-item/page";

const tabs: TabLink[] = [
  { value: "button", label: "Button" },
  { value: "input", label: "Input" },
  { value: "textarea", label: "Textarea" },
  { value: "checkbox", label: "Checkbox" },
  { value: "select", label: "Select" },
  { value: "chip", label: "Chip" },
  { value: "progress", label: "Progress" },
  { value: "score", label: "Score" },
  { value: "tooltip", label: "Tooltip" },
  { value: "skeleton", label: "Skeleton" },
  { value: "list-item", label: "List item" },
];

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Molecules · Career Design System",
  description: "Molecules: composable UI elements (forms, chips, tooltips, score, etc.).",
};

export default async function MoleculesDocsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const tabRaw = sp.tab;
  const tab = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw;
  const active = tabs.some((t) => t.value === tab) ? (tab as string) : "button";

  const content =
    active === "input" ? (
      <InputDocPage />
    ) : active === "textarea" ? (
      <TextareaDocPage />
    ) : active === "checkbox" ? (
      <CheckboxDocPage />
    ) : active === "select" ? (
      <SelectDocPage />
    ) : active === "chip" ? (
      <ChipsDocPage />
    ) : active === "progress" ? (
      <ProgressBarDocPage />
    ) : active === "score" ? (
      <ScoreDocPage />
    ) : active === "tooltip" ? (
      <TooltipDocPage />
    ) : active === "skeleton" ? (
      <SkeletonDocPage />
    ) : active === "list-item" ? (
      <ListItemDocPage />
    ) : (
      <ButtonsDocPage />
    );

  return (
    <Grid gap="lg" className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8">
      <GridCol lgSpan={9} className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
            Category
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Molecules</h1>
          <TabsNav tabs={tabs} defaultValue="button" activeValue={active} />
        </div>
        {content}
      </GridCol>
      <GridCol lgSpan={3} />
    </Grid>
  );
}

