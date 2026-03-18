import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { TabsNav, type TabLink } from "../_components/TabsNav";

import AvatarDocPage from "../../components/avatar/page";
import BadgeDocPage from "../../components/badge/page";
import LabelDocPage from "../../components/label/page";
import SeparatorDocPage from "../../components/separator/page";
import SpinnerDocPage from "../../components/spinner/page";
import SwitchDocPage from "../../components/switch/page";

const tabs: TabLink[] = [
  { value: "avatar", label: "Avatar" },
  { value: "badge", label: "Badge" },
  { value: "label", label: "Label" },
  { value: "separator", label: "Separator" },
  { value: "spinner", label: "Spinner" },
  { value: "switch", label: "Switch" },
];

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Atoms · Career Design System",
  description: "Atoms: foundation components (Avatar, Badge, Label, Separator, Spinner, Switch).",
};

export default async function AtomsDocsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const tabRaw = sp.tab;
  const tab = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw;
  const active = tabs.some((t) => t.value === tab) ? (tab as string) : "avatar";

  const content =
    active === "badge" ? (
      <BadgeDocPage />
    ) : active === "label" ? (
      <LabelDocPage />
    ) : active === "separator" ? (
      <SeparatorDocPage />
    ) : active === "spinner" ? (
      <SpinnerDocPage />
    ) : active === "switch" ? (
      <SwitchDocPage />
    ) : (
      <AvatarDocPage />
    );

  return (
    <Grid gap="lg" className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8">
      <GridCol lgSpan={9} className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
            Category
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Atoms</h2>
          <TabsNav tabs={tabs} defaultValue="avatar" activeValue={active} />
        </div>
        {content}
      </GridCol>
      <GridCol lgSpan={3} />
    </Grid>
  );
}

