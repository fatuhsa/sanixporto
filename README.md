# sanixporto

High-energy editorial portfolio for Fatuh Sani Ansori, built with [Astro](https://astro.build), Tailwind CSS, and astro-icon.

Design language: magazine-style single-column layout, condensed ultra-bold display type (Anton), brush accent (Permanent Marker), hard-edged block shadows, and a single signature color (acid yellow) — mobile-first.

## Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `pnpm install`  | Install dependencies                        |
| `pnpm dev`      | Start local dev server at `localhost:4321`  |
| `pnpm build`    | Build the production site to `dist/`        |
| `pnpm preview`  | Preview the production build locally        |

All pages are statically generated. The only client-side JavaScript is the
fullscreen mobile menu overlay and the scroll-reveal observer (disabled
under `prefers-reduced-motion`).