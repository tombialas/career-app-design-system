 "use client";

import { useState } from "react";
import { Card } from "../../../components/organisms/Card";
import { Score } from "../../../components/molecules/Score";
import { ProgressBar } from "../../../components/molecules/ProgressBar";
import { Chip } from "../../../components/molecules/Chip";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../../components/organisms/DropdownMenu";
import { MoreHorizontal } from "lucide-react";

type MatchCardProps = {
  title: string;
  company: string;
  score: number;
  createdAt: string;
};

function MatchScoreCard({ title, company, score, createdAt }: MatchCardProps) {
  const [checked, setChecked] = useState(false);
  return (
    <Card hoverable as="article" className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <button
          type="button"
          onClick={() => setChecked((v) => !v)}
          className={`flex h-5 w-5 items-center justify-center rounded-full border border-ds-border-subtle text-xs transition-colors ${
            checked ? "bg-ds-primary-strong text-white" : "bg-white/40 text-ds-text-muted"
          }`}
          aria-pressed={checked}
        >
          {checked ? "✓" : ""}
        </button>
        <div className="flex flex-1 flex-col items-center gap-1">
          <Score value={score} variant="halfDonut" />
          <span className="text-sm font-semibold text-ds-text-primary">{score}</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ds-surface-card-soft/70 text-ds-text-secondary hover:bg-ds-surface-card-soft"
              aria-label="Akce karty"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Otevřít analýzu</DropdownMenuItem>
            <DropdownMenuItem>Duplikovat</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem destructive>Odstranit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-ds-text-primary">{title}</p>
        <p className="text-xs text-ds-text-muted">{company}</p>
      </div>
      <div className="mt-auto flex items-center justify-between gap-2 text-[11px] text-ds-text-tertiary">
        <span className="rounded-full bg-ds-surface-card-soft/70 px-2 py-1">Analyzováno</span>
        <span>{createdAt}</span>
      </div>
    </Card>
  );
}

export default function DemoCardsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Patterns
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-ds-text-primary">
          Match score cards & badges
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-ds-text-secondary">
          Demo karet a badgeů tak, jak vypadají v aplikaci: match score karty, dovednostní badgy
          a progress bary. Používá pouze komponenty z Design systému.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-ds-text-muted">
          Match score cards
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <MatchScoreCard
            title="Growth Marketing Manager"
            company="USU Software, s.r.o."
            score={86}
            createdAt="10.03.2026 • 15:44"
          />
          <MatchScoreCard
            title="Customer Retention Director"
            company="Notino"
            score={63}
            createdAt="10.03.2026 • 10:49"
          />
          <MatchScoreCard
            title="CMO – Marketingový/á ředitel/ka"
            company="GRiZLY.CZ"
            score={61}
            createdAt="08.03.2026 • 08:24"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-ds-text-muted">
          Skills & progress (detail karty)
        </h2>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <Card className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
                  Growth Marketing Manager
                </p>
                <p className="mt-1 text-sm font-semibold text-ds-text-primary">
                  Potenciální skóre&nbsp;95%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Score value={86} variant="circle" />
                <span className="text-base font-semibold text-ds-text-primary">86 / 100</span>
              </div>
            </div>
            <div className="space-y-3 text-xs text-ds-text-secondary">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Odborné dovednosti</span>
                  <span className="text-ds-text-muted">80 / 100</span>
                </div>
                <ProgressBar value={80} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Zkušenosti</span>
                  <span className="text-ds-text-muted">100 / 100</span>
                </div>
                <ProgressBar value={100} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Měkké dovednosti</span>
                  <span className="text-ds-text-muted">75 / 100</span>
                </div>
                <ProgressBar value={75} />
              </div>
            </div>
          </Card>

          <Card className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Klíčové dovednosti
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip variant="blue" selected>
                Google Analytics 4
              </Chip>
              <Chip variant="primary" selected>
                Performance marketing
              </Chip>
              <Chip variant="mint">Team leadership</Chip>
              <Chip variant="blue">Conversion Rate Optimization</Chip>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
              Co posílit
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip variant="default">Brand strategy</Chip>
              <Chip variant="default">Offline campaigns</Chip>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

