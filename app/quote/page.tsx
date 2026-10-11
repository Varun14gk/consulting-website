import { QuoteEstimator } from "@/components/forms/QuoteEstimator";
import { PageHeader, Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Get a Quote", "Answer four quick questions for an indicative estimate and a tailored quote.", "/quote/");

export default function QuotePage() {
  return (
    <>
      <PageHeader eyebrow="Pricing" title="Get a quote" subtitle="Four quick steps give you an indicative range. We follow up with a clear, fixed or capped proposal." />
      <Section>
        <div className="mx-auto max-w-3xl">
          <QuoteEstimator />
        </div>
      </Section>
    </>
  );
}
