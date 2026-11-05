import { site as rawSite } from "@/config/site";
import type { Sampleable, SiteConfig } from "@/config/types";

function collectSamples(config: SiteConfig): string[] {
  const found: string[] = [];
  const check = (label: string, items: Sampleable[]) =>
    items.forEach((item, i) => item.sample && found.push(`${label}[${i}]`));
  check("hero.highlights", config.hero.highlights);
  check("services", config.services);
  check("whyChooseUs.items", config.whyChooseUs.items);
  check("testimonials", config.testimonials);
  check("faqs", config.faqs);
  if (config.about.sample) found.push("about");
  return found;
}

function resolveSite(config: SiteConfig): SiteConfig {
  if (config.previewMode) return config;
  const samples = collectSamples(config);
  if (samples.length > 0) {
    throw new Error(
      `site.config: previewMode is false but sample content remains at ${samples.join(", ")}. ` +
        "Replace it with real, owner-confirmed details or delete it.",
    );
  }
  return config;
}

/** The validated business config. Import this, never the raw config. */
export const site = resolveSite(rawSite);

/** Show "Sample" tags only while previewing. */
export const showSamples = site.previewMode;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || site.seo.siteUrl).replace(
  /\/+$/,
  "",
);

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function usDigits(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 ? `1${digits}` : digits;
}

/** "(512) 555-0142" → "tel:+15125550142" */
export function telHref(phone: string) {
  return `tel:+${usDigits(phone)}`;
}

/** "(512) 555-0142" → "https://wa.me/15125550142" */
export function whatsappHref(phone: string) {
  return `https://wa.me/${usDigits(phone)}`;
}

export function getService(slug: string) {
  return site.services.find((s) => s.slug === slug);
}
