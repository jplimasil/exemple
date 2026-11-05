import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { localBusinessJsonLd } from "@/lib/seo";
import { site, siteUrl, telHref } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.seo.defaultTitle, template: site.seo.titleTemplate },
  description: site.seo.description,
  applicationName: site.business.name,
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    siteName: site.business.name,
    locale: site.seo.locale,
    title: site.seo.defaultTitle,
    description: site.seo.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  // Never let a placeholder site into search results.
  robots: site.previewMode ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1f44",
  width: "device-width",
  initialScale: 1,
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  const phoneHref = telHref(site.business.phone);
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-gold px-4 py-2 font-bold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header
          businessName={site.business.name}
          phone={site.business.phone}
          phoneHref={phoneHref}
          nav={NAV}
        />
        <main id="main" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <MobileActionBar phoneHref={phoneHref} />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
