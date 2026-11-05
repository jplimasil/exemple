import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { site, telHref } from "@/lib/site";

export function CtaBanner() {
  const { cta, business } = site;
  return (
    <section aria-labelledby="cta-title" className="py-14 sm:py-20">
      <div className="container-page">
        <div className="reveal relative isolate overflow-hidden rounded-[var(--radius-panel)] bg-navy-900">
          <Image
            src={cta.image.src}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="-z-20 object-cover object-[75%_center] opacity-90"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(10_31_68/0.92),rgb(10_31_68/0.85))] md:bg-[linear-gradient(90deg,rgb(10_31_68/0.98)_0%,rgb(10_31_68/0.9)_45%,rgb(10_31_68/0.25)_100%)]"
          />
          <div aria-hidden="true" className="absolute top-0 left-0 h-2 w-40 rounded-br-full bg-gold" />
          <div className="max-w-2xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <h2 id="cta-title" className="text-[clamp(2rem,4.4vw,3.25rem)] text-white">
              {cta.title}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/80">{cta.text}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-gold text-lg">
                Get a Free Quote
              </Link>
              <a href={telHref(business.phone)} className="btn btn-ghost-light text-lg">
                <PhoneCall className="size-5" aria-hidden="true" />
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
