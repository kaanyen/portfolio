# Kweku Anyen — portfolio

Personal site in the register of [Brand Appart](https://www.brandappart.com/): Next.js, GSAP, Lenis, cream field, Youth-like display type, stacked scroll on “What I ship.”

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis smooth scroll

Brand Appart’s live site is Next.js + GSAP + Sanity, with Youth and PP Neue Montreal. Those faces are licensed, so this build uses Geist (display and body) and Geist Mono, both loaded as variable fonts through `next/font`.

Work stills in `public/work/` are served through `next/image`. When you add one, add its pixel size and caption to `stills` in `lib/data.ts`. The caption is used as alt text and shown under the image.

Open Graph images use the Geist TTFs in `assets/fonts/` (`next/og` can't read woff2).

## Contact form

The form on `/contact` sends through [Resend](https://resend.com) when `RESEND_API_KEY` is set (see `.env.example`). Without it, the form hands the visitor a pre-filled email in their mail app instead of failing silently.

## Run

```bash
npm install
npm run dev
```

## Content

Copy and case studies come from the 2026 Q3 CV and from GitHub (`kaanyen`, plus read-only access to private repos). Other repositories were not modified. G-Money and Crescendo stills were copied into `public/work/` for this site only.
