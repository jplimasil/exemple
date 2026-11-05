import type { SiteConfig } from "./types";
import heroImg from "@/assets/images/hero-office-vacuum.jpg";
import aboutImg from "@/assets/images/about-living-room.jpg";
import ctaImg from "@/assets/images/cta-floor-scrub.jpg";
import residentialImg from "@/assets/images/service-residential.jpg";
import deepImg from "@/assets/images/service-deep.jpg";
import moveImg from "@/assets/images/service-move.jpg";
import officeImg from "@/assets/images/service-office.jpg";
import commercialImg from "@/assets/images/service-commercial.jpg";
import recurringImg from "@/assets/images/service-recurring.jpg";

/**
 * ─── EDIT THIS FILE FOR EACH CLIENT ───────────────────────────────────────
 * Everything below is placeholder content for the template preview.
 * Replace it with details supplied and confirmed by the business owner,
 * replace or delete every item marked `sample: true`, then set
 * `previewMode: false`. The build fails if sample items remain at launch.
 *
 * 555-01xx numbers are reserved for fiction and never ring a real person.
 * Photos: Unsplash License (free for commercial use). See src/assets/images/CREDITS.md.
 */
export const site: SiteConfig = {
  previewMode: true,

  business: {
    name: "Your Cleaning Co.",
    schemaType: "LocalBusiness",
    tagline: "Residential & commercial cleaning",
    blurb:
      "Professional cleaning for homes, offices, and commercial spaces. Clear pricing, careful work, and an easy way to book.",
    phone: "(555) 010-0142",
    whatsapp: "(555) 010-0142",
    email: "hello@example.com",
    baseLocation: "Your City, ST",
    hours: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      { days: ["Saturday"], opens: "09:00", closes: "14:00" },
    ],
    sameAs: [],
  },

  seo: {
    siteUrl: "https://example.com",
    defaultTitle: "House, Office & Commercial Cleaning in Your City | Your Cleaning Co.",
    titleTemplate: "%s | Your Cleaning Co.",
    description:
      "Residential, deep, move-out, office, and commercial cleaning in Your City. Call or message us for a free, no-obligation quote.",
    locale: "en_US",
  },

  hero: {
    eyebrow: "Residential & commercial cleaning in Your City",
    headline: "Spotless spaces, handled by professionals.",
    subheadline:
      "Homes, offices, and commercial spaces cleaned with care and a detailed checklist, on a schedule that works for you.",
    image: {
      src: heroImg,
      alt: "Cleaning professional in yellow gloves vacuuming the carpet of a modern office",
    },
    highlights: [
      {
        icon: "users",
        title: "Reliable Cleaning Professionals",
        detail: "Trained cleaners who show up on time.",
        sample: true,
      },
      {
        icon: "badge",
        title: "Satisfaction Guaranteed",
        detail: "Describe your real re-clean policy.",
        sample: true,
      },
      {
        icon: "calendar",
        title: "Flexible Scheduling",
        detail: "Weekly, biweekly, monthly, or one-time.",
        sample: true,
      },
    ],
  },

  services: [
    {
      slug: "residential-cleaning",
      name: "Residential Cleaning",
      icon: "home",
      image: { src: residentialImg, alt: "Cleaner vacuuming a gray upholstered ottoman" },
      summary: "Thorough cleaning for houses, condos, and apartments so you can come home to a fresh space.",
      description:
        "A complete clean of the rooms you live in every day. Kitchens, bathrooms, bedrooms, and living areas are cleaned with a room-by-room checklist so nothing gets missed.",
      includes: [
        "Kitchen counters, sink, stovetop, and appliance exteriors",
        "Bathrooms: toilet, tub, shower, sink, and mirrors",
        "Dusting of reachable surfaces and furniture",
        "Vacuuming and mopping of all floors",
        "Beds made and trash emptied",
      ],
      idealFor: "Homeowners and renters who want a reliably clean home.",
    },
    {
      slug: "deep-cleaning",
      name: "Deep Cleaning",
      icon: "sparkles",
      image: { src: deepImg, alt: "Gloved hands spraying and wiping a white surface" },
      summary: "A detailed top-to-bottom clean for buildup that everyday cleaning misses.",
      description:
        "A detailed, room-by-room clean that reaches the places routine cleaning skips. Ideal as a first visit, before an event, or as a seasonal reset.",
      includes: [
        "Everything in a residential clean",
        "Baseboards, door frames, and light switches",
        "Inside microwave and oven (on request)",
        "Detailed scrubbing of tile and grout",
        "Window sills, tracks, and blinds",
      ],
      idealFor: "First-time customers and seasonal resets.",
    },
    {
      slug: "move-in-move-out-cleaning",
      name: "Move-In / Move-Out Cleaning",
      icon: "truck",
      image: { src: moveImg, alt: "Bright, empty white kitchen ready for new occupants" },
      summary: "An empty-home clean that gets a property ready for inspection, listing, or move-in day.",
      description:
        "We clean the empty property from cabinets to closets so it's ready for a walkthrough, listing photos, or your first night in.",
      includes: [
        "Inside cabinets, drawers, and closets",
        "Inside refrigerator, oven, and dishwasher",
        "Baseboards, doors, and trim",
        "Bathrooms and kitchen fully detailed",
        "All floors vacuumed and mopped",
      ],
      idealFor: "Tenants, homeowners, landlords, and real estate agents.",
    },
    {
      slug: "office-cleaning",
      name: "Office Cleaning",
      icon: "building",
      image: { src: officeImg, alt: "Gloved hands disinfecting an office desk next to a laptop" },
      summary: "After-hours or weekend cleaning that keeps your workspace clean, healthy, and professional.",
      description:
        "A clean workspace for your team and visitors, scheduled around your hours so work is never interrupted.",
      includes: [
        "Desks, workstations, and common areas",
        "Breakroom and kitchenette",
        "Restrooms cleaned and restocked",
        "Trash and recycling removed",
        "Floors vacuumed and mopped",
      ],
      idealFor: "Small and mid-sized offices, studios, and coworking spaces.",
    },
    {
      slug: "commercial-cleaning",
      name: "Commercial Cleaning",
      icon: "store",
      image: { src: commercialImg, alt: "Professional mopping the floor of a bright commercial corridor" },
      summary: "Dependable cleaning for retail stores, clinics, and commercial properties of any size.",
      description:
        "Cleaning programs for retail, medical offices, showrooms, and shared buildings, built around your foot traffic and operating hours.",
      includes: [
        "Entrances, lobbies, and customer areas",
        "Restrooms and high-touch surfaces",
        "Hard-floor care and carpet vacuuming",
        "Glass doors, displays, and partitions",
        "Custom checklists per site",
      ],
      idealFor: "Retail shops, clinics, showrooms, and property managers.",
    },
    {
      slug: "recurring-cleaning",
      name: "Recurring Cleaning",
      icon: "repeat",
      image: { src: recurringImg, alt: "Person spraying and wiping a modern kitchen sink" },
      summary: "Weekly, biweekly, or monthly visits that keep your space consistently clean.",
      description:
        "A set schedule that keeps your home or office at a steady baseline, so you never have to think about it.",
      includes: [
        "A consistent checklist every visit",
        "Kitchen and bathroom cleaning",
        "Dusting, vacuuming, and mopping",
        "Rotating detail tasks each visit",
        "Easy to reschedule or pause",
      ],
      idealFor: "Busy households and businesses that want a reliable routine.",
    },
  ],

  whyChooseUs: {
    title: "Why choose us?",
    intro: "Quality cleaning with care, consistency, and attention to detail.",
    items: [
      {
        icon: "users",
        title: "Experienced & Trusted Cleaners",
        detail: "Trained professionals who treat your space with respect.",
        sample: true,
      },
      {
        icon: "leaf",
        title: "Eco-Friendly Products",
        detail: "Safer products for your family, pets, and team.",
        sample: true,
      },
      {
        icon: "calendar",
        title: "Flexible Scheduling",
        detail: "Weekdays, weekends, or after hours.",
        sample: true,
      },
      {
        icon: "wallet",
        title: "Affordable Pricing",
        detail: "Clear quotes with no surprise fees.",
        sample: true,
      },
      {
        icon: "badge",
        title: "Satisfaction Guaranteed",
        detail: "Not happy with an area? We'll make it right.",
        sample: true,
      },
    ],
  },

  about: {
    title: "Cleaning done with care and attention to detail",
    paragraphs: [
      "Your Cleaning Co. is a local cleaning company serving homes and businesses across Your City. Replace this paragraph with the company's real story: who founded it, and why.",
      "Describe how the team works, what customers can expect on every visit, and what makes this business different.",
    ],
    points: [
      "Detailed checklist for every room",
      "Consistent, professional team",
      "Easy scheduling and clear communication",
    ],
    image: {
      src: aboutImg,
      alt: "Cleaner mopping the floor of a bright, modern living room",
    },
    sample: true,
  },

  process: [
    {
      icon: "phone",
      title: "Contact Us",
      detail: "Call, text, or email us and tell us about your space.",
    },
    {
      icon: "list",
      title: "Choose Your Service",
      detail: "Pick the service and schedule that fit you. We confirm a clear price.",
    },
    {
      icon: "sparkles",
      title: "Enjoy a Cleaner Space",
      detail: "Our team arrives on time, cleans thoroughly, and you relax.",
    },
  ],

  testimonials: [
    {
      quote:
        "Placeholder review. Paste a real customer review here word for word, with the customer's permission.",
      author: "Customer Name",
      location: "Neighborhood",
      service: "Residential Cleaning",
      source: "Google",
      sample: true,
    },
    {
      quote:
        "Placeholder review. Use reviews from your Google Business Profile, Yelp, or customer emails. Never write or edit them yourself.",
      author: "Customer Name",
      location: "Neighborhood",
      service: "Office Cleaning",
      source: "Google",
      sample: true,
    },
    {
      quote:
        "Placeholder review. Delete this section's samples before launch; it hides itself when there are no reviews.",
      author: "Customer Name",
      location: "Neighborhood",
      service: "Deep Cleaning",
      source: "Yelp",
      sample: true,
    },
  ],

  cta: {
    title: "Ready for a Cleaner, Healthier Space?",
    text: "Tell us about your home or business and get a free, no-obligation quote.",
    image: { src: ctaImg, alt: "Yellow-gloved hand scrubbing a floor with soapy water" },
  },

  serviceAreas: ["Your City", "Neighboring Town", "Another Suburb", "Nearby County"],
  serviceAreaNote: "Not sure if you're in our area? Give us a call.",

  faqs: [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No. Many customers give us a key or door code. Let us know your preference when you book.",
      sample: true,
    },
    {
      question: "Do you bring your own supplies?",
      answer: "Replace this answer with your real policy on supplies and equipment.",
      sample: true,
    },
    {
      question: "How is pricing calculated?",
      answer: "Replace this with how you price: by square footage, number of rooms, or hourly.",
      sample: true,
    },
  ],
};
