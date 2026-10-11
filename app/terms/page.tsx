import { LegalPage } from "@/components/ui/LegalPage";
import { terms } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Terms of Use", "The terms that apply to use of this website.", "/terms/");

export default function TermsPage() {
  return <LegalPage title="Terms of Use" sections={terms} />;
}
