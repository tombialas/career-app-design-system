"use client";

import { SkillBadge } from "../../../components/patterns/SkillBadge";

export default function SkillBadgeDocContent() {
  return (
    <div className="flex flex-wrap gap-2">
      <SkillBadge variant="soft" onRemove={() => {}} onEdit={() => {}}>
        Komunikace
      </SkillBadge>
      <SkillBadge variant="hard" onRemove={() => {}}>
        TypeScript
      </SkillBadge>
    </div>
  );
}
