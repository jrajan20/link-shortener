# Link Shortener

A full-stack URL shortening application with user authentication, built with Next.js 16 and a modern serverless stack.

BUILT COMPLETELY USING GITHUB COPILOT

## Tech Stack

| Layer      | Technology                                                          |
| ---------- | ------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router)                       |
| Language   | TypeScript (strict)                                                 |
| Auth       | [Clerk](https://clerk.com)                                          |
| Database   | [Neon](https://neon.tech) (PostgreSQL)                              |
| ORM        | [Drizzle ORM](https://orm.drizzle.team)                             |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com)                          |
| Components | [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com) |
| Icons      | [Lucide React](https://lucide.dev)                                  |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Neon](https://neon.tech) database
- A [Clerk](https://clerk.com) application

### Environment Variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL=your_neon_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Database Setup

Push the schema to your Neon database:

```bash
npx drizzle-kit push
```

To generate migration files instead:

```bash
npx drizzle-kit generate
```

## Project Structure

```
app/              # Next.js App Router — pages and layouts
components/ui/    # shadcn/ui primitives
db/               # Drizzle schema and client
lib/              # Shared utilities
proxy.ts          # Clerk auth middleware (Next.js 16)
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |
