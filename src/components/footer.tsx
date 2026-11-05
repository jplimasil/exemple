import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { site, telHref, whatsappHref } from "@/lib/site";
import { formatHours } from "@/lib/hours";
import { CurrentYear } from "./current-year";
import { Logo } from "./ui";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  const b = site.business;
  const linkClass = "transition-colors hover:text-gold";
  return (
    <footer className="bg-navy-950 pb-24 text-white/75 md:pb-0">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.4fr] lg:gap-10">
        <div>
          <Logo name={b.name} tone="light" />
          <p className="mt-5 max-w-xs">{b.blurb}</p>
          <p className="mt-5 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            Serving {site.serviceAreas.join(", ")}
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-base font-bold tracking-normal text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h2 className="text-base font-bold tracking-normal text-white">Our Services</h2>
          <ul className="mt-4 space-y-2.5">
            {site.services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={linkClass}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold tracking-normal text-white">Contact Info</h2>
          <ul className="mt-4 space-y-3.5">
            <li>
              <a href={telHref(b.phone)} className={`flex items-center gap-3 ${linkClass}`}>
                <PhoneCall className="size-4 text-gold" aria-hidden="true" />
                {b.phone}
              </a>
            </li>
            {b.whatsapp && (
              <li>
                <a
                  href={whatsappHref(b.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${linkClass}`}
                >
                  <MessageCircle className="size-4 text-gold" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            )}
            {b.email && (
              <li>
                <a href={`mailto:${b.email}`} className={`flex items-center gap-3 break-all ${linkClass}`}>
                  <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  {b.email}
                </a>
              </li>
            )}
            {b.hours?.map((h) => (
              <li key={h.days.join()} className="flex items-center gap-3">
                <Clock className="size-4 text-gold" aria-hidden="true" />
                {formatHours(h)}
              </li>
            ))}
            {b.address && (
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 text-gold" aria-hidden="true" />
                <address className="not-italic">
                  {b.address.street}
                  <br />
                  {b.address.city}, {b.address.region} {b.address.postalCode}
                </address>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {b.legalName ?? b.name}. All rights reserved.
          </p>
          <p>{b.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
