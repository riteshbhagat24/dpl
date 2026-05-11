# DPL Butibori — Premium Cricket Tournament Landing Page

Vidarbha's premier tennis-ball cricket league, powered by **TennisCricket.in**.

A next-generation sports entertainment landing page built with cinematic dark
visuals, neon-glow gradients, glassmorphism, parallax scrolling, animated 3D
hero element and motion-driven interactions.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** — design system, tokens, animations
- **Framer Motion** — scroll-triggered, parallax & micro animations
- **GSAP** (available for advanced timelines)
- **Lenis** — buttery smooth scroll
- **Three.js** + **react-three-fiber** + **drei** — floating 3D cricket ball
- **lucide-react** — line icons

## Sections

1. **Hero** — fullscreen stadium scene, 3D cricket ball, animated CTAs
2. **Marquee** — auto-scrolling brand strip
3. **About DPL** — split layout with tilt-on-hover glass cards
4. **TennisCricket.in Network** — animated stat counters + horizontal coverage rail
5. **Cricket Experience** — bento parallax image grid
6. **Sponsors** — futuristic sponsor card grid + CTA
7. **Final CTA** — cinematic stadium glow + dual subscribe buttons
8. **Footer** — channel quick-links, legal

## Getting Started

```bash
# Install
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start
```

## Brand Tokens

| Token       | Value     | Use                        |
|-------------|-----------|----------------------------|
| `bg`        | `#050816` | Page background            |
| `neon`      | `#00BFFF` | Primary glow & accents     |
| `flame`     | `#FF7A00` | Secondary glow & accents   |

Defined in [tailwind.config.ts](tailwind.config.ts) and [app/globals.css](app/globals.css).

## YouTube Channels

- DPL Butibori → https://youtube.com/@dplbutibori
- TennisCricket.in → https://youtube.com/@tenniscricket.in_official

## Notes

- Smooth scroll is enabled via Lenis (`components/SmoothScroll.tsx`).
- The 3D ball is dynamically imported (no SSR) and gracefully falls back.
- Reduced-motion preferences are respected globally.
- Hero stadium imagery uses royalty-free Unsplash sources — swap with brand
  imagery in `Hero.tsx`, `Experience.tsx`, `TennisCricket.tsx`, `FinalCTA.tsx`.
