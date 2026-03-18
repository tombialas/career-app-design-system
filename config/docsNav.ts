/**
 * Sdílená navigace pro DS web. Členění: Tokens → Atomy → Molekuly → Organismy → Patterns.
 * Používá DocLayout (Sidebar).
 */
export type DocsNavLink = { href: string; label: string };
export type DocsNavItem = DocsNavLink | { label: string; children: DocsNavLink[] };

export const docsNav: DocsNavItem[] = [
  { href: "/", label: "Overview" },
  { href: "/tokens", label: "Tokens" },
  {
    label: "Atomy",
    children: [
      { href: "/components/avatar", label: "Avatar" },
      { href: "/components/badge", label: "Badge" },
      { href: "/components/label", label: "Label" },
      { href: "/components/separator", label: "Separator" },
      { href: "/components/spinner", label: "Spinner" },
      { href: "/components/switch", label: "Switch" },
    ],
  },
  {
    label: "Molekuly",
    children: [
      { href: "/components/buttons", label: "Button" },
      { href: "/components/input", label: "Input" },
      { href: "/components/textarea", label: "Textarea" },
      { href: "/components/checkbox", label: "Checkbox" },
      { href: "/components/select", label: "Select" },
      { href: "/components/chips", label: "Chip" },
      { href: "/components/progress-bar", label: "Progress bar" },
      { href: "/components/score", label: "Score" },
      { href: "/components/tooltip", label: "Tooltip" },
      { href: "/components/skeleton", label: "Skeleton" },
      { href: "/components/list-item", label: "List item" },
    ],
  },
  {
    label: "Organismy",
    children: [
      { href: "/components/layout", label: "Layout" },
      { href: "/components/card", label: "Card" },
      { href: "/components/accordion", label: "Accordion" },
      { href: "/components/modal", label: "Modal" },
      { href: "/components/alert-dialog", label: "Alert dialog" },
      { href: "/components/dropdown-menu", label: "Dropdown menu" },
      { href: "/components/popover", label: "Popover" },
      { href: "/components/toast", label: "Toast" },
      { href: "/components/tabs", label: "Tabs" },
    ],
  },
  {
    label: "Patterns",
    children: [
      { href: "/components/form-field", label: "Form field" },
      { href: "/components/skill-badge", label: "Skill badge" },
      { href: "/components/empty-state", label: "Empty state" },
    ],
  },
  {
    label: "Demo",
    children: [
      { href: "/dashboard-preview", label: "Dashboard preview" },
      { href: "/demo/cards", label: "Cards preview" },
      { href: "/demo/layout", label: "App shell preview" },
      { href: "/demo/dashboard", label: "My Applications" },
      { href: "/demo/detail", label: "Application detail" },
      { href: "/demo/vault", label: "The Vault" },
      { href: "/demo/profile", label: "My Profile" },
    ],
  },
];
