"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { TabsRoot, TabsList, TabsTrigger } from "../../../components/organisms/Tabs";

export type TabLink = { value: string; label: string };

type TabsNavProps = {
  tabs: TabLink[];
  paramName?: string;
  defaultValue: string;
  activeValue?: string;
};

export function TabsNav({
  tabs,
  paramName = "tab",
  defaultValue,
  activeValue,
}: TabsNavProps) {
  const router = useRouter();
  const pathname = usePathname();

  const controlledActive = activeValue ?? defaultValue;
  const [active, setActive] = React.useState(controlledActive);

  React.useEffect(() => {
    setActive(controlledActive);
  }, [controlledActive]);

  return (
    <TabsRoot
      value={active}
      onValueChange={(next) => {
        setActive(next);
        router.replace(`${pathname}?${paramName}=${encodeURIComponent(next)}`);
        router.refresh();
      }}
    >
      <TabsList>
        {tabs.map((t) => (
          <TabsTrigger key={t.value} value={t.value}>
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </TabsRoot>
  );
}

