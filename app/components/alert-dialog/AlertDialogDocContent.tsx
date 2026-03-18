"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../components/organisms/AlertDialog";
import { Button } from "../../../components/molecules/Button";

export default function AlertDialogDocContent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Alert dialog
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          A confirmation modal for actions (delete, edit, review). Radix AlertDialog — focus trap and Escape closes it. Buttons: <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">asChild</code> + our Button.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Example
        </h2>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <Button variant="destructive" onClick={() => setOpen(true)}>
            Delete application
          </Button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this application?</AlertDialogTitle>
              <AlertDialogDescription>
                This cannot be undone. The application and any tailored content will be removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="ghost">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="destructive" onClick={() => setOpen(false)}>
                  Delete
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">
          Specification
        </h2>
        <div className="text-sm text-ds-text-secondary">
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Overlay:</strong> fixed inset-0, bg-black/50</li>
            <li><strong>Content:</strong> bg-ds-surface-card, rounded-2xl, shadow-ds-diffuse-lg, p-6, max-w-lg</li>
            <li><strong>Title:</strong> text-lg font-semibold text-ds-text-primary</li>
            <li><strong>Description:</strong> text-sm text-ds-text-secondary</li>
            <li><strong>Footer:</strong> flex gap, use Button with asChild on Action/Cancel</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
