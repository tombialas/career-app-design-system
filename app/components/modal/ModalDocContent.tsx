"use client";

import { Modal } from "../../../components/organisms/Modal";
import { Button } from "../../../components/molecules/Button";

export default function ModalDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Modal</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Overlay dialog (Radix). Prémiový vzhled: bg-ds-ui-bg, rounded-3xl, shadow-ds-diffuse-lg, border. Backdrop bg-black/40 s blur.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Základní použití</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Modal.Root + Trigger + Content. Uvnitř Title, Description, Footer s akcemi.
        </p>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button variant="primary">Otevřít modal</Button>
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Nadpis modalu</Modal.Title>
              <Modal.Description>
                Volitelný popis – např. potvrzení akce nebo doplňující text.
              </Modal.Description>
            </Modal.Header>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button variant="ghost">Zrušit</Button>
              </Modal.Close>
              <Button variant="primary">Potvrdit</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Root>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Overlay:</strong> bg-black/40, backdrop-blur-sm</li>
          <li><strong>Content:</strong> bg-ds-ui-bg, rounded-3xl, shadow-ds-diffuse-lg, border-ds-border-subtle</li>
          <li><strong>Zavření:</strong> Escape, klik mimo, volitelný křížek (showClose)</li>
        </ul>
      </section>
    </div>
  );
}
