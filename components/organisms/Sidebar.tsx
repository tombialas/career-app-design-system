"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

export type SidebarNavItem = {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type SidebarNavGroup = {
  label: string;
  children: SidebarNavItem[];
};

export type SidebarVariant = "drawer" | "inline";
export type SidebarThemeVariant = "transparent" | "dark";

type SidebarProps = {
  /** drawer = fixed overlay + hamburger (mobile). inline = column inside a card (desktop, Figma). */
  variant?: SidebarVariant;
  /** transparent = blends with ds-surface-page (docs). dark = dark panel (app screens). */
  themeVariant?: SidebarThemeVariant;
  /** App or product name (top left). */
  title: React.ReactNode;
  /** Nav links (flat or grouped). Rendered as <a href> or linkComponent if provided. */
  navItems: (SidebarNavItem | SidebarNavGroup)[];
  /** Current path for active state (e.g. from usePathname()). */
  activeHref?: string;
  /** Optional custom link (e.g. Next.js Link) for client-side nav. Receives className and onClick (e.g. close drawer). */
  linkComponent?: (props: {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }) => React.ReactNode;
  /** Footer area: user, credits, logout, etc. */
  footer?: React.ReactNode;
  /** Mobile (drawer only): sidebar open state. */
  open?: boolean;
  /** Mobile (drawer only): close sidebar (e.g. after nav click). */
  onClose?: () => void;
  /** Mobile (drawer only): open sidebar (hamburger click). */
  onOpenMenu?: () => void;
  /** A11y: label for open menu button. */
  openMenuLabel?: string;
  /** A11y: label for close button. */
  closeMenuLabel?: string;
  className?: string;
};

function isNavGroup(
  item: SidebarNavItem | SidebarNavGroup
): item is SidebarNavGroup {
  return "children" in item && Array.isArray(item.children);
}

export function Sidebar({
  variant = "drawer",
  themeVariant = "transparent",
  title,
  navItems,
  activeHref,
  linkComponent,
  footer,
  open = false,
  onClose,
  onOpenMenu,
  openMenuLabel = "Open menu",
  closeMenuLabel = "Close menu",
  className = "",
}: SidebarProps) {
  const isInline = variant === "inline";
  const isDark = themeVariant === "dark";
  const isActive = (href: string) => activeHref === href;

  const renderItem = (item: SidebarNavItem) => {
    const active = isActive(item.href);
    const itemClassName = isDark
      ? `
      flex w-full items-center justify-start gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-colors font-[family-name:var(--font-figtree),system-ui,sans-serif]
      ${active ? "bg-ds-primary-soft text-ds-purple-900 font-semibold" : "text-ds-on-dark-muted hover:bg-white/10 hover:text-ds-on-dark"}
    `.trim()
      : `
      flex w-full items-center justify-start gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-colors font-[family-name:var(--font-figtree),system-ui,sans-serif]
      ${active ? "bg-ds-surface-card-soft text-ds-text-primary" : "text-ds-text-secondary hover:bg-ds-surface-card-soft/60 hover:text-ds-text-primary"}
    `.trim();
    const content = (
      <>
        {item.icon != null && <item.icon className="h-5 w-5 shrink-0" />}
        {item.label}
      </>
    );
    if (linkComponent) {
      return linkComponent({
        href: item.href,
        children: content,
        className: itemClassName,
        onClick: onClose ?? undefined,
      });
    }
    return (
      <a href={item.href} onClick={onClose} className={itemClassName}>
        {content}
      </a>
    );
  };

  const titleClass = isDark ? "font-semibold text-ds-on-dark" : "font-semibold text-ds-text-primary";
  const groupLabelClass = isDark ? "text-ds-on-dark-muted" : "text-ds-text-muted";
  const footerTextClass = isDark ? "text-ds-on-dark-muted" : "text-ds-text-tertiary";
  const closeBtnClass = isDark ? "rounded-full p-2 text-ds-on-dark-muted hover:bg-white/10 lg:hidden" : "rounded-full p-2 text-ds-text-muted hover:bg-ds-surface-card-soft/60 lg:hidden";

  const sidebarContent = (
    <>
      <div
        className={`flex items-center ${!isInline ? "justify-between" : "justify-start"} gap-3 p-6 pb-4 lg:p-8 lg:pb-4`}
      >
        <span className={`${titleClass} font-[family-name:var(--font-figtree),system-ui,sans-serif]`}>{title}</span>
        {!isInline && onClose != null && (
          <button type="button" onClick={onClose} aria-label={closeMenuLabel} className={closeBtnClass}>
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-4 pb-4" aria-label="Main">
        {navItems.map((item) => {
          if (isNavGroup(item)) {
            return (
              <div key={item.label} className="pt-2">
                <p className={`mb-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider ${groupLabelClass} font-[family-name:var(--font-figtree),system-ui,sans-serif]`}>
                  {item.label}
                </p>
                <div className="space-y-0.5">
                  {item.children.map((child) => (
                    <React.Fragment key={child.href}>{renderItem(child)}</React.Fragment>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <React.Fragment key={item.href}>{renderItem(item)}</React.Fragment>
          );
        })}
      </nav>
      {footer != null && (
        <div className={`mt-auto px-6 pb-6 pt-4 flex flex-col gap-4 ${footerTextClass}`}>{footer}</div>
      )}
    </>
  );

  const bgClass = isDark ? "bg-ds-surface-card-dark" : "bg-transparent";

  if (isInline) {
    return (
      <aside
        className={`
          flex w-64 shrink-0 flex-col
          my-4 ml-4 lg:my-6 lg:ml-6
          h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)]
          rounded-3xl shadow-ds-diffuse-lg
          ${isDark ? "border border-white/10" : "border border-ds-border-subtle/40"}
          ${bgClass}
          ${className}
        `.trim()}
        aria-label="Sidebar"
      >
        {sidebarContent}
      </aside>
    );
  }

  return (
    <>
      {onOpenMenu != null && (
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label={openMenuLabel}
          className="fixed left-4 top-4 z-[var(--z-ds-modal)] rounded-full border border-ds-border-subtle bg-ds-ui-bg/95 p-2 text-ds-text-secondary shadow-ds-diffuse-sm backdrop-blur-xl hover:bg-ds-ui-bg lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      {open === true && onClose != null && (
        <div
          className="fixed inset-0 z-[var(--z-ds-overlay)] bg-black/50 lg:hidden"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
          aria-hidden
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-[var(--z-ds-modal)] flex w-64 flex-col border-r transition-transform duration-[var(--duration-ds-slow)] ease-[var(--ease-ds-out-expo)]
          ${isDark ? "border-white/10 bg-ds-surface-card-dark" : "border-ds-border-subtle bg-ds-ui-bg"}
          shadow-ds-diffuse-md backdrop-blur-xl lg:translate-x-0 lg:shadow-none
          ${open ? "translate-x-0" : "-translate-x-full"}
          ${className}
        `.trim()}
        aria-label="Sidebar"
      >
        {sidebarContent}
      </aside>
    </>
  );
}
