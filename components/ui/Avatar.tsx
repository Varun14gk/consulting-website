import { asset } from "@/lib/url";

/**
 * Initials avatar. To use a real photo, put the file in /public/team and set `photo` on the founder in content/about.ts.
 */
export function Avatar({ initials, photo, name }: { initials: string; photo?: string; name: string }) {
  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={asset(photo)} alt={name} className="h-28 w-28 rounded-2xl object-cover" width={112} height={112} />;
  }
  return (
    <div
      role="img"
      aria-label={`${name} (photo placeholder)`}
      className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-accent text-3xl font-bold text-white"
    >
      {initials}
    </div>
  );
}
