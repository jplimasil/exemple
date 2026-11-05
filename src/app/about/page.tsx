import { JsonLd } from "@/components/json-ld";
import { About } from "@/components/sections/about";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceAreas } from "@/components/sections/service-areas";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us",
  description: `Meet ${site.business.name}, a professional cleaning company serving homes and businesses in ${site.business.baseLocation}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${site.business.name}`}
        intro="Professional cleaning for homes and businesses, done with care and attention to detail."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
        ]}
      />
      <About showLink={false} />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceAreas />
      <CtaBanner />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
    </>
  );
}
