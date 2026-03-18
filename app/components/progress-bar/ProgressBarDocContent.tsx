"use client";

import { ProgressBar } from "../../../components/molecules/ProgressBar";

export default function ProgressBarDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Progress bar
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A linear progress bar from 0–100% (LoadingStatus, tailoring). Default is purple; optionally use score-based colors (useScoreColors).
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Default (purple)
        </h2>
        <div className="max-w-md space-y-4">
          <ProgressBar value={0} />
          <ProgressBar value={40} />
          <ProgressBar value={100} />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Score-based colors (useScoreColors)
        </h2>
        <div className="max-w-md space-y-4">
          <ProgressBar value={25} useScoreColors />
          <ProgressBar value={50} useScoreColors />
          <ProgressBar value={80} useScoreColors />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Specification
        </h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Height:</strong> h-2 (override via className)</li>
            <li><strong>Colors:</strong> default = ds-primary-strong (purple); useScoreColors = ds-score-low/medium/high</li>
            <li><strong>A11y:</strong> role="progressbar", aria-valuenow/min/max</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
