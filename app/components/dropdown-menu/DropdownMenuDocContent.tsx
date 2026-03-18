"use client";

import { ChevronDown, MoreHorizontal, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/organisms/DropdownMenu";
import { Button } from "../../../components/molecules/Button";

export default function DropdownMenuDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Dropdown menu
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A menu opened after clicking the trigger (button or icon). Radix. Language toggles, card actions (⋯), anything as an action list.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          With button trigger
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2 font-normal">
              Options
              <ChevronDown className="h-4 w-4 shrink-0 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem destructive onClick={() => {}}>
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Icon trigger (e.g. card actions)
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0" aria-label="Open menu">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {}}>Pin</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Star</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem destructive onClick={() => {}}>
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Specification
        </h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Content:</strong> bg-ds-surface-card, rounded-xl, shadow-ds-diffuse-md, p-1.5</li>
            <li><strong>Item:</strong> rounded-lg, focus bg-ds-surface-card-soft</li>
            <li><strong>Separator:</strong> bg-ds-border-subtle</li>
            <li><strong>destructive:</strong> text-ds-feedback-danger</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
