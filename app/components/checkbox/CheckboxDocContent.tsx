"use client";

import { Checkbox } from "../../../components/molecules/Checkbox";
import { Label } from "../../../components/atoms/Label";

export default function CheckboxDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Checkbox</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Zaškrtávací pole (Radix). size-5, rounded-md, border. Checked = bg-ds-primary-strong, bílá ikona.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Stavy</h2>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex cursor-pointer items-center gap-3">
            <Checkbox />
            <span className="text-sm text-ds-text-primary">Unchecked</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3">
            <Checkbox defaultChecked />
            <span className="text-sm text-ds-text-primary">Checked</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 opacity-60">
            <Checkbox disabled />
            <span className="text-sm text-ds-text-muted">Disabled</span>
          </label>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">S labelem</h2>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="cursor-pointer text-sm font-normal">
            Souhlasím s podmínkami
          </Label>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Size:</strong> 20×20px (size-5)</li>
          <li><strong>Border:</strong> ds-border-subtle; checked = ds-primary-strong</li>
          <li><strong>Ikona:</strong> Lucide Check, bílá v checked stavu</li>
        </ul>
      </section>
    </div>
  );
}
