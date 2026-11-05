import Link from "next/link";
import { site } from "@/lib/site";
import { ServiceCard } from "../service-card";
import { SectionHeader } from "../ui";

/** Home-page services block: navy panel with photo cards. */
export function Services() {
  return (
    <section aria-labelledby="services-title" className="py-14 sm:px-3 sm:py-20 lg:px-4">
      <div className="relative overflow-hidden bg-navy-900 py-16 sm:rounded-[var(--radius-panel)] sm:py-24">
        {/* Geometric accents */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-[3rem] bg-navy-700/40 rotate-12" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-10 -left-10 size-40 rounded-[2rem] border border-white/10" />

        <div className="container-page relative">
          <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              id="services-title"
              eyebrow="What we do"
              title="Our Cleaning Services"
              intro="From routine upkeep to deep sanitization, we have every space covered."
              tone="light"
            />
            <Link href="/services" className="btn btn-gold self-start lg:self-auto">
              View All Services
            </Link>
          </div>

          <ul className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {site.services.map((s) => (
              <li key={s.slug} className="reveal">
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
