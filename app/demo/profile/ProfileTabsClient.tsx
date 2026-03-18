"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "../../../components/organisms/Tabs";
import { Card } from "../../../components/organisms/Card";
import { SkillBadge } from "../../../components/patterns/SkillBadge";
import { Switch } from "../../../components/atoms/Switch";
import { Input } from "../../../components/molecules/Input";
import { Label } from "../../../components/atoms/Label";

const tabs = [
  { value: "experience", label: "Experience" },
  { value: "skills", label: "Skills" },
  { value: "settings", label: "Settings" },
] as const;

export default function ProfileTabsClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = searchParams.get("tab") ?? "experience";

  return (
    <TabsRoot
      value={tabs.some((t) => t.value === active) ? active : "experience"}
      onValueChange={(next) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", next);
        router.replace(`${pathname}?${params.toString()}`);
      }}
      className="space-y-6"
    >
      <TabsList>
        {tabs.map((t) => (
          <TabsTrigger key={t.value} value={t.value}>
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="experience">
        <Grid gap="lg">
          <GridCol smSpan={4} mdSpan={8} lgSpan={8}>
            <Card className="space-y-3">
              <h2 className="text-lg font-bold text-ds-text-primary">Experience</h2>
              <p className="text-sm text-ds-text-secondary">
                Placeholder pro timeline zkušeností (role, company, impact). Tady se budou skládat Card + ListItem.
              </p>
            </Card>
          </GridCol>
          <GridCol smSpan={4} mdSpan={8} lgSpan={4}>
            <Card variant="soft" className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                Summary
              </p>
              <p className="text-sm text-ds-text-secondary">
                Rychlý přehled pro sidebar panel (navigace/insights).
              </p>
            </Card>
          </GridCol>
        </Grid>
      </TabsContent>

      <TabsContent value="skills">
        <Grid gap="lg">
          <GridCol smSpan={4} mdSpan={8} lgSpan={12}>
            <Card className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-ds-text-primary">Skills</h2>
                <p className="mt-1 text-sm text-ds-text-secondary">
                  SkillBadges jako pills v The Vault.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <SkillBadge variant="hard">Performance marketing</SkillBadge>
                <SkillBadge>Strategy</SkillBadge>
                <SkillBadge>Leadership</SkillBadge>
                <SkillBadge variant="hard">GA4</SkillBadge>
              </div>
            </Card>
          </GridCol>
        </Grid>
      </TabsContent>

      <TabsContent value="settings">
        <Grid gap="lg">
          <GridCol smSpan={4} mdSpan={8} lgSpan={12}>
            <Card className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-ds-text-primary">Settings</h2>
                <p className="mt-1 text-sm text-ds-text-secondary">
                  Ukázka nastavovacích prvků (Switch, Input).
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="email@domain.com" />
                </div>

                <div className="flex items-center justify-between rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-4 backdrop-blur-sm">
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold text-ds-text-primary">Weekly digest</p>
                    <p className="text-sm text-ds-text-secondary">Receive weekly insights email.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </GridCol>
        </Grid>
      </TabsContent>
    </TabsRoot>
  );
}

