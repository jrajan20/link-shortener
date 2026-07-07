<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Agent Coding Standards

**CRITICAL IMPORTANCE:** You MUST read the relevant documentation files **before** generating any code in that domain. Do not rely on your training data for this project. All docs are in the `/docs` directory. ALWAYS use the `read_file` tool to read the relevant `.md` file BEFORE generating any code. Failure to do so will result in incorrect implementations.

| Domain                                                          | File                                 | When to Read                                       |
| --------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| Project overview, stack, structure                              | [docs/overview.md](docs/overview.md) | Always — read first                                |
| Next.js 16 conventions (App Router, proxy.ts, Server Functions) | [docs/nextjs.md](docs/nextjs.md)     | Any Next.js file                                   |
| Clerk auth — only auth method, modal sign-in, route protection  | [docs/auth.md](docs/auth.md)         | Any auth, user, protected route, or redirect logic |
| Drizzle ORM + Neon database                                     | [docs/database.md](docs/database.md) | Any DB query or schema change                      |
| Tailwind v4 + shadcn/ui + Base UI                               | [docs/styling.md](docs/styling.md)   | Any UI or styling work                             |
| UI components — shadcn/ui only, no custom primitives            | [docs/ui.md](docs/ui.md)             | Any time you create or modify a UI component       |
