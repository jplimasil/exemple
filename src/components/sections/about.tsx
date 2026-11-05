import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { SampleTag } from "../ui";

export function About({ headingLevel = "h2", showLink = true }: { headingLevel?: "h1" | "h2"; showLink?: boolean }) {
  const { about } = site;
  const Heading = headingLevel;
  return (
    <section aria-labelledby="about-title" className="bg-cloud py-16 sm:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photo with geometric blocks */}
        <div className="reveal relative mx-auto w-full max-w-xl pr-6 pb-6 sm:pr-10 sm:pb-10">
          <div aria-hidden="true" className="absolute right-0 bottom-0 h-3/4 w-3/4 rounded-[var(--radius-panel)] bg-navy" />
          <div aria-hidden="true" className="absolute -top-5 -left-5 size-24 rounded-3xl bg-gold sm:size-28" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] shadow-lift sm:aspect-[5/6]">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-[60%_center]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute right-2 bottom-14 hidden grid-cols-5 gap-2 sm:grid"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="size-1.5 rounded-full bg-white/70" />
            ))}
          </div>
        </div>

        <div className="reveal">
          <p className="eyebrow">About us</p>
          <Heading id="about-title" className="mt-3 text-[clamp(2rem,4.2vw,3rem)] text-navy-900">
            {about.title}
            <SampleTag show={about.sample} />
          </Heading>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-5 text-lg text-slate">
              {p}
            </p>
          ))}
          <ul className="mt-8 space-y-3.5">
            {about.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-semibold text-navy-900">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-gold text-navy-950">
                  <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          {showLink && (
            <Link href="/about" className="btn btn-navy mt-10">
              Know About Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
