"use client";

import * as React from "react";
import Link from "next/link";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "../../../components/organisms/Tabs";
import { Card } from "../../../components/organisms/Card";
import { Button } from "../../../components/molecules/Button";
import { Switch } from "../../../components/atoms/Switch";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/organisms/Popover";
import { FormField } from "../../../components/patterns/FormField";
import { Input } from "../../../components/molecules/Input";
import { Select } from "../../../components/molecules/Select";
import { Spinner } from "../../../components/atoms/Spinner";
import { Toaster, useToast } from "../../../components/organisms/Toaster";
import { Bell, Briefcase, Home, Info, Medal, Shield, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/demo/dashboard", label: "My Applications", icon: Briefcase },
  { href: "/demo/profile", label: "My Profile", icon: User },
  { href: "/demo/vault", label: "The Vault", icon: Medal },
  { href: "/demo/settings", label: "Settings", icon: Shield },
];

const LANGS = [
  { value: "cs", label: "Čeština" },
  { value: "en", label: "English" },
] as const;

function DemoSettingsContent() {
  const { toast } = useToast();

  const [tab, setTab] = React.useState<"personal" | "notifications" | "security">("notifications");

  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [weeklyDigests, setWeeklyDigests] = React.useState(true);
  const [applicationUpdates, setApplicationUpdates] = React.useState(false);

  const [name, setName] = React.useState("Tomáš Bialas");
  const [phone, setPhone] = React.useState("");
  const [lang, setLang] = React.useState<(typeof LANGS)[number]["value"]>("cs");
  const [isSaving, setIsSaving] = React.useState(false);

  function saveProfile() {
    if (isSaving) return;
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Uloženo",
        description: "Změny profilu byly úspěšně uloženy.",
        variant: "success",
      });
    }, 1500);
  }

  return (
    <AppShell
      variant="canvas"
      sidebar={
        <div className="hidden lg:block sticky top-0 h-screen">
          <Sidebar
            variant="inline"
            themeVariant="dark"
            title="Logo"
            navItems={navItems}
            activeHref="/demo/settings"
            linkComponent={({ href, children, className }) => (
              <Link href={href} className={className}>
                {children}
              </Link>
            )}
          />
        </div>
      }
    >
      <div className="max-w-[1200px] w-full mx-auto space-y-8 px-4 lg:px-8 pt-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-ds-text-primary">My Profile</h1>
          <p className="text-[16px] leading-relaxed text-ds-text-secondary">
            Správa tvého účtu a nastavení aplikace.
          </p>
        </header>

        <TabsRoot value={tab} onValueChange={(v) => setTab(v as any)} className="space-y-6">
          <TabsList>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications">
            <Grid gap="lg">
              <GridCol smSpan={4} mdSpan={8} lgSpan={12}>
                <Card className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-ds-text-primary">Notifications</p>
                    <p className="text-sm text-ds-text-secondary">
                      Vyber, co ti má aplikace posílat a kdy.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Grid gap="md" className="items-center">
                      <GridCol smSpan={4} mdSpan={7} lgSpan={10}>
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold text-ds-text-primary">Email notifications</p>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0"
                                  aria-label="Co jsou Email notifications?"
                                >
                                  <Info className="h-4 w-4" aria-hidden />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="max-w-xs">
                                <div className="space-y-2">
                                  <p className="text-sm font-semibold text-ds-text-primary">Email notifications</p>
                                  <p className="text-sm text-ds-text-secondary">
                                    Zapne/ vypne všechny emailové notifikace (digests, změny statusu, doporučení).
                                  </p>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <p className="text-sm text-ds-text-secondary">
                            Dostávej notifikace emailem místo push.
                          </p>
                        </div>
                      </GridCol>
                      <GridCol smSpan={4} mdSpan={1} lgSpan={2} className="flex justify-end">
                        <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                      </GridCol>
                    </Grid>

                    <div className="h-px w-full bg-ds-border-subtle/60" />

                    <Grid gap="md" className="items-center">
                      <GridCol smSpan={4} mdSpan={7} lgSpan={10}>
                        <div className="space-y-1">
                          <p className="font-semibold text-ds-text-primary">Weekly career digests</p>
                          <p className="text-sm text-ds-text-secondary">
                            Týdenní souhrn: nová doporučení a posun v cílech.
                          </p>
                        </div>
                      </GridCol>
                      <GridCol smSpan={4} mdSpan={1} lgSpan={2} className="flex justify-end">
                        <Switch checked={weeklyDigests} onCheckedChange={setWeeklyDigests} />
                      </GridCol>
                    </Grid>

                    <div className="h-px w-full bg-ds-border-subtle/60" />

                    <Grid gap="md" className="items-center">
                      <GridCol smSpan={4} mdSpan={7} lgSpan={10}>
                        <div className="space-y-1">
                          <p className="font-semibold text-ds-text-primary">Application status updates</p>
                          <p className="text-sm text-ds-text-secondary">
                            Upozornění při změně statusu přihlášky (screening, interview, offer).
                          </p>
                        </div>
                      </GridCol>
                      <GridCol smSpan={4} mdSpan={1} lgSpan={2} className="flex justify-end">
                        <Switch checked={applicationUpdates} onCheckedChange={setApplicationUpdates} />
                      </GridCol>
                    </Grid>
                  </div>
                </Card>
              </GridCol>
            </Grid>
          </TabsContent>

          <TabsContent value="personal">
            <Grid gap="lg">
              <GridCol smSpan={4} mdSpan={8} lgSpan={12}>
                <Card className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-ds-text-primary">Personal Info</p>
                    <p className="text-sm text-ds-text-secondary">
                      Základní údaje pro účet a komunikaci.
                    </p>
                  </div>

                  <Grid gap="lg" className="items-end">
                    <GridCol smSpan={4} mdSpan={4} lgSpan={6}>
                      <FormField id="name" label="Jméno" isRequired>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                      </FormField>
                    </GridCol>

                    <GridCol smSpan={4} mdSpan={4} lgSpan={6}>
                      <FormField id="email" label="Email">
                        <Input id="email" value="tomas@bialas.cz" disabled />
                      </FormField>
                    </GridCol>

                    <GridCol smSpan={4} mdSpan={4} lgSpan={6}>
                      <FormField id="phone" label="Telefon">
                        <Input
                          id="phone"
                          placeholder="+420 777 123 456"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </FormField>
                    </GridCol>

                    <GridCol smSpan={4} mdSpan={4} lgSpan={6}>
                      <FormField id="lang" label="Preferovaný jazyk">
                        <Select.Root value={lang} onValueChange={(v) => setLang(v as any)}>
                          <Select.Trigger id="lang" aria-label="Preferovaný jazyk">
                            <Select.Value placeholder="Vyber jazyk" />
                          </Select.Trigger>
                          <Select.Content>
                            <Select.Group>
                              {LANGS.map((l) => (
                                <Select.Item key={l.value} value={l.value}>
                                  <Select.ItemText>{l.label}</Select.ItemText>
                                </Select.Item>
                              ))}
                            </Select.Group>
                          </Select.Content>
                        </Select.Root>
                      </FormField>
                    </GridCol>

                    <GridCol smSpan={4} mdSpan={8} lgSpan={12} className="flex justify-end">
                      <Button onClick={saveProfile} disabled={isSaving}>
                        {isSaving ? (
                          <span className="flex items-center gap-2">
                            <Spinner size="sm" className="text-ds-on-primary" />
                            Ukládám…
                          </span>
                        ) : (
                          "Uložit změny"
                        )}
                      </Button>
                    </GridCol>
                  </Grid>
                </Card>
              </GridCol>
            </Grid>
          </TabsContent>

          <TabsContent value="security">
            <Grid gap="lg">
              <GridCol smSpan={4} mdSpan={8} lgSpan={12}>
                <EmptySecurityCard />
              </GridCol>
            </Grid>
          </TabsContent>
        </TabsRoot>
      </div>
    </AppShell>
  );
}

function EmptySecurityCard() {
  return (
    <Card className="space-y-2">
      <div className="flex items-center gap-2">
        <Bell className="h-5 w-5 text-ds-text-muted" aria-hidden />
        <p className="text-sm font-semibold text-ds-text-primary">Security</p>
      </div>
      <p className="text-sm text-ds-text-secondary">
        Placeholder sekce pro 2FA, sessions a změnu hesla (doplníme později).
      </p>
    </Card>
  );
}

export default function DemoSettingsPage() {
  return (
    <Toaster>
      <DemoSettingsContent />
    </Toaster>
  );
}

