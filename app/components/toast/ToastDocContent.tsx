"use client";

import { Button } from "../../../components/molecules/Button";
import { Toaster, useToast } from "../../../components/organisms/Toaster";

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="space-y-4">
      <p className="text-sm text-ds-text-secondary">
        Obal appku (nebo sekci) v <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">Toaster</code>, pak <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">useToast().toast(...)</code>.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="secondary"
          onClick={() => toast({ title: "Saved", description: "Your changes have been saved." })}
        >
          Default toast
        </Button>
        <Button
          variant="mint"
          onClick={() =>
            toast({
              title: "Success",
              description: "Payment completed.",
              variant: "success",
            })
          }
        >
          Success toast
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast({
              title: "Error",
              description: "Something went wrong.",
              variant: "destructive",
            })
          }
        >
          Destructive toast
        </Button>
      </div>
    </div>
  );
}

export default function ToastDocContent() {
  return (
    <Toaster>
      <div className="space-y-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
            Component
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
            Toast
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
            Krátká zpětná vazba (uloženo, chyba, úspěch). Obal appku v <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">Toaster</code>, pak <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">useToast().toast(&#123; title, description, variant &#125;)</code>. Po 5s zmizí; swipe nebo křížek zavře.
          </p>
        </header>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
            Variants
          </h2>
          <ToastDemo />
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
            Specification
          </h2>
          <div className="text-sm text-ds-text-secondary">
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Viewport:</strong> fixed top-right (sm: bottom-right), z-100, gap-2, p-4</li>
              <li><strong>Default:</strong> bg-ds-surface-card, shadow-ds-diffuse-md</li>
              <li><strong>Success:</strong> bg-ds-mint-soft</li>
              <li><strong>Destructive:</strong> bg-ds-red-100, text-ds-red-900</li>
              <li><strong>Duration:</strong> 5000ms (Toaster)</li>
            </ul>
          </div>
        </section>
      </div>
    </Toaster>
  );
}
