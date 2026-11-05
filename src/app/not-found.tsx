import Link from "next/link";
import { site, telHref } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center sm:py-32">
      <p className="text-7xl font-extrabold text-gold sm:text-8xl">404</p>
      <h1 className="mt-4 text-[clamp(2rem,4.5vw,3rem)] text-navy-900">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-slate">
        The link may be old or mistyped. Head back to the homepage, or call us at{" "}
        <a href={telHref(site.business.phone)} className="whitespace-nowrap font-bold text-navy-700 underline underline-offset-4">
          {site.business.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn btn-gold">
          Go to Homepage
        </Link>
        <Link href="/services" className="btn btn-ghost-dark">
          View Services
        </Link>
      </div>
    </section>
  );
}
