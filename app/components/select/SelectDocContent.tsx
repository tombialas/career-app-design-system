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
          Selection from options (Radix). Pill-shaped trigger (rounded-full), h-10, aligned with the Input. Dropdown is rounded-2xl with shadow-ds-diffuse-md.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">With label</h2>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="fruit">Fruit</Label>
          <Select.Root>
            <Select.Trigger id="fruit" className="w-full">
              <Select.Value placeholder="Select…" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="orange">Orange</Select.Item>
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
