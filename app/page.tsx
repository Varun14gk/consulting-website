import { Engagement } from "@/components/home/Engagement";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { HowWeWork } from "@/components/home/ProcessTimeline";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Stats } from "@/components/home/Stats";
import { TechGrid } from "@/components/home/TechGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyUs } from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustriesStrip />
      <ServicesOverview />
      <WhyUs />
      <Stats />
      <HowWeWork />
      <FeaturedProjects />
      <TechGrid />
      <Testimonials />
      <Engagement />
      <FaqSection />
      <FinalCta />
    </>
  );
}
