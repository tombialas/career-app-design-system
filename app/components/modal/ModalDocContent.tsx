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
          Overlay dialog (Radix). Premium look: bg-ds-ui-bg, rounded-3xl, shadow-ds-diffuse-lg, and a border. Backdrop bg-black/40 with blur.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Basic usage</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          Modal.Root + Trigger + Content. Inside: Title, Description, and a Footer with actions.
        </p>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button variant="primary">Open modal</Button>
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
              <Modal.Description>
                Optional description—for example, confirming an action or adding context.
              </Modal.Description>
            </Modal.Header>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button variant="ghost">Cancel</Button>
              </Modal.Close>
              <Button variant="primary">Confirm</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Root>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Overlay:</strong> bg-black/40, backdrop-blur-sm</li>
          <li><strong>Content:</strong> bg-ds-ui-bg, rounded-3xl, shadow-ds-diffuse-lg, border-ds-border-subtle</li>
          <li><strong>Close:</strong> Escape, click outside, and an optional close icon (showClose)</li>
        </ul>
      </section>
    </div>
  );
}
