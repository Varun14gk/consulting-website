import { LegalPage } from "@/components/ui/LegalPage";
import { privacy } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Privacy Policy", "How we collect, use and protect your information.", "/privacy/");

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={privacy} />;
}
