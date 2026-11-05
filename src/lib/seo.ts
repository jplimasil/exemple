import type { Metadata } from "next";
import { absoluteUrl, site, siteUrl, telHref } from "./site";

interface PageMetaInput {
  title?: string;
  description?: string;
  path: string;
}

/** Per-page metadata with canonical URL and Open Graph/Twitter fields. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const desc = description ?? site.seo.description;
  const ogTitle = title
    ? site.seo.titleTemplate.replace("%s", title)
    : site.seo.defaultTitle;
  return {
    title: title ?? { absolute: site.seo.defaultTitle },
    description: desc,
    alternates: { canonical: path },
    openGraph: { title: ogTitle, description: desc, url: path },
    twitter: { title: ogTitle, description: desc },
  };
}

/**
 * LocalBusiness JSON-LD built only from fields present in the config.
 * Returns null in preview mode so placeholder details are never published
 * as structured data. Reviews/ratings are intentionally never emitted:
 * self-serving review markup is ineligible for rich results and easy to
 * misrepresent.
 */
export function localBusinessJsonLd() {
  if (site.previewMode) return null;
  const b = site.business;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": b.schemaType,
    "@id": `${siteUrl}/#business`,
    name: b.name,
    url: siteUrl,
    telephone: telHref(b.phone).replace("tel:", ""),
    description: site.seo.description,
    image: absoluteUrl("/opengraph-image"),
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning services",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.summary,
          url: absoluteUrl(`/services/${s.slug}`),
        },
      })),
    },
  };

  if (b.legalName) data.legalName = b.legalName;
  if (b.email) data.email = b.email;
  if (b.priceRange) data.priceRange = b.priceRange;
  if (b.foundedYear) data.foundingDate = String(b.foundedYear);
  if (b.sameAs?.length) data.sameAs = b.sameAs;
  if (b.address) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      addressRegion: b.address.region,
      postalCode: b.address.postalCode,
      addressCountry: b.address.country,
    };
  }
  if (b.hours?.length) {
    data.openingHoursSpecification = b.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  return data;
}

export function faqJsonLd() {
  if (site.previewMode || site.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  if (site.previewMode) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
