"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Sidebar, type SidebarNavItem, type SidebarNavGroup } from "./Sidebar";
import { AppShell } from "./AppShell";
import { Grid, GridCol } from "./GridLayout";
import { Blocks, Box, Home, LayoutGrid, Palette, Puzzle } from "lucide-react";

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

  const navItems: SidebarNavItem[] = [
    { href: "/", label: "Overview", icon: Home },
    { href: "/tokens", label: "Tokens", icon: Palette },
    { href: "/docs/atoms", label: "Atoms", icon: Box },
    { href: "/docs/molecules", label: "Molecules", icon: Blocks },
    { href: "/docs/organisms", label: "Organisms", icon: LayoutGrid },
    { href: "/docs/patterns", label: "Patterns", icon: Puzzle },
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
        <Grid gap="lg" className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8">
          <GridCol lgSpan={9}>{children}</GridCol>
          {/* Optional: chapter/TOC side panel */}
          {/* <GridCol lgSpan={3}>...</GridCol> */}
        </Grid>
      </AppShell>

      {/* Mobile: drawer + hamburger (with backdrop for readability) */}
      <div className="lg:hidden">
        <Sidebar
          variant="drawer"
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
