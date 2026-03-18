"use client";

import { ListItem } from "../../../components/molecules/ListItem";

export default function ListItemDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          List item
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Settings / Language / FAQ row type: label, optional value on the right, and a chevron. Playful and clear.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Usage</h2>
        <div className="max-w-md space-y-2">
          <ListItem label="Settings" onClick={() => {}} />
          <ListItem label="Language" value="Czech" onClick={() => {}} />
          <ListItem label="FAQ" onClick={() => {}} />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>rounded-xl, border-ds-border-subtle, bg-ds-surface-card, px-4 py-3</li>
          <li>label (left), value (optional), chevron (right)</li>
          <li>onClick → hover bg-ds-surface-card-soft/60, cursor-pointer</li>
        </ul>
      </section>
    </div>
  );
}
