"use client";

import * as React from "react";
import Link from "next/link";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { Card } from "../../../components/organisms/Card";
import { Button } from "../../../components/molecules/Button";
import { Input } from "../../../components/molecules/Input";
import { SkillBadge } from "../../../components/patterns/SkillBadge";
import { EmptyState } from "../../../components/patterns/EmptyState";
import { Modal } from "../../../components/organisms/Modal";
import { FormField } from "../../../components/patterns/FormField";
import { Select } from "../../../components/molecules/Select";
import { Spinner } from "../../../components/atoms/Spinner";
import { Briefcase, Home, Medal, Plus, Search, User } from "lucide-react";

type Skill = { id: string; name: string; level: string };

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/demo/dashboard", label: "My Applications", icon: Briefcase },
  { href: "/demo/profile", label: "My Profile", icon: User },
  { href: "/demo/vault", label: "The Vault", icon: Medal },
];

const LEVELS = [
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Medior" },
  { value: "senior", label: "Senior" },
  { value: "expert", label: "Expert" },
] as const;

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export default function DemoVaultPage() {
  const [query, setQuery] = React.useState("");
  const q = normalize(query);

  const [hardSkills, setHardSkills] = React.useState<Skill[]>([
    { id: "hs-1", name: "Performance marketing", level: "Senior" },
    { id: "hs-2", name: "GA4", level: "Senior" },
    { id: "hs-3", name: "CRO", level: "Medior" },
    { id: "hs-4", name: "HubSpot", level: "Medior" },
    { id: "hs-5", name: "Lifecycle", level: "Senior" },
  ]);
  const [softSkills, setSoftSkills] = React.useState<Skill[]>([
    { id: "ss-1", name: "Leadership", level: "Senior" },
    { id: "ss-2", name: "Stakeholder mgmt", level: "Senior" },
    { id: "ss-3", name: "Execution", level: "Medior" },
    { id: "ss-4", name: "Structured thinking", level: "Senior" },
  ]);

  const filteredHard = React.useMemo(
    () => (q ? hardSkills.filter((s) => normalize(s.name).includes(q)) : hardSkills),
    [hardSkills, q]
  );
  const filteredSoft = React.useMemo(
    () => (q ? softSkills.filter((s) => normalize(s.name).includes(q)) : softSkills),
    [softSkills, q]
  );

  const isSearchEmpty = q.length > 0 && filteredHard.length === 0 && filteredSoft.length === 0;

  const [modalOpen, setModalOpen] = React.useState(false);
  const [newSkillName, setNewSkillName] = React.useState("");
  const [newSkillLevel, setNewSkillLevel] = React.useState<(typeof LEVELS)[number]["value"]>("mid");

  const isTooShort = normalize(newSkillName).length > 0 && normalize(newSkillName).length < 3;
  const canSubmit = normalize(newSkillName).length >= 3;
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function resetModal() {
    setNewSkillName("");
    setNewSkillLevel("mid");
  }

  function submitNewSkill() {
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const levelLabel = LEVELS.find((l) => l.value === newSkillLevel)?.label ?? "Medior";
      const skill: Skill = {
        id: `hs-${crypto.randomUUID()}`,
        name: newSkillName.trim(),
        level: levelLabel,
      };
      setHardSkills((prev) => [skill, ...prev]);
      setIsSubmitting(false);
      setModalOpen(false);
      resetModal();
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
            activeHref="/demo/vault"
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
          <h1 className="text-3xl font-bold tracking-tight text-ds-text-primary">The Vault</h1>
          <p className="text-[16px] leading-relaxed text-ds-text-secondary">
            Správa tvých dovedností, praxe a certifikací.
          </p>
        </header>

        {/* Horní lišta (Akce) */}
        <Grid gap="lg" className="items-end">
          <GridCol smSpan={4} mdSpan={8} lgSpan={8}>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ds-text-muted"
                aria-hidden
              />
              <Input
                aria-label="Vyhledat dovednosti"
                placeholder="Vyhledat dovednosti…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-11"
              />
            </div>
          </GridCol>
          <GridCol smSpan={4} mdSpan={8} lgSpan={4}>
            <Modal.Root open={modalOpen} onOpenChange={(v) => (v ? setModalOpen(true) : setModalOpen(false))}>
              <Modal.Trigger asChild>
                <Button className="w-full justify-center">
                  <Plus className="h-5 w-5 shrink-0" aria-hidden />
                  Přidat dovednost
                </Button>
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Header>
                  <Modal.Title>Přidat dovednost</Modal.Title>
                  <Modal.Description>
                    Přidej skill do The Vault. V produkci to bude zapisovat do profilu uživatele.
                  </Modal.Description>
                </Modal.Header>

                <div className="space-y-4">
                  <FormField
                    id="skill-name"
                    label="Název dovednosti"
                    isRequired
                    error={
                      isTooShort
                        ? "Název dovednosti je příliš krátký (min. 3 znaky)"
                        : undefined
                    }
                  >
                    <Input
                      id="skill-name"
                      placeholder="např. Product strategy"
                      value={newSkillName}
                      onChange={(e) => setNewSkillName(e.target.value)}
                    />
                  </FormField>

                  <FormField id="skill-level" label="Úroveň">
                    <Select.Root value={newSkillLevel} onValueChange={(v) => setNewSkillLevel(v as any)}>
                      <Select.Trigger id="skill-level" aria-label="Úroveň">
                        <Select.Value placeholder="Vyber úroveň" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Group>
                          {LEVELS.map((lvl) => (
                            <Select.Item key={lvl.value} value={lvl.value}>
                              <Select.ItemText>{lvl.label}</Select.ItemText>
                            </Select.Item>
                          ))}
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </FormField>
                </div>

                <Modal.Footer>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>
                    Zrušit
                  </Button>
                  <Button onClick={submitNewSkill} disabled={!canSubmit || isSubmitting}>
                    {isSubmitting ? <Spinner size="sm" className="text-ds-on-primary" /> : "Přidat"}
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Root>
          </GridCol>
        </Grid>

        {/* Obsah - seznam dovedností */}
        {isSearchEmpty ? (
          <EmptyState
            icon={<Search className="h-7 w-7" aria-hidden />}
            title="Dovednost nenalezena"
            description="Zkus jiné klíčové slovo nebo dovednost přidej ručně."
            action={
              <Button onClick={() => setModalOpen(true)}>
                <Plus className="h-5 w-5 shrink-0" aria-hidden />
                Přidat dovednost
              </Button>
            }
          />
        ) : (
          <Grid gap="lg">
            <GridCol smSpan={4} mdSpan={8} lgSpan={6}>
              <Card className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                    Hard Skills
                  </p>
                  <p className="mt-1 text-sm text-ds-text-secondary">
                    Tech, nástroje, metodiky. Klik na X odstraní.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filteredHard.map((s) => (
                    <SkillBadge
                      key={s.id}
                      variant="hard"
                      onRemove={() => setHardSkills((prev) => prev.filter((x) => x.id !== s.id))}
                    >
                      {s.name} · {s.level}
                    </SkillBadge>
                  ))}
                </div>
              </Card>
            </GridCol>

            <GridCol smSpan={4} mdSpan={8} lgSpan={6}>
              <Card className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                    Soft Skills
                  </p>
                  <p className="mt-1 text-sm text-ds-text-secondary">
                    Leadership, komunikace, exekuce. Klik na X odstraní.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filteredSoft.map((s) => (
                    <SkillBadge
                      key={s.id}
                      variant="soft"
                      onRemove={() => setSoftSkills((prev) => prev.filter((x) => x.id !== s.id))}
                    >
                      {s.name} · {s.level}
                    </SkillBadge>
                  ))}
                </div>
              </Card>
            </GridCol>
          </Grid>
        )}

        {/* Certifikace – Empty state */}
        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Certifikace
            </p>
            <p className="mt-1 text-sm text-ds-text-secondary">
              Zde budou nahrané certifikáty (PDF, linky, validity).
            </p>
          </div>
          <EmptyState
            icon={<Medal className="h-7 w-7" aria-hidden />}
            title="Zatím žádné certifikace"
            description="Nahraj první certifikát a přidej ho do The Vault."
            action={<Button>Nahrát první certifikát</Button>}
          />
        </section>
      </div>
    </AppShell>
  );
}

