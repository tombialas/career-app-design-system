"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className = "", ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={`
      fixed bottom-0 right-0 z-[var(--z-ds-toast)] flex max-h-[50vh] min-w-[200px] max-w-[30vw] flex-col gap-2 p-4
      ${className}
    `.trim()}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

type ToastVariant = "default" | "success" | "destructive";

const variantClasses: Record<ToastVariant, string> = {
  default:
    "border-0 bg-ds-surface-card text-ds-text-primary shadow-ds-diffuse-lg",
  success:
    "border-0 bg-ds-accent-mint-soft text-ds-text-primary",
  destructive:
    "border-0 bg-ds-feedback-danger text-ds-on-primary",
};

const ToastRoot = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> & { variant?: ToastVariant }
>(({ className = "", variant = "default", ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={`
      group pointer-events-auto relative flex max-w-full min-w-0 items-start justify-between gap-3 overflow-hidden
      rounded-2xl px-4 py-3 pr-10 text-base transition-all
      data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0
      data-[swipe=end]:data-[state=closed]:animate-out
      ${variantClasses[variant]}
      ${className}
    `.trim()}
    {...props}
  />
));
ToastRoot.displayName = ToastPrimitive.Root.displayName;

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className = "", ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={`break-words font-semibold ${className}`.trim()}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className = "", ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={`mt-1 break-words text-xs opacity-90 ${className}`.trim()}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className = "", ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={`
      absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 opacity-70 transition-opacity
      hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ds-primary-strong focus:ring-offset-2
      ${className}
    `.trim()}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

const Toast = ToastRoot;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
};
