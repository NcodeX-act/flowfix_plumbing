# FlowFix Plumbing — Landing Page

A premium, Stripe-quality landing page for a plumbing service business, built with React + TypeScript + Vite + Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Before running: add the font files

This project expects **TT Norms Pro** at:

```
public/fonts/tt-norms-pro-regular.woff2   (weight 400)
public/fonts/tt-norms-pro-semibold.woff2  (weight 600)
```

TT Norms Pro is a commercial typeface — license and add your own `.woff2` files at those paths. Until then, the browser will silently fall back to the system sans-serif stack defined in `src/index.css`, so the page still renders correctly, just in a different font.

## Structure

- `src/App.tsx` — composes the page: Navbar + Hero (in a `h-screen` wrapper), then Info, Backed By, and Use Cases sections, in that order.
- `src/components/Navbar.tsx` — transparent, absolute-positioned nav with logo, links, and the "Book Service" CTA.
- `src/components/HeroSection.tsx` — full-bleed background video, headline, "Schedule Visit" CTA, and the trust-indicator marquee.
- `src/components/InfoSection.tsx` — "Meet FlowFix." intro plus the 4-column service-highlight card grid.
- `src/components/BackedBySection.tsx` — scrolling marquee of trust/credibility stats.
- `src/components/UseCasesSection.tsx` — "How We Help" with a service-tag grid and a video-backed Residential Plumbing feature panel.
- `src/components/LogoIcon.tsx` — the custom wordmark glyph (a droplet/wrench fusion).

## Notes on media

- Hero and use-cases background videos are sourced from Pexels (free-to-use stock footage of real plumbing repair work) and are loaded directly from Pexels' CDN. For production, download and self-host these (or your own footage) for reliability and licensing peace of mind.
- The Info section's large card uses a Pexels stock photo via direct CDN URL for the same reason — swap in your own brand photography when ready.

## Customizing

- **Colors**: page background is `#F5F5F5`; dark accent cards/panels use `#0F2B3D` (deep marine teal, evoking water/pipework). Adjust in `tailwind.config.js` under `theme.extend.colors.flow` and in the component files.
- **Copy**: all headline, body, and nav copy lives directly in the component JSX — no CMS or content layer, so it's a straightforward find-and-replace.
