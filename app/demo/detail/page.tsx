"use client";

import Link from "next/link";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "../../../components/organisms/Tabs";
import { Card } from "../../../components/organisms/Card";
import { Score } from "../../../components/molecules/Score";
import { ProgressBar } from "../../../components/molecules/ProgressBar";
import { Label } from "../../../components/atoms/Label";
import { Badge } from "../../../components/atoms/Badge";
import { SkillBadge } from "../../../components/patterns/SkillBadge";
import { Button } from "../../../components/molecules/Button";
import { Briefcase, Check, Home, Sparkles, User, Wrench } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/demo/dashboard", label: "My Applications", icon: Briefcase },
  { href: "/demo/profile", label: "My Profile", icon: User },
];

export default function DemoApplicationDetailPage() {
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
            activeHref="/demo/detail"
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
        <header className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-ds-text-primary">
              Application Detail
            </h1>
            <p className="text-sm text-ds-text-muted">
              Review your match score and create a tailored CV.
            </p>
          </div>

          <div className="border-t border-ds-border-subtle/60 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-lg font-bold text-ds-text-primary">
                    Senior Marketing Manager @ HubSpot
                  </p>
                  <Badge className="bg-orange-100 text-orange-700 border border-orange-200">
                    Analyzed
                  </Badge>
                </div>
                <Link
                  href="/demo/dashboard"
                  className="text-sm font-medium text-ds-primary-strong hover:underline"
                >
                  ← Back to My Applications
                </Link>
              </div>
            </div>
          </div>
        </header>

        <TabsRoot value="analysis" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="tailoring">CV Tailoring</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="analysis">
            <div className="space-y-8">
              {/* Horní sekce: Match Score + Result */}
              <Grid gap="lg">
                <GridCol smSpan={4} mdSpan={8} lgSpan={7}>
                  <Card
                    variant="highlightGreen"
                    padding="lg"
                    className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8"
                  >
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-ds-text-primary">Match score</p>
                      <div className="flex items-center justify-center">
                        <Score value={82} size={140} variant="circle" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 space-y-4">
                      <Grid gap="md" className="items-center w-full">
                        <GridCol lgSpan={4}>
                          <div className="flex items-center gap-3">
                            <Wrench className="h-5 w-5 shrink-0 text-ds-text-muted" aria-hidden />
                            <Label className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                              Hard Skills
                            </Label>
                          </div>
                        </GridCol>
                        <GridCol lgSpan={6}>
                          <ProgressBar value={75} className="h-2" />
                        </GridCol>
                        <GridCol lgSpan={2} className="text-right">
                          <span className="text-sm font-semibold text-ds-text-primary">75%</span>
                        </GridCol>
                      </Grid>

                      <Grid gap="md" className="items-center w-full">
                        <GridCol lgSpan={4}>
                          <div className="flex items-center gap-3">
                            <Briefcase className="h-5 w-5 shrink-0 text-ds-text-muted" aria-hidden />
                            <Label className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                              Experience
                            </Label>
                          </div>
                        </GridCol>
                        <GridCol lgSpan={6}>
                          <ProgressBar value={90} className="h-2" />
                        </GridCol>
                        <GridCol lgSpan={2} className="text-right">
                          <span className="text-sm font-semibold text-ds-text-primary">90%</span>
                        </GridCol>
                      </Grid>

                      <Grid gap="md" className="items-center w-full">
                        <GridCol lgSpan={4}>
                          <div className="flex items-center gap-3">
                            <User className="h-5 w-5 shrink-0 text-ds-text-muted" aria-hidden />
                            <Label className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                              Soft Skills
                            </Label>
                          </div>
                        </GridCol>
                        <GridCol lgSpan={6}>
                          <ProgressBar value={80} className="h-2" />
                        </GridCol>
                        <GridCol lgSpan={2} className="text-right">
                          <span className="text-sm font-semibold text-ds-text-primary">80%</span>
                        </GridCol>
                      </Grid>
                    </div>
                  </Card>
                </GridCol>

                <GridCol smSpan={4} mdSpan={8} lgSpan={5} className="space-y-4">
                  <div className="space-y-3">
                    <h2 className="text-lg font-bold text-ds-text-primary">Our result</h2>
                    <p className="text-sm leading-relaxed text-ds-text-secondary">
                      Your extensive experience in digital marketing and data analysis makes you a strong candidate
                      for the Head of Content &amp; Performance position, as you can effectively drive performance
                      through data-driven strategies.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                      Key matching skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge variant="hard">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                        Skill_Name
                      </SkillBadge>
                      <SkillBadge variant="hard">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                        Skill_Name
                      </SkillBadge>
                      <SkillBadge variant="hard">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                        Skill_Name
                      </SkillBadge>
                      <SkillBadge variant="hard">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                        Skill_Name
                      </SkillBadge>
                      <SkillBadge variant="hard">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                        Skill_Name
                      </SkillBadge>
                    </div>
                  </div>
                </GridCol>
              </Grid>

              {/* Spodní sekce: Potential & Action */}
              <Grid gap="lg">
                <GridCol smSpan={4} mdSpan={8} lgSpan={12}>
                  <Card variant="dark" padding="lg" className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-7 space-y-5">
                      <h2 className="text-xl font-bold text-ds-on-dark">That&apos;s a good start!</h2>
                      <p className="text-sm leading-relaxed text-ds-on-dark-muted">
                        But we can see space for improvement.
                      </p>
                      <p className="text-sm leading-relaxed text-ds-on-dark-muted">
                        To strengthen your candidacy, you should focus on developing your skills in business management and strategic thinking,
                        as these will be crucial for leading a content team and aligning initiatives with the company&apos;s overall goals.
                      </p>
                      <Button variant="primary" className="w-fit">
                        <Sparkles className="h-5 w-5 shrink-0" aria-hidden />
                        Tailor CV up to 94 % (1 credit)
                      </Button>
                    </div>

                    <div className="lg:col-span-5">
                      <Card variant="glass" className="space-y-6">
                        <p className="text-sm font-semibold text-ds-on-dark">
                          Potential score
                        </p>
                        <div className="flex items-center justify-center">
                          <Score value={94} size={160} variant="circle" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                          <SkillBadge variant="hard">
                            <Check className="h-3.5 w-3.5" aria-hidden /> Skill_Name
                          </SkillBadge>
                          <SkillBadge variant="hard">
                            <Check className="h-3.5 w-3.5" aria-hidden /> Skill_Name
                          </SkillBadge>
                          <SkillBadge variant="hard">
                            <Check className="h-3.5 w-3.5" aria-hidden /> Skill_Name
                          </SkillBadge>
                          <SkillBadge variant="hard">
                            <Check className="h-3.5 w-3.5" aria-hidden /> Skill_Name
                          </SkillBadge>
                          <SkillBadge variant="hard">
                            <Check className="h-3.5 w-3.5" aria-hidden /> Skill_Name
                          </SkillBadge>
                          <SkillBadge variant="hard">
                            <Check className="h-3.5 w-3.5" aria-hidden /> Skill_Name
                          </SkillBadge>
                        </div>
                      </Card>
                    </div>
                  </Card>
                </GridCol>
              </Grid>
            </div>
          </TabsContent>

          <TabsContent value="overview">
            <Card className="text-sm text-ds-text-secondary">Overview placeholder.</Card>
          </TabsContent>
          <TabsContent value="tailoring">
            <Card className="text-sm text-ds-text-secondary">CV Tailoring placeholder.</Card>
          </TabsContent>
          <TabsContent value="documents">
            <Card className="text-sm text-ds-text-secondary">Documents placeholder.</Card>
          </TabsContent>
        </TabsRoot>
      </div>
    </AppShell>
  );
}

