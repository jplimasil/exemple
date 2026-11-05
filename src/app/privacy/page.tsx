import { PageHeader } from "@/components/sections/page-header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.business.name} handles information when you visit this website or contact us.`,
  path: "/privacy",
});

/**
 * Plain-language starting point describing what this site actually does today
 * (no forms, no analytics). Update it when forms or tracking are added, and
 * have the business owner review it.
 */
export default function PrivacyPage() {
  const b = site.business;
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/privacy", label: "Privacy Policy" },
        ]}
      />
      <article className="container-page max-w-3xl py-16 sm:py-20">
        <div className="space-y-5 text-lg text-slate [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-navy-900">
          <p>This page explains how {b.name} handles information related to this website.</p>
          <h2>Information we collect</h2>
          <p>
            This website does not use contact forms or advertising trackers. If you call, text, message, or
            email us, we receive the details you choose to share, such as your name, phone number, email
            address, and information about your space.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your details only to respond to you, prepare a quote, and schedule service. We do not sell
            or rent your information.
          </p>
          <h2>Hosting</h2>
          <p>Our hosting provider may keep standard server logs, such as IP addresses, for security and reliability.</p>
          <h2>Your choices</h2>
          <p>
            To ask what we hold about you or to have it deleted, call {b.phone}
            {b.email && <> or email {b.email}</>}.
          </p>
        </div>
      </article>
    </>
  );
}
