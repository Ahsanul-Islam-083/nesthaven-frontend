<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# NestHaven Frontend

## Stack
- **Next.js 16.2.10** (App Router) + **React 19.2.4** + **TypeScript 5**
- **Tailwind CSS v4** — uses `@import "tailwindcss"` in CSS (no `@tailwind` directives)
- **better-auth** v1 — MongoDB adapter, JWT plugin, email/password + Google OAuth
- **ESLint 9** — flat config (`eslint.config.mjs`), uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`

## Commands
```
npm run dev      — dev server (localhost:3000)
npm run build    — production build
npm run start    — start production server
npm run lint     — ESLint (flat config)
```
No typecheck or test commands exist. Run `npx tsc --noEmit` manually if needed.

## Required env vars (`.env.local`)
```
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Key architecture
| Path | Purpose |
|------|---------|
| `src/app/` | App Router pages (routes: `/`, `/properties`, `/properties/[id]`, `/login`, `/register`, `/about`, `/contact`, `/items/add`, `/items/manage`) |
| `src/components/` | Shared components: `Navbar`, `Footer`, `PropertyCard`, etc. |
| `src/lib/` | Utilities: `api.ts` (public fetch), `auth.ts` (better-auth server), `auth-client.ts` (better-auth client), `authFetch.ts` (authenticated fetch with JWT) |
| `src/types/` | TypeScript types |
| `src/proxy.ts` | Middleware — protects `/items/add` and `/items/manage` routes |
| `src/app/api/auth/[...all]/` | better-auth API handlers |

## Important quirks
- **`searchParams` is async** — use `const resolved = await searchParams` in page components (Next.js 16)
- **Tailwind v4**: no `tailwind.config.js`, use `@theme` directive in CSS; `@import "tailwindcss"` replaces `@tailwind base/components/utilities`
- **Auth**: `better-auth` session cookie, 7-day expiry. Client-side: `useSession`, `signIn`, `signUp`, `signOut` from `@/lib/auth-client`. Server-side: `auth.api.getSession()` in middleware/proxy.
- **API calls**: Public → `getProperties()`/`getPropertyById()` via `src/lib/api.ts`. Authenticated → `authFetch()` in `src/lib/authFetch.ts`.
- **Image config**: `next.config.ts` allows remote images from any hostname (http + https)
