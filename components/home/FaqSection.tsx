import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { homeFaqs } from "@/content/home";

export function FaqSection() {
  return (
    <Section eyebrow="FAQ" title="Questions we hear often">
      <div className="mx-auto max-w-3xl">
        <Accordion items={homeFaqs} />
      </div>
    </Section>
  );
}
