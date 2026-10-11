import { SHOW_PLACEHOLDER_BADGES } from "@/config/site";

/** Renders only while the item is a placeholder AND the global flag is on. */
export function SampleBadge({
  show,
  label,
  className = "",
}: {
  show: boolean;
  label: "Sample feedback" | "Sample project" | "Sample data" | "Sample opening" | "Sample logo";
  className?: string;
}) {
  if (!show || !SHOW_PLACEHOLDER_BADGES) return null;
  return (
    <span
      className={`inline-block rounded-full border border-amber-400/50 bg-amber-400/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300 ${className}`}
    >
      {label}
    </span>
  );
}
