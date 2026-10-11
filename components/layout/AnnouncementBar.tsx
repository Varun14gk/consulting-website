import Link from "next/link";
import { ANNOUNCEMENT } from "@/config/site";

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-brand to-accent px-4 py-2 text-center text-sm font-medium text-white">
      {ANNOUNCEMENT}{" "}
      <Link href="/contact/" className="underline underline-offset-2">
        Get in touch
      </Link>
    </div>
  );
}
