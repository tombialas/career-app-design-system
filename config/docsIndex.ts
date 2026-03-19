export type DocEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
};

export const docsIndex: DocEntry[] = [
  // Brand
  {
    title: "Mission & Vision",
    description: "Brand purpose and long-term direction",
    href: "/docs/brand/mission-vision",
    category: "Brand",
    keywords: ["mission", "vision", "purpose", "brand", "strategy"],
  },
  {
    title: "Tone of Voice",
    description: "How we communicate with users",
    href: "/docs/brand/tone-of-voice",
    category: "Brand",
    keywords: ["tone", "voice", "communication", "copy", "writing"],
  },
  {
    title: "Logo Guidelines",
    description: "Logo usage, spacing, and variants",
    href: "/docs/brand/logo-guidelines",
    category: "Brand",
    keywords: ["logo", "brand", "guidelines", "identity", "mark"],
  },

  // Foundations
  {
    title: "Design Tokens",
    description: "Color, type, layout, and motion tokens",
    href: "/docs/foundations/design-tokens",
    category: "Foundations",
    keywords: ["tokens", "variables", "design", "spacing", "radius", "motion", "easing", "duration"],
  },
  {
    title: "Colors",
    description: "Primary, neutral, and system color palettes",
    href: "/docs/foundations/colors",
    category: "Foundations",
    keywords: ["colors", "palette", "primary", "neutral", "system", "purple", "mint", "blue", "hex", "rgb"],
  },
  {
    title: "Typography",
    description: "Figtree font system, sizes, and rules",
    href: "/docs/foundations/typography",
    category: "Foundations",
    keywords: ["typography", "font", "figtree", "heading", "body", "tracking", "line-height"],
  },

  // Components — category pages
  {
    title: "Atoms",
    description: "Avatar, Badge, Spinner, Switch, Label, Separator",
    href: "/docs/atoms",
    category: "Components",
    keywords: ["atoms", "avatar", "badge", "spinner", "switch", "label", "separator"],
  },
  {
    title: "Molecules",
    description: "Button, Input, Select, Chip, Score, Tooltip, and more",
    href: "/docs/molecules",
    category: "Components",
    keywords: ["molecules", "button", "input", "select", "chip", "score", "tooltip", "checkbox"],
  },
  {
    title: "Organisms",
    description: "Card, Sidebar, Modal, AppShell, Tabs, Toast",
    href: "/docs/organisms",
    category: "Components",
    keywords: ["organisms", "card", "sidebar", "modal", "app shell", "tabs", "toast", "accordion"],
  },
  {
    title: "Patterns",
    description: "Full-page patterns and composite layouts",
    href: "/docs/patterns",
    category: "Components",
    keywords: ["patterns", "layout", "page", "template", "form field", "skill badge", "empty state"],
  },

  // Individual component pages
  { title: "Avatar", description: "User avatar with image and fallback", href: "/components/avatar", category: "Atoms", keywords: ["avatar", "profile", "image", "fallback"] },
  { title: "Badge", description: "Status indicator label", href: "/components/badge", category: "Atoms", keywords: ["badge", "status", "label", "tag"] },
  { title: "Label", description: "Form label primitive", href: "/components/label", category: "Atoms", keywords: ["label", "form", "accessibility"] },
  { title: "Separator", description: "Visual divider line", href: "/components/separator", category: "Atoms", keywords: ["separator", "divider", "line", "hr"] },
  { title: "Spinner", description: "Loading indicator", href: "/components/spinner", category: "Atoms", keywords: ["spinner", "loading", "progress", "indicator"] },
  { title: "Switch", description: "Toggle between on/off states", href: "/components/switch", category: "Atoms", keywords: ["switch", "toggle", "boolean", "on", "off"] },
  { title: "Button", description: "Primary action trigger with variants", href: "/components/buttons", category: "Molecules", keywords: ["button", "action", "primary", "ghost", "secondary", "cta"] },
  { title: "Input", description: "Text input with label and validation", href: "/components/input", category: "Molecules", keywords: ["input", "text", "form", "field", "validation"] },
  { title: "Textarea", description: "Multi-line text input", href: "/components/textarea", category: "Molecules", keywords: ["textarea", "multiline", "text", "form"] },
  { title: "Checkbox", description: "Multi-select option control", href: "/components/checkbox", category: "Molecules", keywords: ["checkbox", "check", "form", "multi-select"] },
  { title: "Select", description: "Dropdown selection control", href: "/components/select", category: "Molecules", keywords: ["select", "dropdown", "option", "picker"] },
  { title: "Chip", description: "Colored tag for categories and filters", href: "/components/chips", category: "Molecules", keywords: ["chip", "tag", "filter", "category", "pill"] },
  { title: "Progress Bar", description: "Visual progress indicator with score colors", href: "/components/progress-bar", category: "Molecules", keywords: ["progress", "bar", "percentage", "score"] },
  { title: "Score", description: "Donut/half-donut score visualization", href: "/components/score", category: "Molecules", keywords: ["score", "donut", "ring", "percentage", "match"] },
  { title: "Tooltip", description: "Contextual info popup on hover", href: "/components/tooltip", category: "Molecules", keywords: ["tooltip", "hover", "popup", "info"] },
  { title: "Skeleton", description: "Loading placeholder for content", href: "/components/skeleton", category: "Molecules", keywords: ["skeleton", "loading", "placeholder", "shimmer"] },
  { title: "List Item", description: "Structured row for lists and menus", href: "/components/list-item", category: "Molecules", keywords: ["list", "item", "row", "menu"] },
  { title: "Card", description: "Content container with variants", href: "/components/card", category: "Organisms", keywords: ["card", "container", "surface", "glass", "dark"] },
  { title: "Sidebar", description: "Navigation panel with groups", href: "/components/layout", category: "Organisms", keywords: ["sidebar", "navigation", "panel", "menu", "layout"] },
  { title: "Modal", description: "Dialog overlay for focused actions", href: "/components/modal", category: "Organisms", keywords: ["modal", "dialog", "overlay", "popup"] },
  { title: "Tabs", description: "Tabbed content navigation", href: "/components/tabs", category: "Organisms", keywords: ["tabs", "tabbed", "navigation", "switch"] },
  { title: "Toast", description: "Notification messages", href: "/components/toast", category: "Organisms", keywords: ["toast", "notification", "alert", "message", "snackbar"] },
  { title: "Accordion", description: "Expandable content sections", href: "/components/accordion", category: "Organisms", keywords: ["accordion", "expand", "collapse", "faq"] },
  { title: "Form Field", description: "Label + input + error composition", href: "/components/form-field", category: "Patterns", keywords: ["form", "field", "label", "error", "validation"] },
  { title: "Skill Badge", description: "Skill tag with match indicator", href: "/components/skill-badge", category: "Patterns", keywords: ["skill", "badge", "tag", "match", "requirement"] },
  { title: "Empty State", description: "Placeholder for empty data views", href: "/components/empty-state", category: "Patterns", keywords: ["empty", "state", "placeholder", "no data", "illustration"] },
];
