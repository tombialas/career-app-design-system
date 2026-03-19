"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { Button } from "../../../components/molecules/Button";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ghostOnDark" | "destructive" | "mint" | "blue";
  size?: "sm" | "md" | "lg";
};

export function LinkButton({
  href,
  children,
  variant = "ghost",
  size = "sm",
}: LinkButtonProps) {
  const router = useRouter();

  return (
    <Button variant={variant} size={size} onClick={() => router.push(href)}>
      {children}
    </Button>
  );
}
