# Kweku Anyen — portfolio

Personal site in the register of [Brand Appart](https://www.brandappart.com/): Next.js, GSAP, Lenis, cream field, Youth-like display type, stacked scroll on “What I ship.”

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis smooth scroll

Brand Appart’s live site is Next.js + GSAP + Sanity, with Youth and PP Neue Montreal. Those faces are licensed, so this build uses Geist (display and body) and Geist Mono, both loaded as variable fonts through `next/font`.

Work stills in `public/work/` are served through `next/image`. When you add one, record its pixel size in `stillSizes` in `lib/data.ts`.

## Run

```bash
npm install
npm run dev
```

## Content

Copy and case studies come from the 2026 Q3 CV and from GitHub (`kaanyen`, plus read-only access to private repos). Other repositories were not modified. G-Money and Crescendo stills were copied into `public/work/` for this site only.
