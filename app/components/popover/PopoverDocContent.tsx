"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../../../components/organisms/Popover";
import { Button } from "../../../components/molecules/Button";
import { Badge } from "../../../components/atoms/Badge";

export default function PopoverDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Popover</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Context UI na Radix Popover. Glass surface, z-index token a animate-in/out (fade + zoom).
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Základ</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-ds-text-primary">Quick actions</p>
                <p className="text-sm text-ds-text-secondary">
                  Krátký kontext bez přebití stránky. Ideální pro mini nastavení nebo „more“ menu.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <Badge variant="primary">PRO</Badge>
                  <Badge>Beta</Badge>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>
            <strong>Z-index:</strong> z-[var(--z-ds-dropdown)]
          </li>
          <li>
            <strong>Surface:</strong> bg-ds-surface-card/90 + backdrop-blur-xl + border
          </li>
          <li>
            <strong>Shadow:</strong> shadow-ds-diffuse-lg
          </li>
          <li>
            <strong>Motion:</strong> duration-ds-normal + ease-ds-out, fade/zoom in/out
          </li>
        </ul>
      </section>
    </div>
  );
}

