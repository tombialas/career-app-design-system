import { SkillBadge } from "../../../components/patterns/SkillBadge";
import SkillBadgeDocContent from "./SkillBadgeDocContent";

export const metadata = {
  title: "Skill badge · Career Design System",
  description: "Skill badge: a skill pill with remove/edit actions in The Vault",
};

export default function SkillBadgeDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">
          Component
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">
          Skill badge
        </h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Skill tag in The Vault: one pill with text and optional icons to remove (X) and edit (pencil). Variants: hard (blue) / soft (purple).
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Variants</h2>
        <div className="flex flex-wrap gap-2">
          <SkillBadge variant="soft">Product thinking</SkillBadge>
          <SkillBadge variant="hard">React</SkillBadge>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">With remove and edit</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">onRemove</code> a{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">onEdit</code> – callbacks for the icons.
        </p>
        <SkillBadgeDocContent />
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Shape:</strong> pill (rounded-full), same look as Chip</li>
          <li><strong>Hard:</strong> accent.blue.soft; Soft: primary.soft</li>
          <li><strong>Icons:</strong> Lucide Pencil (edit), X (remove)</li>
        </ul>
      </section>
    </div>
  );
}
