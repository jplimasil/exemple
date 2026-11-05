import { site } from "@/lib/site";
import { Icon } from "../icon";
import { SectionHeader } from "../ui";

/** A genuine sequence, so numbered steps are appropriate here. */
export function HowItWorks() {
  if (site.process.length === 0) return null;
  return (
    <section aria-labelledby="process-title" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="reveal">
          <SectionHeader
            id="process-title"
            eyebrow="Simple process"
            title="How It Works"
            intro="Booking a professional clean takes just a few minutes."
            align="center"
          />
        </div>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* Connector line on desktop */}
          <span
            aria-hidden="true"
            className="absolute top-14 right-[16%] left-[16%] hidden border-t-2 border-dashed border-line md:block"
          />
          {site.process.map((step, i) => (
            <li
              key={step.title}
              className="reveal group relative rounded-[var(--radius-card)] border border-line bg-white p-8 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lift"
            >
              <span className="relative mx-auto flex size-14 items-center justify-center rounded-2xl bg-navy text-gold">
                <Icon name={step.icon} className="size-7" />
                <span className="absolute -top-2.5 -right-2.5 flex size-7 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-navy-950 ring-4 ring-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy-900">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-slate">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
