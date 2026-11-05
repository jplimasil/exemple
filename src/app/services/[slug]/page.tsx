import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, PhoneCall } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { ServiceCard } from "@/components/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { SampleTag } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { getService, site, telHref } from "@/lib/site";

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.name} in ${site.business.baseLocation}`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = site.services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const path = `/services/${service.slug}`;

  return (
    <>
      <PageHeader
        title={service.name}
        intro={service.summary}
        image={service.image}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: path, label: service.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-gold text-lg">
            Get a Free Quote
          </Link>
          <a href={telHref(site.business.phone)} className="btn btn-ghost-light text-lg">
            <PhoneCall className="size-5" aria-hidden="true" />
            {site.business.phone}
          </a>
        </div>
      </PageHeader>

      <section aria-labelledby="includes-title" className="py-16 sm:py-24">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <p className="eyebrow">Service overview</p>
            <h2 id="includes-title" className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] text-navy-900">
              What&apos;s included
              <SampleTag show={service.sample} />
            </h2>
            <p className="mt-5 text-lg text-slate">{service.description}</p>
            <ul className="mt-8 grid gap-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-cloud px-4 py-3.5 font-medium text-navy-900">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-gold text-navy-950">
                    <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {service.idealFor && (
              <p className="mt-8 border-l-4 border-gold pl-4 text-navy-900">
                <strong>Ideal for:</strong> {service.idealFor}
              </p>
            )}
          </div>
          <div className="reveal relative pr-5 pb-5 sm:pr-8 sm:pb-8 lg:sticky lg:top-28">
            <div aria-hidden="true" className="absolute right-0 bottom-0 h-2/3 w-2/3 rounded-[var(--radius-panel)] bg-gold" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] shadow-lift">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section aria-labelledby="other-title" className="bg-cloud py-16 sm:py-24">
          <div className="container-page">
            <h2 id="other-title" className="reveal text-[clamp(1.9rem,4vw,2.75rem)] text-navy-900">
              Other services
            </h2>
            <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
                <li key={s.slug} className="reveal">
                  <ServiceCard service={s} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBanner />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ])}
      />
    </>
  );
}
