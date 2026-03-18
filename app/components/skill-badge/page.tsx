import { SkillBadge } from "../../../components/patterns/SkillBadge";
import SkillBadgeDocContent from "./SkillBadgeDocContent";

export const metadata = {
  title: "Skill badge · Career Design System",
  description: "Skill badge: dovednost s remove/edit v The Vault",
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
          Tag dovednosti v The Vault: jeden pill s textem a volitelnými ikonami odstranit (X) a edit (tužka). Varianty hard (modrá) / soft (fialová).
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
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">S remove a edit</h2>
        <p className="mb-4 text-sm text-ds-text-secondary">
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">onRemove</code> a{" "}
          <code className="rounded bg-ds-surface-card-soft/70 px-1 text-sm">onEdit</code> – callbacky pro ikony.
        </p>
        <SkillBadgeDocContent />
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li><strong>Shape:</strong> pill (rounded-full), stejný vzhled jako Chip</li>
          <li><strong>Hard:</strong> accent.blue.soft; Soft: primary.soft</li>
          <li><strong>Ikony:</strong> Lucide Pencil (edit), X (remove), 3.5 / 3.5</li>
        </ul>
      </section>
    </div>
  );
}
