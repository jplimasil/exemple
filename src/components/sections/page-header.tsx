import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Photo } from "@/config/types";

interface PageHeaderProps {
  title: string;
  intro?: string;
  crumbs: { href: string; label: string }[];
  image?: Photo;
  children?: React.ReactNode;
}

/** Inner-page banner: navy panel with optional photo, breadcrumb, and H1. */
export function PageHeader({ title, intro, crumbs, image, children }: PageHeaderProps) {
  return (
    <section aria-labelledby="page-title" className="sm:px-3 lg:px-4">
      <div className="relative isolate overflow-hidden bg-navy-900 sm:rounded-[var(--radius-panel)]">
        {image && (
          <>
            <Image
              src={image.src}
              alt=""
              fill
              preload
              placeholder="blur"
              sizes="100vw"
              className="-z-20 object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(6_22_48/0.95)_0%,rgb(6_22_48/0.82)_50%,rgb(6_22_48/0.5)_100%)]"
            />
          </>
        )}
        <div aria-hidden="true" className="absolute -right-16 -bottom-16 -z-10 size-64 rotate-12 rounded-[3rem] bg-navy-700/40" />
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <nav aria-label="Breadcrumb" className="animate-rise">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-white/70">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-4" aria-hidden="true" />}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.href} className="transition-colors hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-gold">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1
            id="page-title"
            className="mt-5 max-w-3xl animate-rise text-[clamp(2.4rem,5.5vw,4rem)] text-white [animation-delay:80ms]"
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl animate-rise text-lg text-white/80 [animation-delay:160ms] sm:text-xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-8 animate-rise [animation-delay:240ms]">{children}</div>}
        </div>
      </div>
    </section>
  );
}
