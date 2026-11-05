import { JsonLd } from "@/components/json-ld";
import { ServiceCard } from "@/components/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PageHeader } from "@/components/sections/page-header";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cleaning Services",
  description: `Residential, deep, move-in/move-out, office, commercial, and recurring cleaning in ${site.business.baseLocation}. Get a free quote from ${site.business.name}.`.slice(0, 160),
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Cleaning services for every space"
        intro="Choose the service that fits your home or business. Every quote is based on your space, not a one-size price."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ]}
      />
      <section aria-label="All services" className="py-16 sm:py-24">
        <ul className="container-page grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <li key={s.slug} className="reveal">
              <ServiceCard service={s} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </section>
      <HowItWorks />
      <CtaBanner />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
