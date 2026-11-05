import { site } from "@/lib/site";
import { Icon } from "../icon";
import { SampleTag, SectionHeader } from "../ui";

export function WhyChooseUs() {
  const { title, intro, items } = site.whyChooseUs;
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="why-title" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="reveal">
          <SectionHeader id="why-title" eyebrow="Our difference" title={title} intro={intro} align="center" />
        </div>
        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <li key={item.title} className="reveal group text-center">
              <span className="relative mx-auto flex size-20 items-center justify-center rounded-full border border-line bg-white text-navy shadow-card transition-[transform,background-color,color] duration-300 group-hover:-translate-y-1 group-hover:bg-navy group-hover:text-gold">
                <Icon name={item.icon} className="size-8" />
                <span aria-hidden="true" className="absolute -right-0.5 -bottom-0.5 size-5 rounded-full border-4 border-white bg-gold" />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-navy-900">
                {item.title}
                <SampleTag show={item.sample} />
              </h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-[0.9375rem] text-slate">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
