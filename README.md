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

## Live Deployment (GitHub + Vercel)

1. Create a GitHub repo and add it as remote:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin <branch-name>
   ```
2. Import the repo into Vercel.
3. Add env vars from `.env.example` in Vercel project settings.
4. Configure a managed Postgres database and set `DATABASE_URL`.
5. Redeploy and verify:
   - `/` landing page
   - `/shop`
   - `/artists/featured-artist`
   - `/api/health`

## Current Scope

- App Router + TypeScript + Tailwind baseline
- Premium animated landing page (Framer Motion + GSAP)
- Core route scaffolding: shop, artist profile, booking, cart, user dashboard, admin dashboard
- Prisma schema scaffold for users, artists, products, bookings, reviews
- Zustand cart store scaffold + API health route
- Environment template for auth, Stripe, Cloudinary

## Troubleshooting: `npm install` blocked (403)

If install fails with `403 Forbidden`:

1. Validate npm registry:
   ```bash
   npm config get registry
   ```
2. Check if proxy env vars are forcing a restricted gateway:
   ```bash
   env | grep -Ei 'npm|proxy'
   ```
3. Retry install without proxy variables for this command:
   ```bash
   env -u HTTP_PROXY -u HTTPS_PROXY -u http_proxy -u https_proxy -u npm_config_http_proxy -u npm_config_https_proxy npm install
   ```
4. If still blocked, your organization registry policy must allow requested packages (e.g. `@prisma/client`) or provide an approved internal mirror.
