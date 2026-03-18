"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const ModalRoot = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;
const ModalClose = DialogPrimitive.Close;
const ModalPortal = DialogPrimitive.Portal;

const ModalOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className = "", ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={`
      fixed inset-0 z-[var(--z-ds-overlay)] bg-black/40 backdrop-blur-sm
      [animation-duration:var(--duration-ds-normal)] [animation-timing-function:var(--ease-ds-out)]
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0
      data-[state=open]:animate-in data-[state=open]:fade-in-0
      ${className}
    `.trim()}
    {...props}
  />
));
ModalOverlay.displayName = "ModalOverlay";

const ModalContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    /** Optional close button in corner. */
    showClose?: boolean;
  }
>(({ className = "", showClose = true, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={`
        fixed left-[50%] top-[50%] z-[var(--z-ds-modal)] w-full max-w-lg translate-x-[-50%] translate-y-[-50%]
        rounded-3xl border border-ds-border-subtle bg-ds-ui-bg shadow-ds-diffuse-lg
        [animation-duration:var(--duration-ds-normal)] [animation-timing-function:var(--ease-ds-out)]
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
        data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
        ${className}
      `.trim()}
      {...props}
    >
      <div className="p-6 pr-12">{children}</div>
      {showClose && (
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-full p-2 text-ds-text-muted hover:bg-ds-surface-card-soft/60 hover:text-ds-text-primary"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </ModalPortal>
));
ModalContent.displayName = "ModalContent";

function ModalHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex flex-col space-y-2 pb-4 ${className}`.trim()} {...props} />;
}

function ModalFooter({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-4 flex flex-col-reverse gap-2 border-t border-ds-border-subtle pt-4 sm:flex-row sm:justify-end sm:gap-2 ${className}`.trim()}
      {...props}
    />
  );
}

function ModalTitle({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={`text-xl font-bold text-ds-text-primary ${className}`.trim()}
      {...props}
    />
  );
}

function ModalDescription({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={`text-sm text-ds-text-secondary ${className}`.trim()}
      {...props}
    />
  );
}

export const Modal = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Close: ModalClose,
  Portal: ModalPortal,
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
  Footer: ModalFooter,
  Title: ModalTitle,
  Description: ModalDescription,
};
