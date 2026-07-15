# Optimus Defense and Sports Enterprise

Production-oriented lead-generation and portfolio website for `optimusdefense.online`.

## Local setup

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm dev
pnpm build
```

Set `NO_INDEX=true` on preview deployments. The consultation endpoint currently uses a development-safe adapter: it validates requests but does not persist or email their contents. Connect an approved transactional email or database adapter before launch, avoiding free-text logging.

## Business configuration

Edit `app/data.ts` to update the official name, address, verified phone, email, hours, service area and legal notice. Services and portfolio metadata also live there. Prices and turnaround times intentionally remain unpublished until confirmed.

Images are in `public/images`. Originals were not modified. Every image requires an ownership, permission, privacy and compliance review before public launch. Replace the current JPG logo with a clean transparent SVG or PNG when available.

## Consultation form

The form performs client and server validation, includes a honeypot, rejects common sensitive-number patterns and flags clearly disallowed requests. Production work still needs distributed rate limiting and a delivery adapter. Do not log inquiry bodies or send them to analytics.

## Launch checklist

- [ ] Confirm the registered business name and exact public address.
- [ ] Add verified phone numbers, email, hours, social links and appointment policy.
- [ ] Confirm the geographic service area.
- [ ] Confirm licenses, permits, insurance and authority for every advertised service.
- [ ] Have qualified Philippine counsel review services, eligibility language, transport instructions, terms, disclaimers and privacy policy.
- [ ] Review compliance with the Philippine Data Privacy Act.
- [ ] Confirm hosting, email, analytics and future payment-provider policies.
- [ ] Confirm ownership or publication permission for every logo and project image.
- [ ] Inspect every image for serial numbers, personal information, old contact information and security-sensitive details; crop or blur as required.
- [ ] Obtain customer consent for identifiable projects and remove questionable images.
- [ ] Replace placeholder credentials, reviews, prices, timing and warranty claims only with verified information.
- [ ] Verify every service description and all sensitive-service qualifications with company staff and counsel.
- [ ] Connect and test the production inquiry-delivery adapter.
- [ ] Add production-grade distributed rate limiting and spam protection.
- [ ] Set the inquiry-retention period and deletion process.
- [ ] Configure `optimusdefense.online`, HTTPS and production environment values.
- [ ] Verify canonicals, sitemap, robots, redirects and preview `noindex` behavior.
- [ ] Validate LocalBusiness structured data after verified contact details are added.
- [ ] Set up Google Search Console, Bing Webmaster Tools and the Google Business Profile.
- [ ] Test current mobile and desktop browsers.
- [ ] Complete keyboard, screen-reader, contrast and reduced-motion checks.
- [ ] Review Core Web Vitals and optimize large images.
- [ ] Test valid, invalid, duplicate, spam, provider-failure and offline form paths.
- [ ] Confirm analytics receives no inquiry text, item details or eligibility answers.
- [ ] Add uptime and inquiry-failure monitoring.
- [ ] Document backups and rollback.
- [ ] Complete owner, legal, privacy, safety, content and security reviews.
- [ ] Soft-launch to trusted customers before public promotion.

## Important release limitation

This site does not sell regulated products, authorize firearm transport or transfer, accept payment, or provide construction or prohibited-modification instructions. A submitted inquiry is not an appointment, quote, acceptance of work or permission to transport an item.
