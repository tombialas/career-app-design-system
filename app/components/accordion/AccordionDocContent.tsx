"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/organisms/Accordion";

export default function AccordionDocContent() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Component</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Accordion</h1>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ds-text-secondary">
          Disclosure UI postavené na Radix Accordion. Kritické je plynulé rozevírání přes Radix height
          proměnnou a naše motion tokeny.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Základ</h2>
        <div className="max-w-xl rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-4 backdrop-blur-xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Co je “The Vault”?</AccordionTrigger>
              <AccordionContent>
                Privátní znalostní základna kandidáta: role, výsledky, artefakty, preference. Slouží jako
                zdroj pravdy pro tailoring (bez halucinací).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Jak funguje semantic recruitment?</AccordionTrigger>
              <AccordionContent>
                Nehledáme jen keywords. Mapujeme intent a kontext (zodpovědnosti, scope, seniorita) a
                porovnáváme s job požadavky.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Kdy použít Accordion?</AccordionTrigger>
              <AccordionContent>
                Pro FAQ, sekce nastavení a progressive disclosure. Ne pro primární navigaci.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Specification</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-ds-text-secondary">
          <li>
            <strong>Item:</strong> border-b border-ds-border-subtle
          </li>
          <li>
            <strong>Trigger:</strong> font-semibold + ChevronDown rotace na open
          </li>
          <li>
            <strong>Content:</strong> animate-accordion-up/down (Radix height var + duration-ds-normal)
          </li>
        </ul>
      </section>
    </div>
  );
}

