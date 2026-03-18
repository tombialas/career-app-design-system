"use client";

import * as React from "react";
import { Switch } from "../../../components/atoms/Switch";
import { Label } from "../../../components/atoms/Label";

export default function SwitchDocContent() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Switch</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Přepínač postavený na Radix Switch. Apple pill tvar, focus ring a motion tokeny.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Stavy</h2>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-3">
            <Switch checked={checked} onCheckedChange={setChecked} id="switch-controlled" />
            <Label htmlFor="switch-controlled" className="text-sm font-normal">
              Controlled ({checked ? "On" : "Off"})
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <Switch defaultChecked id="switch-default" />
            <Label htmlFor="switch-default" className="text-sm font-normal">
              Default on
            </Label>
          </div>

          <div className="flex items-center gap-3 opacity-60">
            <Switch disabled id="switch-disabled" />
            <Label htmlFor="switch-disabled" className="text-sm font-normal">
              Disabled
            </Label>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>
            <strong>Size:</strong> 44×24px (w-11 h-6)
          </li>
          <li>
            <strong>Off:</strong> bg-ds-border-subtle
          </li>
          <li>
            <strong>On:</strong> bg-ds-primary-strong
          </li>
          <li>
            <strong>Motion:</strong> duration-ds-fast + ease-ds-out (thumb i barva)
          </li>
        </ul>
      </section>
    </div>
  );
}

