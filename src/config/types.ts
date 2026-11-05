import type { StaticImageData } from "next/image";

/**
 * Types for the single business config that drives every page.
 *
 * Honesty rule: anything that is a claim about the business (guarantees,
 * reviews, products used, experience, address) must come from the owner.
 * Items marked `sample: true` are preview-only filler: they render with a
 * small "Sample" tag while `previewMode` is on, and the build refuses to run
 * with `previewMode: false` while any sample item remains.
 */

export type IconName =
  | "home"
  | "sparkles"
  | "truck"
  | "building"
  | "store"
  | "repeat"
  | "shield"
  | "badge"
  | "clock"
  | "leaf"
  | "users"
  | "calendar"
  | "wallet"
  | "phone"
  | "list"
  | "check";

export interface Sampleable {
  /** Preview-only placeholder. Must be replaced or removed before launch. */
  sample?: boolean;
}

export interface Photo {
  src: StaticImageData;
  alt: string;
}

export interface Service extends Sampleable {
  slug: string;
  name: string;
  icon: IconName;
  image: Photo;
  /** One sentence for cards and meta descriptions (≤ 155 chars). */
  summary: string;
  /** Intro paragraph for the service page. */
  description: string;
  /** What the visit covers. Plain, checkable items. */
  includes: string[];
  idealFor?: string;
}

export interface Feature extends Sampleable {
  icon: IconName;
  title: string;
  detail: string;
}

export interface Testimonial extends Sampleable {
  quote: string;
  author: string;
  location?: string;
  service?: string;
  /** Where the review was originally posted, e.g. "Google". */
  source?: string;
}

export interface Faq extends Sampleable {
  question: string;
  answer: string;
}

export interface PostalAddress {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface OpeningHours {
  /** schema.org day names, e.g. ["Monday","Tuesday"] */
  days: string[];
  opens: string; // "08:00"
  closes: string; // "18:00"
}

export interface SiteConfig {
  /**
   * true while the site still contains placeholder business details.
   * Preview mode shows sample tags, adds `noindex`, and omits structured data.
   */
  previewMode: boolean;

  business: {
    name: string;
    legalName?: string;
    /** schema.org type for JSON-LD. "LocalBusiness" is a safe default. */
    schemaType: string;
    tagline: string;
    /** Short paragraph used in the footer. */
    blurb: string;
    /** Display format, e.g. "(512) 555-0142" */
    phone: string;
    /** WhatsApp number in display format. Omit if the business doesn't use it. */
    whatsapp?: string;
    email?: string;
    /** Only fill in if the address is public. */
    address?: PostalAddress;
    /** Public city/state, e.g. "Austin, TX". */
    baseLocation: string;
    hours?: OpeningHours[];
    /** Profiles you control: Google Business Profile, Facebook, Yelp… */
    sameAs?: string[];
    foundedYear?: number;
    priceRange?: string;
  };

  seo: {
    /** Production origin without trailing slash. Overridden by NEXT_PUBLIC_SITE_URL. */
    siteUrl: string;
    defaultTitle: string;
    titleTemplate: string; // must contain %s
    description: string;
    locale: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    image: Photo;
    /** Short trust points under the hero. Owner-confirmed only. */
    highlights: Feature[];
  };

  services: Service[];
  whyChooseUs: { title: string; intro: string; items: Feature[] };

  about: Sampleable & {
    title: string;
    paragraphs: string[];
    points: string[];
    image: Photo;
  };

  process: { icon: IconName; title: string; detail: string }[];
  testimonials: Testimonial[];

  cta: { title: string; text: string; image: Photo };

  serviceAreas: string[];
  serviceAreaNote?: string;
  faqs: Faq[];
}
