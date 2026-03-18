"use client";

import { Select } from "../../../components/molecules/Select";
import { Label } from "../../../components/atoms/Label";

export default function SelectDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Select</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Výběr z options (Radix). Pill tvar triggeru (rounded-full), h-10, v souladu s Inputem. Dropdown rounded-2xl, shadow-ds-diffuse-md.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">S labelem</h2>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="fruit">Ovoce</Label>
          <Select.Root>
            <Select.Trigger id="fruit" className="w-full">
              <Select.Value placeholder="Vyberte…" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="apple">Jablko</Select.Item>
              <Select.Item value="banana">Banán</Select.Item>
              <Select.Item value="orange">Pomeranč</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Trigger:</strong> rounded-full, h-10, border-ds-border-subtle</li>
          <li><strong>Content:</strong> rounded-2xl, border-ds-border-subtle, shadow-ds-diffuse-md</li>
          <li><strong>Focus:</strong> ring-2 ring-ds-primary-strong</li>
        </ul>
      </section>
    </div>
  );
}
