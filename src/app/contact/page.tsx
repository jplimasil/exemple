import { Clock, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { Faq } from "@/components/sections/faq";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceAreas } from "@/components/sections/service-areas";
import { formatHours } from "@/lib/hours";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { site, telHref, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us for a Free Quote",
  description: `Call ${site.business.phone} or message ${site.business.name} for a free, no-obligation cleaning quote in ${site.business.baseLocation}.`,
  path: "/contact",
});

/**
 * Contact options only — no form in this phase. Each card is a direct link
 * (tel:, WhatsApp, mailto:) and appears only when that channel is configured.
 */
export default function ContactPage() {
  const b = site.business;
  const channels = [
    {
      icon: PhoneCall,
      title: "Call us",
      detail: "Talk to us and get a quote over the phone.",
      value: b.phone,
      href: telHref(b.phone),
      action: "Call now",
      primary: true,
    },
    b.whatsapp && {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Send photos of your space for a faster quote.",
      value: b.whatsapp,
      href: whatsappHref(b.whatsapp),
      action: "Open WhatsApp",
      external: true,
    },
    b.email && {
      icon: Mail,
      title: "Email",
      detail: "Tell us about your space and preferred dates.",
      value: b.email,
      href: `mailto:${b.email}?subject=${encodeURIComponent("Free quote request")}`,
      action: "Send an email",
    },
  ].filter(Boolean) as {
    icon: typeof PhoneCall;
    title: string;
    detail: string;
    value: string;
    href: string;
    action: string;
    primary?: boolean;
    external?: boolean;
  }[];

  return (
    <>
      <PageHeader
        title="Get a free cleaning quote"
        intro="Reach out the way that suits you. Tell us about your space and we'll send a clear, no-obligation price."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <section aria-label="Ways to contact us" className="relative z-10 pt-10 pb-16 sm:-mt-14 sm:pt-0 sm:pb-24">
        <div className="container-page">
          <ul className={`grid gap-5 ${channels.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {channels.map((c) => (
              <li key={c.title} className="reveal">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group flex h-full flex-col rounded-[var(--radius-card)] p-7 shadow-lift transition-transform duration-300 hover:-translate-y-1.5 ${
                    c.primary ? "bg-navy text-white" : "bg-white text-navy-900 ring-1 ring-navy-900/5"
                  }`}
                >
                  <span
                    className={`flex size-14 items-center justify-center rounded-2xl ${
                      c.primary ? "bg-gold text-navy-950" : "bg-sky text-navy"
                    }`}
                  >
                    <c.icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="mt-6 text-xl font-bold">{c.title}</span>
                  <span className={`mt-1 ${c.primary ? "text-white/75" : "text-slate"}`}>{c.detail}</span>
                  <span className="mt-4 text-lg font-bold break-all">{c.value}</span>
                  <span
                    className={`btn mt-6 w-full ${c.primary ? "btn-gold" : "btn-ghost-dark group-hover:border-navy"}`}
                  >
                    {c.action}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {b.hours && b.hours.length > 0 && (
            <div className="reveal mt-8 flex flex-col gap-3 rounded-[var(--radius-card)] bg-cloud px-6 py-5 sm:flex-row sm:items-center sm:gap-6">
              <span className="flex items-center gap-2 font-bold text-navy-900">
                <Clock className="size-5 text-gold-deep" aria-hidden="true" />
                Business hours
              </span>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-slate">
                {b.hours.map((h) => (
                  <li key={h.days.join()}>{formatHours(h)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ServiceAreas />
      <Faq />

      <JsonLd data={faqJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
