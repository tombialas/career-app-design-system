"use client";

import * as React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast";

export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "success" | "destructive";
};

type ToastWithId = ToastOptions & { id: string; open: boolean };

type ToastContextValue = {
  toasts: ToastWithId[];
  addToast: (options: ToastOptions) => void;
  removeToast: (id: string) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function Toaster({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastWithId[]>([]);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, open: false } : t)));
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 400);
  }, []);

  const addToast = React.useCallback((options: ToastOptions) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ...options, open: true }]);
  }, []);

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      <ToastProvider duration={5000} swipeDirection="right">
        {children}
        <ToastViewport />
        {toasts.map((t) => (
          <Toast
            key={t.id}
            variant={t.variant ?? "default"}
            open={t.open}
            onOpenChange={(open) => {
              if (!open) removeToast(t.id);
            }}
          >
            <div className="min-w-0 flex-1">
              {t.title && <ToastTitle>{t.title}</ToastTitle>}
              {t.description && <ToastDescription>{t.description}</ToastDescription>}
            </div>
            <ToastClose />
          </Toast>
        ))}
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within Toaster");
  }
  return { toast: ctx.addToast };
}
