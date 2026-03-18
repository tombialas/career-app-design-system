"use client";

import Link from "next/link";
import { AppShell } from "../../../components/organisms/AppShell";
import { Sidebar } from "../../../components/organisms/Sidebar";
import { Card } from "../../../components/organisms/Card";
import { Grid, GridCol } from "../../../components/organisms/GridLayout";
import { Score } from "../../../components/molecules/Score";
import { Chip } from "../../../components/molecules/Chip";
import { Button } from "../../../components/molecules/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/atoms/Avatar";
import { Home, Briefcase, User, Scan } from "lucide-react";

type ApplicationCardMockProps = {
  score: number;
  chipLabel: string;
  role: string;
  company: string;
  createdAt: string;
};

function ApplicationCardMock({
  score,
  chipLabel,
  role,
  company,
  createdAt,
}: ApplicationCardMockProps) {
  const isHigh = score >= 80;
  const isLow = score < 60;

  const cardVariant = isHigh ? "highlightGreen" : isLow ? "highlightPink" : "soft";
  const chipVariant = isHigh ? "green" : isLow ? "red" : "yellow";

  return (
    <Card
      hoverable
      as="article"
      variant={cardVariant as "highlightGreen" | "highlightPink" | "soft"}
      className="flex h-full flex-col items-center gap-4 text-center"
    >
      <Score value={score} variant="circle" size={96} />
      <Chip variant={chipVariant as "green" | "red" | "yellow"}>{chipLabel}</Chip>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-ds-text-primary">{role}</p>
        <p className="text-xs text-ds-text-muted">{company}</p>
      </div>
      <p className="mt-auto text-xs text-ds-text-tertiary">{createdAt}</p>
    </Card>
  );
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/demo/dashboard", label: "My Applications", icon: Briefcase },
  { href: "/components/avatar", label: "My Profile", icon: User },
];

export default function DemoDashboardPage() {
  return (
    <AppShell
      variant="canvas"
      sidebar={
        <Sidebar
          variant="inline"
          themeVariant="dark"
          title="Logo"
          navItems={navItems}
          activeHref="/demo/dashboard"
          linkComponent={({ href, children, className }) => (
            <Link href={href} className={className}>
              {children}
            </Link>
          )}
          footer={
            <>
              <Button
                variant="ghostOnDark"
                size="sm"
                className="w-full justify-center border-white/30 hover:border-white/40"
              >
                <Scan className="h-5 w-5 shrink-0" />
                New Analysis
              </Button>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://picsum.photos/80" alt="User avatar" />
                  <AvatarFallback>NS</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ds-on-dark">Name Surname</p>
                  <p className="truncate text-xs text-ds-on-dark-muted">email@domain.com</p>
                </div>
              </div>
            </>
          }
        />
      }
    >
      <div className="max-w-[1200px] w-full mx-auto space-y-8 px-4 lg:px-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
            Dashboard pattern
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-ds-text-primary">
                My Applications
              </h1>
              <p className="mt-1 text-sm text-ds-text-secondary">
                Preview: jak spolu fungují AppShell, Sidebar, Card, Score a Chip (Figma: My
                Applications).
              </p>
            </div>
            <Link
              href="/"
              className="text-sm font-medium text-ds-primary-strong hover:underline"
            >
              ← Zpět na Overview
            </Link>
          </div>
        </header>

        <Grid gap="lg">
          <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
            <ApplicationCardMock
              score={82}
              chipLabel="Tailored"
              role="Growth Marketing Manager"
              company="USU Software, s.r.o."
              createdAt="12.03.2026 14:55"
            />
          </GridCol>
          <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
            <ApplicationCardMock
              score={74}
              chipLabel="Analyzed"
              role="Customer Retention Director"
              company="Notino"
              createdAt="11.03.2026 10:49"
            />
          </GridCol>
          <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
            <ApplicationCardMock
              score={61}
              chipLabel="Analyzed"
              role="CMO – Marketing Director"
              company="GRiZLY.CZ"
              createdAt="08.03.2026 08:24"
            />
          </GridCol>
          <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
            <ApplicationCardMock
              score={88}
              chipLabel="Tailored"
              role="Commercial Strategy Lead"
              company="Refurbed"
              createdAt="10.03.2026 15:44"
            />
          </GridCol>
          <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
            <ApplicationCardMock
              score={69}
              chipLabel="Tailored"
              role="Product Marketing Manager"
              company="Startup (confidential)"
              createdAt="09.03.2026 09:12"
            />
          </GridCol>
          <GridCol smSpan={4} mdSpan={4} lgSpan={4}>
            <ApplicationCardMock
              score={55}
              chipLabel="Analyzed"
              role="Head of Growth"
              company="Marketplace"
              createdAt="07.03.2026 17:03"
            />
          </GridCol>
        </Grid>
      </div>
    </AppShell>
  );
}

