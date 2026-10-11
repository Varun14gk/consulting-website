import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHeader, Section } from "@/components/ui/Section";
import { processSteps } from "@/content/home";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("How We Work", "Our six-step process: discovery, proposal, prototype, build, launch and support, with clear deliverables at each stage.", "/process/");

export default function ProcessPage() {
  return (
    <>
      <PageHeader eyebrow="Process" title="How we work" subtitle="A clear path with defined deliverables at every step, so you always know what happens next." />
      <Section>
        <ProcessTimeline steps={processSteps} showDeliverables />
      </Section>
      <CtaBanner />
    </>
  );
}
