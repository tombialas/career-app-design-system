"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Sidebar, type SidebarNavItem, type SidebarNavGroup } from "./Sidebar";
import { AppShell } from "./AppShell";
import { Blocks, Box, Compass, Component, Home, LayoutGrid, MessageSquare, Palette, PenTool, Shapes, Type } from "lucide-react";

const linkComponent = ({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <Link href={href} className={className} onClick={onClick}>
    {children}
  </Link>
);

export function DocLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname?.startsWith("/demo") || pathname === "/dashboard-preview") {
    return <>{children}</>;
  }

  const navItems: (SidebarNavItem | SidebarNavGroup)[] = [
    { href: "/", label: "Home", icon: Home },
    {
      label: "BRAND",
      children: [
        { href: "/docs/brand/mission-vision", label: "Mission & Vision", icon: Compass },
        { href: "/docs/brand/tone-of-voice", label: "Tone of Voice", icon: MessageSquare },
        { href: "/docs/brand/logo-guidelines", label: "Logo Guidelines", icon: PenTool },
      ],
    },
    {
      label: "FOUNDATIONS",
      children: [
        { href: "/docs/foundations/design-tokens", label: "Design Tokens", icon: Component },
        { href: "/docs/foundations/colors", label: "Colors", icon: Palette },
        { href: "/docs/foundations/typography", label: "Typography", icon: Type },
      ],
    },
    {
      label: "COMPONENTS",
      children: [
        { href: "/docs/atoms", label: "Atoms", icon: Box },
        { href: "/docs/molecules", label: "Molecules", icon: Blocks },
        { href: "/docs/organisms", label: "Organisms", icon: LayoutGrid },
        { href: "/docs/patterns", label: "Patterns", icon: Shapes },
      ],
    },
  ];
  const sidebarCommon = {
    title: "Career Design System" as const,
    navItems,
    activeHref: pathname ?? undefined,
    linkComponent,
    footer: (
      <p className="text-[10px] text-ds-text-tertiary">
        Brand manual integration is planned.
      </p>
    ),
  };

  return (
    <>
      <AppShell
        variant="canvas"
        sidebar={
          <div className="hidden lg:block sticky top-0 h-screen">
            <Sidebar
              variant="inline"
              themeVariant="dark"
              {...sidebarCommon}
              className="bg-ds-surface-card-dark"
            />
          </div>
        }
      >
        <div className="max-w-[1200px] mx-auto w-full px-4 lg:px-8 pt-8">{children}</div>
      </AppShell>

      {/* Mobile: drawer + hamburger (with backdrop for readability) */}
      <div className="lg:hidden">
        <Sidebar
          variant="drawer"
          themeVariant="dark"
          {...sidebarCommon}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onOpenMenu={() => setSidebarOpen(true)}
          openMenuLabel="Open menu"
          closeMenuLabel="Close menu"
        />
      </div>
    </>
  );
}
