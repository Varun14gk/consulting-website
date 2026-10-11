import Link from "next/link";
import { COMPANY_NAME } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold tracking-tight" aria-label={`${COMPANY_NAME} home`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-accent text-white" aria-hidden="true">
        {COMPANY_NAME.charAt(0)}
      </span>
      <span className="text-lg">{COMPANY_NAME}</span>
    </Link>
  );
}
