# NextSwift Starter 2026 – SaaS Boilerplate

Modern, production-ready starter kit to launch your SaaS / side project in hours instead of weeks.

**Stack (2026-ready):**

- Next.js 16+ (App Router + Server Actions)
- TypeScript (strict mode)
- Bun (super fast dev & install)
- Tailwind CSS + shadcn/ui (beautiful, customizable components)
- Clerk (authentication – sign-in/up, protected routes, UserButton)
- Supabase (PostgreSQL + RLS – Row Level Security tied to Clerk user ID)
- Stripe (Checkout + webhooks for subscriptions / one-time payments)
- Metadata passing (Clerk user ID in Stripe sessions & webhooks)

### Features Included

- Full authentication flow (sign-in, sign-up, protected dashboard)
- Secure dashboard showing Clerk profile + Supabase data (RLS enforced)
- Stripe subscription/one-time checkout button
- Webhook handler (tested locally with Stripe CLI)
- Responsive, dark-mode friendly UI with shadcn components
- Environment variable setup ready for Clerk, Supabase & Stripe

### Quick Start

1. Install dependencies

   ```bash
   bun install
   ```

2. Copy `.env.example` to `.env.local` and fill in your credentials

   ```bash
   cp .env.example .env.local
   ```

3. Run the dev server

   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Copy `.env.example` to `.env.local` file with:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_PRICE_ID=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tech Stack Details

| Component | Technology               |
| --------- | ------------------------ |
| Framework | Next.js 16+ (App Router) |
| Language  | TypeScript (strict)      |
| Runtime   | Bun                      |
| Styling   | Tailwind CSS + shadcn/ui |
| Auth      | Clerk                    |
| Database  | Supabase (PostgreSQL)    |
| Payments  | Stripe                   |
