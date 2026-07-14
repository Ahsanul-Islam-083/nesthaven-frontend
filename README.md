# NestHaven — Frontend

NestHaven is a property rental listing platform where tenants can browse verified rental properties across Dhaka, and property owners can list and manage their own listings. This is the frontend application, built with Next.js and TypeScript.

## Live Links

- **Live Website:** https://nesthaven-pi.vercel.app
- **Frontend Repository:** https://github.com/Ahsanul-Islam-083/nesthaven-frontend
- **Backend Repository:** https://github.com/Ahsanul-Islam-083/nesthaven-backend

## Demo Credentials

- Email: `demo@nesthaven.com`
- Password: `demo123456`

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Better Auth (authentication — email/password and Google OAuth, JWT issuance)
- next-themes (light/dark mode)
- react-hot-toast (notifications)

## Architecture

Authentication is handled by Better Auth inside this Next.js app, connected to MongoDB Atlas, which issues signed JWTs on login. Property data (search, listing, add, delete) is fetched from a separate Express backend, which verifies the JWTs against Better Auth's JWKS endpoint before allowing protected actions.

```
Frontend (Next.js + Better Auth) ──JWT──> Backend (Express API)
        │                                        │
        └──────────────── MongoDB Atlas ─────────┘
```

## Features

- Responsive home page with hero search, category browsing, statistics, testimonials, and call-to-action sections
- Property explore page with search, filtering (type, location, price), sorting, and pagination
- Skeleton loaders while data is fetching
- Public property details page with image gallery, specifications, and related listings
- Email/password authentication with demo login button and Google OAuth
- Protected routes (Add Listing, Manage Listings) that redirect unauthenticated users to login
- Multi-image upload via ImgBB
- Light/dark theme toggle
- Toast notifications and a confirmation modal for deleting listings
- About and Contact pages

## Getting Started Locally

### Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster
- A Google Cloud OAuth client (optional, for Google login)
- An ImgBB API key (for image uploads)
- The backend running locally (see backend README)

### Installation

```bash
git clone https://github.com/Ahsanul-Islam-083/nesthaven-frontend
cd nesthaven-frontend
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_generated_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_IMAGE_UPLOAD_API=your_imgbb_api_key
```

Generate `BETTER_AUTH_SECRET` with:

```bash
openssl rand -base64 32
```

### Run

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Project Structure

```
src/
├── app/
│   ├── properties/       # Explore + property details pages
│   ├── items/add/        # Protected: add listing
│   ├── items/manage/     # Protected: manage listings
│   ├── login/, register/ # Auth pages
│   ├── about/, contact/  # Info pages
│   └── api/auth/         # Better Auth route handler
├── components/           # Reusable UI components
├── lib/                  # Auth client, API helpers, theme provider
├── types/                # Shared TypeScript types
└── proxy.ts              # Route protection middleware
```

## Author

Md. Ahsanul Islam Rifat
- GitHub: [Ahsanul-Islam-083](https://github.com/Ahsanul-Islam-083)
- LinkedIn: [ahsanulislamrifat](https://linkedin.com/in/ahsanulislamrifat)
