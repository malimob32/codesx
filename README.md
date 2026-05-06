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

## Route Access (allow rules)

The app now explicitly allows public access to:
- `/`
- `/shop`
- `/booking`
- `/artists/*`
- `/api/health`

Protected behavior:
- unauthenticated users are redirected to `/` for protected pages
- `/admin/*` requires `ADMIN` role
- `/dashboard/*` requires a signed-in role (`ADMIN`, `ARTIST`, or `USER`)

See `middleware.ts` for the access gate logic.

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
