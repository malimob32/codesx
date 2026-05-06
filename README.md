# RIOMO

Premium tattoo eCommerce and artist marketplace built with Next.js, Tailwind, Prisma, and Stripe.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env template:
   ```bash
   cp .env.example .env
   ```
3. Generate prisma client and run migrations:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```

## Current Scope (Phase 1)

- Initial app architecture (App Router + TS)
- Premium animated landing page with Framer Motion + GSAP
- Prisma schema scaffold for users, artists, products, bookings, reviews
- Environment template for auth, stripe, cloudinary

## Planned Next Steps

- NextAuth integration (credentials + Google)
- Shop listing + filtering
- Product details and checkout
- Artist profile, booking calendar, dashboard, admin console
