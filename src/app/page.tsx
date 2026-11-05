import { About } from "@/components/sections/about";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
