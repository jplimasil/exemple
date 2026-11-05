import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { site, telHref } from "@/lib/site";
import { Icon } from "../icon";
import { SampleTag } from "../ui";

export function Hero() {
  const { hero, business } = site;
  return (
    <section aria-labelledby="hero-title" className="relative pb-10 sm:px-3 lg:px-4">
      {/* Photo panel */}
      <div className="relative isolate overflow-hidden bg-navy-950 sm:rounded-[var(--radius-panel)]">
        {/* On large screens the photo fills the right ~72% so the subject sits beside the text. */}
        <div className="absolute inset-y-0 right-0 left-0 -z-20 lg:left-[28%]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1024px) 72vw, 100vw"
            className="object-cover object-[62%_22%]"
          />
        </div>
        {/* Navy wash keeps text legible over any photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(6_22_48/0.5)_0%,rgb(6_22_48/0.82)_65%,rgb(6_22_48/0.92)_100%)] lg:bg-[linear-gradient(90deg,rgb(6_22_48/1)_0%,rgb(6_22_48/1)_28%,rgb(6_22_48/0.7)_44%,rgb(6_22_48/0.1)_68%,rgb(6_22_48/0)_100%)]"
        />

        <div className="container-page grid min-h-[34rem] items-center gap-10 pt-16 pb-28 sm:pb-32 lg:min-h-[44rem] lg:grid-cols-[1.25fr_0.75fr] lg:pt-20 lg:pb-40">
          <div className="max-w-[40rem] text-white">
            <p className="inline-flex animate-rise items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-6 animate-rise text-[clamp(2.6rem,6.4vw,4.6rem)] leading-[1.04] [animation-delay:80ms]"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-[34rem] animate-rise text-lg text-white/80 [animation-delay:160ms] sm:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              <Link href="/contact" className="btn btn-gold text-lg">
                Get a Free Quote
              </Link>
              <a href={telHref(business.phone)} className="btn btn-ghost-light text-lg">
                <PhoneCall className="size-5" aria-hidden="true" />
                {business.phone}
              </a>
            </div>
          </div>

          {/* Outlined glass panel (desktop): a quiet second entry point */}
          <div className="hidden animate-rise self-end justify-self-end [animation-delay:320ms] lg:block">
            <div className="w-[21rem] rounded-[1.5rem] border border-gold/70 bg-navy-950/35 p-7 text-white backdrop-blur-md">
              <p className="text-xl font-bold">Free estimate, no obligation</p>
              <p className="mt-2 text-white/75">
                Tell us about your space and get a clear price before we start.
              </p>
              <Link href="/contact" className="btn btn-gold mt-6 w-full">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip overlapping the photo edge */}
      {hero.highlights.length > 0 && (
        <div className="container-page relative -mt-16 sm:-mt-20">
          <ul className="grid animate-rise gap-px overflow-hidden rounded-[var(--radius-card)] bg-line shadow-lift [animation-delay:380ms] lg:grid-cols-3">
            {hero.highlights.map((h) => (
              <li key={h.title} className="flex items-center gap-4 bg-white p-5 sm:p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-navy">
                  <Icon name={h.icon} className="size-6" />
                </span>
                <span>
                  <span className="block font-bold leading-snug text-navy-900">
                    {h.title}
                    <SampleTag show={h.sample} />
                  </span>
                  <span className="block text-[0.9375rem] text-slate">{h.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
