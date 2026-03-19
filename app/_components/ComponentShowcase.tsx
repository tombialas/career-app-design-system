"use client";

import Link from "next/link";
import { Button } from "../../components/molecules/Button";
import { Badge } from "../../components/atoms/Badge";
import { Chip } from "../../components/molecules/Chip";
import { Switch } from "../../components/atoms/Switch";
import { Score } from "../../components/molecules/Score";
import { ProgressBar } from "../../components/molecules/ProgressBar";
import { Avatar, AvatarFallback } from "../../components/atoms/Avatar";
import { Input } from "../../components/molecules/Input";
import { Card } from "../../components/organisms/Card";

type ShowcaseItem = {
  name: string;
  href: string;
  preview: React.ReactNode;
};

const items: ShowcaseItem[] = [
  {
    name: "Button",
    href: "/components/buttons",
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm">Primary</Button>
        <Button size="sm" variant="ghost">Ghost</Button>
        <Button size="sm" variant="secondary">Dark</Button>
      </div>
    ),
  },
  {
    name: "Badge",
    href: "/components/badge",
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="destructive">Alert</Badge>
      </div>
    ),
  },
  {
    name: "Chip",
    href: "/components/chips",
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <Chip variant="purple">Strategy</Chip>
        <Chip variant="mint">Design</Chip>
        <Chip variant="blue">Dev</Chip>
        <Chip variant="yellow">PM</Chip>
      </div>
    ),
  },
  {
    name: "Switch",
    href: "/components/switch",
    preview: (
      <div className="flex items-center justify-center gap-4">
        <Switch defaultChecked />
        <Switch />
      </div>
    ),
  },
  {
    name: "Score",
    href: "/components/score",
    preview: (
      <div className="flex items-center justify-center">
        <Score value={78} variant="circle" size={72} />
      </div>
    ),
  },
  {
    name: "Progress Bar",
    href: "/components/progress-bar",
    preview: (
      <div className="flex w-full flex-col items-center gap-2 px-4">
        <ProgressBar value={85} />
        <ProgressBar value={52} />
        <ProgressBar value={25} />
      </div>
    ),
  },
  {
    name: "Avatar",
    href: "/components/avatar",
    preview: (
      <div className="flex items-center justify-center -space-x-2">
        <Avatar className="h-9 w-9 ring-2 ring-ds-surface-base">
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
        <Avatar className="h-9 w-9 ring-2 ring-ds-surface-base">
          <AvatarFallback className="bg-ds-primary-soft text-ds-primary-strong">IB</AvatarFallback>
        </Avatar>
        <Avatar className="h-9 w-9 ring-2 ring-ds-surface-base">
          <AvatarFallback className="bg-ds-accent-mint-soft text-ds-accent-mint-strong">JD</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    name: "Input",
    href: "/components/input",
    preview: (
      <div className="w-full px-3">
        <Input size="sm" placeholder="Search skills…" />
      </div>
    ),
  },
  {
    name: "Card",
    href: "/components/card",
    preview: (
      <Card compact className="mx-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Surface</p>
        <p className="mt-1 text-sm font-medium text-ds-text-primary">Default card</p>
      </Card>
    ),
  },
];

export function ComponentShowcase() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group rounded-3xl border border-ds-border-subtle bg-ds-surface-card/50 transition-all duration-[var(--duration-ds-fast)] hover:border-ds-border-subtle/80 hover:shadow-ds-diffuse-md hover:-translate-y-0.5"
        >
          <div className="flex min-h-[120px] items-center justify-center border-b border-ds-border-subtle/50 p-6">
            {item.preview}
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-sm font-medium text-ds-text-primary">{item.name}</p>
            <span className="text-xs text-ds-text-muted transition-colors group-hover:text-ds-primary-strong">
              View →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
