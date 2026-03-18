"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/molecules/Tooltip";
import { Button } from "../../../components/molecules/Button";
import { Chip } from "../../../components/molecules/Chip";

export default function TooltipDocContent() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="space-y-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
            Component
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
            Tooltip
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
            Krátká nápověda na hover (nebo focus). Radix; obal sekci v{" "}
            <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">TooltipProvider</code>. Obsah: tmavý povrch, náš stín.
          </p>
        </header>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
            On button
          </h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              Save your changes before leaving.
            </TooltipContent>
          </Tooltip>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
            On chip
          </h2>
          <div className="flex flex-wrap gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-block">
                  <Chip variant="scoreHigh" selected>High Match</Chip>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Your profile matches this role well.
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-block">
                  <Chip variant="scoreLow" selected>Low Match</Chip>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Consider adding more relevant experience.
              </TooltipContent>
            </Tooltip>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
            Placement
          </h2>
          <p className="mb-4 text-sm text-ds-text-secondary">
            <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">side</code>: top, right, bottom, left.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default text-sm text-ds-text-muted underline decoration-dotted">
                  top
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">Top</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default text-sm text-ds-text-muted underline decoration-dotted">
                  right
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">Right</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default text-sm text-ds-text-muted underline decoration-dotted">
                  bottom
                </span>
              </TooltipTrigger>
              <TooltipContent side="bottom">Bottom</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default text-sm text-ds-text-muted underline decoration-dotted">
                  left
                </span>
              </TooltipTrigger>
              <TooltipContent side="left">Left</TooltipContent>
            </Tooltip>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
            Specification
          </h2>
          <div className="text-sm text-ds-text-secondary">
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Content:</strong> bg-ds-surface-dark, text-ds-on-dark, rounded-xl, px-3 py-2, text-xs</li>
              <li><strong>Shadow:</strong> shadow-ds-diffuse-md</li>
              <li><strong>Offset:</strong> 8px from trigger</li>
              <li><strong>Provider:</strong> delayDuration (e.g. 200ms), wrap once at layout</li>
            </ul>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}
