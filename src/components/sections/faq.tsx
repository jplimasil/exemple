import { Plus } from "lucide-react";
import { site } from "@/lib/site";
import { SampleTag, SectionHeader } from "../ui";

/** Native <details> gives keyboard + screen reader support with no JS. */
export function Faq() {
  if (site.faqs.length === 0) return null;
  return (
    <section aria-labelledby="faq-title" className="py-16 sm:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="reveal">
          <SectionHeader id="faq-title" eyebrow="FAQ" title="Common Questions" />
        </div>
        <div className="reveal space-y-3">
          {site.faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-line bg-white px-6 transition-colors open:border-navy/20 open:bg-cloud"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-bold text-navy-900 [&::-webkit-details-marker]:hidden">
                <span>
                  {f.question}
                  <SampleTag show={f.sample} />
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky text-navy transition-transform duration-300 group-open:rotate-45 group-open:bg-gold">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-prose pb-6 text-slate">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
