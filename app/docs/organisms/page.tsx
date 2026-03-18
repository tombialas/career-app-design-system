import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { TabsNav, type TabLink } from "../_components/TabsNav";

import AppShellDocPage from "../../components/app-shell/page";
import SidebarDocPage from "../../components/sidebar/page";
import ContainerDocPage from "../../components/container/page";
import GridLayoutDocPage from "../../components/grid-layout/page";
import ToasterDocPage from "../../components/toaster/page";
import LayoutDocPage from "../../components/layout/page";
import CardDocPage from "../../components/card/page";
import AccordionDocPage from "../../components/accordion/page";
import ModalDocPage from "../../components/modal/page";
import AlertDialogDocPage from "../../components/alert-dialog/page";
import DropdownMenuDocPage from "../../components/dropdown-menu/page";
import PopoverDocPage from "../../components/popover/page";
import ToastDocPage from "../../components/toast/page";
import TabsDocPage from "../../components/tabs/page";

const tabs: TabLink[] = [
  { value: "app-shell", label: "AppShell" },
  { value: "sidebar", label: "Sidebar" },
  { value: "container", label: "Container" },
  { value: "grid-layout", label: "Grid layout" },
  { value: "toaster", label: "Toaster" },
  { value: "layout", label: "Layout" },
  { value: "card", label: "Card" },
  { value: "accordion", label: "Accordion" },
  { value: "modal", label: "Modal" },
  { value: "alert-dialog", label: "Alert dialog" },
  { value: "dropdown-menu", label: "Dropdown" },
  { value: "popover", label: "Popover" },
  { value: "toast", label: "Toast" },
  { value: "tabs", label: "Tabs" },
];

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Organisms · Career Design System",
  description: "Organisms: layout-level components (modal, toast, dropdown, etc.).",
};

export default async function OrganismsDocsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};
  const tabRaw = sp.tab;
  const tab = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw;
  const active = tabs.some((t) => t.value === tab) ? (tab as string) : "app-shell";

  const content =
    active === "sidebar" ? (
      <SidebarDocPage />
    ) : active === "container" ? (
      <ContainerDocPage />
    ) : active === "grid-layout" ? (
      <GridLayoutDocPage />
    ) : active === "toaster" ? (
      <ToasterDocPage />
    ) : active === "layout" ? (
      <LayoutDocPage />
    ) : active === "card" ? (
      <CardDocPage />
    ) : active === "accordion" ? (
      <AccordionDocPage />
    ) : active === "modal" ? (
      <ModalDocPage />
    ) : active === "alert-dialog" ? (
      <AlertDialogDocPage />
    ) : active === "dropdown-menu" ? (
      <DropdownMenuDocPage />
    ) : active === "popover" ? (
      <PopoverDocPage />
    ) : active === "toast" ? (
      <ToastDocPage />
    ) : active === "tabs" ? (
      <TabsDocPage />
    ) : (
      <AppShellDocPage />
    );

  return (
    <Grid gap="lg" className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8">
      <GridCol lgSpan={9} className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
            Category
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Organisms</h1>
          <TabsNav tabs={tabs} defaultValue="app-shell" activeValue={active} />
        </div>
        {content}
      </GridCol>
      <GridCol lgSpan={3} />
    </Grid>
  );
}

