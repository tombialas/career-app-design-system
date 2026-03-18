import type { ReactNode } from "react";
import { Figtree } from "next/font/google";
import { DocLayout } from "../components/organisms/DocLayout";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata = {
  title: "Career Design System",
  description: "Design system web for Career App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs" className={figtree.variable}>
      <body
        className="min-h-screen bg-ds-surface-base font-sans text-ds-text-primary antialiased"
        style={{ fontFamily: "var(--font-figtree), system-ui, sans-serif" }}
      >
        <DocLayout>{children}</DocLayout>
      </body>
    </html>
  );
}

