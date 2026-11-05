# Local service website template

A reusable, conversion-focused website for US local service businesses (set up for cleaning companies). Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Lucide icons, and Vercel deployment.

One typed config file drives every page. Placeholder content can't be launched by accident: the build fails while any sample item remains.

**Phase 1 (current): design only, no forms.** Every "Get a Free Quote" button leads to `/contact`, which offers direct contact links (phone, WhatsApp, email) built from the config. Forms will be added in a later phase.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values, see "Environment variables"
npm run dev                  # http://localhost:3000
```

## Architecture

```
src/
  config/
    types.ts          Business config schema (typed, documented)
    site.ts           ← THE file you edit per client (text, services, photos)
  assets/images/      Photos (statically imported → blur placeholder, AVIF/WebP). See CREDITS.md
  lib/
    site.ts           Validates config, launch guard, tel:/WhatsApp/URL helpers
    seo.ts            Per-page metadata, LocalBusiness / FAQ / Breadcrumb JSON-LD
    hours.ts          Opening-hours formatting
  app/
    page.tsx          Home: hero → services → why us → about → how it works → reviews → CTA
    services/         Services index + one static page per service
    about/            About Us
    contact/          Contact options (call / WhatsApp / email), hours, areas, FAQ. No form
    privacy/          Plain-language privacy policy
    sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg, not-found.tsx
  components/
    header.tsx, footer.tsx, mobile-action-bar.tsx, service-card.tsx, ui.tsx, icon.tsx
    sections/         Page sections; each hides itself when its config data is empty
```

**Design tokens** live at the top of `src/app/globals.css` (`@theme`): navy, gold, off-white, slate. To re-brand a client, change the colors there and the font in `src/app/layout.tsx`.

**Motion:** a short load animation in the hero and CSS scroll-driven reveals (`.reveal`) for sections. Neither uses JavaScript, both respect `prefers-reduced-motion`, and browsers without support simply show the content.

**Rendering:** every page is statically prerendered. Unknown service slugs return a real 404.

## Honesty rules (built in)

- **No invented claims.** Credentials, reviews, hero highlights, and FAQs come from the owner only.
- **Sample content is visible.** Items marked `sample: true` show a small dashed "Sample" tag in preview. This covers the hero trust points, the Why Choose Us items, the About text, the testimonials, and the FAQs.
- **Preview mode** (`previewMode: true`) sets `noindex`, disallows crawling in robots.txt, and outputs no structured data.
- **Launch guard.** With `previewMode: false`, the build fails and lists any `sample: true` items still in the config.
- **Empty sections disappear.** With no testimonials, the reviews section isn't rendered, and the same goes for credentials, FAQs, and areas.
- **Structured data uses only filled-in fields.** It never includes review or rating markup. The street address appears only if you add one.
- **No star ratings.** Testimonials never show stars, because a rating must come from the review platform and should never be typed in by hand.

## New client checklist

1. Edit `src/config/site.ts` with details **confirmed by the owner**: name, phone, email, hours, service areas, and services.
2. Replace or delete every `sample: true` item. Keep only the claims the owner can back up, such as "Eco-Friendly Products" or "Satisfaction Guaranteed". Paste testimonials word for word, with permission, and name the source.
3. Swap stock photos for real photos of the client's team when available, then update `CREDITS.md`.
4. Fill in `address` only if the business publishes it (service-area businesses often don't).
5. Add Google Business Profile, Facebook, and Yelp URLs to `sameAs`.
6. Adjust colors in `globals.css` if needed.
7. Set `previewMode: false`, then run `npm run lint && npm run build`.
8. Validate structured data at https://search.google.com/test/rich-results after deploy.

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production origin, e.g. `https://www.client.com`. Used for canonical URLs, the sitemap, and Open Graph. |

There are no secrets in this phase. Security headers (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) are set in `next.config.ts`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project → Import** for the repo. The framework is detected automatically.
3. Add `NEXT_PUBLIC_SITE_URL` for Production.
4. Deploy, add the client's domain under **Settings → Domains**, and update `NEXT_PUBLIC_SITE_URL`.
5. Submit `https://<domain>/sitemap.xml` in Google Search Console.

## Scripts

- `npm run dev`: development server
- `npm run lint`: ESLint
- `npm run build`: production build (also runs the launch guard)
- `npm run start`: serve the production build
