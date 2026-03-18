"use client";

import { Card } from "../../components/organisms/Card";
import { Score } from "../../components/molecules/Score";
import { ProgressBar } from "../../components/molecules/ProgressBar";
import { Chip } from "../../components/molecules/Chip";

/** Match Score Card – kombinace Card, Score (circle), text (podle CARDS_AND_BADGES). */
export function MatchScoreCard() {
  return (
    <Card variant="soft" sections hoverable className="h-full">
      <Card.Header>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ds-text-muted">
          Shoda s nabídkou
        </h3>
      </Card.Header>
      <Card.Content>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <Score value={86} variant="circle" showValue />
          <div className="min-w-0 flex-1 space-y-1 text-center sm:text-left">
            <p className="text-lg font-semibold text-ds-text-primary">86 / 100</p>
            <p className="text-sm text-ds-text-secondary">
              Potenciální skóre: 95 %. Dobrá shoda s požadavky role.
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs text-ds-text-muted">
            <span>Odborné dovednosti</span>
            <span>80 / 100</span>
          </div>
          <ProgressBar value={80} useScoreColors />
          <div className="flex justify-between text-xs text-ds-text-muted">
            <span>Zkušenosti</span>
            <span>100 / 100</span>
          </div>
          <ProgressBar value={100} useScoreColors />
          <div className="flex justify-between text-xs text-ds-text-muted">
            <span>Měkké dovednosti</span>
            <span>75 / 100</span>
          </div>
          <ProgressBar value={75} useScoreColors />
        </div>
      </Card.Content>
    </Card>
  );
}

/** Skills Card – grid Chipů + ProgressBar (Hard / Soft). */
export function SkillsCard() {
  return (
    <Card variant="default" sections hoverable className="h-full">
      <Card.Header>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ds-text-muted">
          Dovednosti a požadavky
        </h3>
      </Card.Header>
      <Card.Content>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Klíčové odpovídající dovednosti
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          <Chip>React</Chip>
          <Chip>TypeScript</Chip>
          <Chip>Product thinking</Chip>
          <Chip>Komunikace</Chip>
        </div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Hard skills
        </p>
        <ProgressBar value={85} useScoreColors className="mb-4" />
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Soft skills
        </p>
        <ProgressBar value={72} useScoreColors />
      </Card.Content>
    </Card>
  );
}

/** Jednoduchá karta s CTA (pro Bento). */
export function CtaCard() {
  return (
    <Card variant="highlightGreen" sections className="h-full">
      <Card.Header>
        <h3 className="text-lg font-semibold text-ds-text-primary">Další krok</h3>
      </Card.Header>
      <Card.Content>
        <p className="text-sm text-ds-text-secondary">
          Upravte CV podle této nabídky a zvyšte šanci na pozvánku.
        </p>
      </Card.Content>
      <Card.Footer>
        <p className="text-xs text-ds-text-muted">1 kredit · Tailoring Engine</p>
      </Card.Footer>
    </Card>
  );
}
