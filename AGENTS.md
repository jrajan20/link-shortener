<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Agent Coding Standards

Read the relevant docs file **before** writing any code in that domain. All docs are in the `/docs` directory. ALWAYS refer to the relevant .md file BEFORE generating any code.

| Domain                                                          | File                                 | When to Read                       |
| --------------------------------------------------------------- | ------------------------------------ | ---------------------------------- |
| Project overview, stack, structure                              | [docs/overview.md](docs/overview.md) | Always — read first                |
| Next.js 16 conventions (App Router, proxy.ts, Server Functions) | [docs/nextjs.md](docs/nextjs.md)     | Any Next.js file                   |
| Clerk auth patterns                                             | [docs/auth.md](docs/auth.md)         | Any auth, user, or protected route |
| Drizzle ORM + Neon database                                     | [docs/database.md](docs/database.md) | Any DB query or schema change      |
| Tailwind v4 + shadcn/ui + Base UI                               | [docs/styling.md](docs/styling.md)   | Any UI or styling work             |
