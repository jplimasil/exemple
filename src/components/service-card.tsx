import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/config/types";
import { Icon } from "./icon";
import { SampleTag } from "./ui";

export function ServiceCard({ service, headingLevel = "h3" }: { service: Service; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-card ring-1 ring-navy-900/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/10]">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-6 pt-9">
        <span className="absolute -top-7 left-6 flex size-14 items-center justify-center rounded-2xl bg-navy text-gold shadow-card ring-4 ring-white transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-950">
          <Icon name={service.icon} className="size-7" />
        </span>
        <Heading className="text-xl font-bold tracking-tight text-navy-900">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
            {service.name}
          </Link>
          <SampleTag show={service.sample} />
        </Heading>
        <p className="mt-2 flex-1 text-slate">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-navy-700">
          Learn more
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  );
}
