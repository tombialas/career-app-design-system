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
          Disclosure UI built on Radix Accordion. Smooth expansion is critical: it uses Radix's height variable
          and our motion tokens.
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-ds-text-primary">Basics</h2>
        <div className="max-w-xl rounded-3xl border border-ds-border-subtle bg-ds-surface-card/70 p-4 backdrop-blur-xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is “The Vault”?</AccordionTrigger>
              <AccordionContent>
                A private knowledge base of the candidate: role, results, artifacts, and preferences. It acts as
                the source of truth for tailoring (no hallucinations).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does semantic recruitment work?</AccordionTrigger>
              <AccordionContent>
                We don't look for keywords only. We map intent and context (responsibilities, scope, seniority) and
                compare it to job requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>When to use Accordion?</AccordionTrigger>
              <AccordionContent>
                For FAQs, settings sections, and progressive disclosure. Not for primary navigation.
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

