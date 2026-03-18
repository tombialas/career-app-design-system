"use client";

import { Button } from "../../../components/molecules/Button";
import { Card } from "../../../components/organisms/Card";
import { Toaster, useToast } from "../../../components/organisms/Toaster";

function DemoButtons() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        size="sm"
        onClick={() =>
          toast({
            title: "Saved",
            description: "Your changes have been saved.",
            variant: "success",
          })
        }
      >
        Success toast
      </Button>
      <Button
        size="sm"
        variant="destructive"
        onClick={() =>
          toast({
            title: "Something went wrong",
            description: "Please try again.",
            variant: "destructive",
          })
        }
      >
        Destructive toast
      </Button>
    </div>
  );
}

export default function ToasterDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Toaster</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Globální toast notifications. Použití: renderuj <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">{"<Toaster />"}</code>{" "}
          jednou v rootu, pak voláš <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">useToast()</code>.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Demo</h2>
        <Toaster>
          <Card className="space-y-4">
            <DemoButtons />
          </Card>
        </Toaster>
      </section>
    </div>
  );
}

