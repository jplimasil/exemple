import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/services", "/about", "/contact", "/privacy"];
  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/privacy" ? 0.2 : 0.8,
    })),
    ...site.services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
