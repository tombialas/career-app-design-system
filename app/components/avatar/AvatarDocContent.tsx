"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../../../components/atoms/Avatar";

export default function AvatarDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Avatar</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Avatar je Radix primitive pro profilovku: image + fallback. Default je rounded-full a overflow-hidden.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Základ</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://picsum.photos/80" alt="User avatar" />
            <AvatarFallback>TB</AvatarFallback>
          </Avatar>

          <Avatar className="h-12 w-12">
            <AvatarImage src="" alt="" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Avatar className="h-16 w-16">
            <AvatarFallback>PRO</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>
            <strong>Root:</strong> rounded-full + overflow-hidden
          </li>
          <li>
            <strong>Fallback:</strong> bg-ds-surface-card-soft, text-ds-text-primary, font-semibold
          </li>
          <li>
            <strong>Image:</strong> object-cover
          </li>
        </ul>
      </section>
    </div>
  );
}

