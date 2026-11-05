import { MapPin } from "lucide-react";
import { site, telHref } from "@/lib/site";
import { SectionHeader } from "../ui";

export function ServiceAreas() {
  const { serviceAreas, serviceAreaNote, business } = site;
  if (serviceAreas.length === 0) return null;
  return (
    <section aria-labelledby="areas-title" className="bg-cloud py-16 sm:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="reveal">
          <SectionHeader id="areas-title" eyebrow="Service areas" title="Where We Clean" />
          {serviceAreaNote && (
            <p className="mt-4 text-lg text-slate">
              {serviceAreaNote}{" "}
              <a href={telHref(business.phone)} className="whitespace-nowrap font-bold text-navy-700 underline underline-offset-4">
                {business.phone}
              </a>
            </p>
          )}
        </div>
        <ul className="reveal flex flex-wrap content-start gap-3">
          {serviceAreas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 font-semibold text-navy-900"
            >
              <MapPin className="size-4 text-gold-deep" aria-hidden="true" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
