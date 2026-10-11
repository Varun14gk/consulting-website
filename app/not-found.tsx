import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="gradient-text text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/contact/" className="btn-ghost">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
