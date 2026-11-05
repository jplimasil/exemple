import { Quote } from "lucide-react";
import { site } from "@/lib/site";
import { SampleTag, SectionHeader } from "../ui";

/**
 * Real, verbatim customer reviews only. No star ratings are rendered:
 * ratings must come from the review source, never be typed in.
 * The section is omitted when there are no testimonials.
 */
export function Testimonials() {
  const { testimonials } = site;
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="reviews-title" className="bg-cloud py-16 sm:py-24">
      <div className="container-page">
        <div className="reveal">
          <SectionHeader
            id="reviews-title"
            eyebrow="Testimonials"
            title="What Our Clients Say"
            align="center"
          />
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const initials = t.author
              .split(/\s+/)
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
            return (
              <li key={i} className="reveal">
                <figure className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-card ring-1 ring-navy-900/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-start justify-between gap-4">
                    <Quote className="size-9 fill-gold text-gold" aria-hidden="true" />
                    <SampleTag show={t.sample} />
                  </div>
                  <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-navy-900">
                    <p>{t.quote}</p>
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                    <span
                      aria-hidden="true"
                      className="flex size-11 items-center justify-center rounded-full bg-navy font-bold text-white"
                    >
                      {initials}
                    </span>
                    <span className="leading-tight">
                      <span className="block font-bold text-navy-900">{t.author}</span>
                      <span className="block text-sm text-slate">
                        {[t.location, t.service].filter(Boolean).join(" · ")}
                      </span>
                      {t.source && <span className="block text-xs text-slate">Review on {t.source}</span>}
                    </span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
