# Authentication

All authentication in this project is handled exclusively by **Clerk**. No other auth libraries, custom JWT logic, session handling, or authentication mechanisms should ever be used.

---

## Rules

1. **Clerk only.** Never implement custom auth, use NextAuth, or any other auth library.
2. **`/dashboard` is a protected route.** Users must be signed in to access it.
3. **Signed-in users visiting `/` must be redirected to `/dashboard`.**
4. **Sign In and Sign Up must always open as a modal.** Never navigate to a dedicated sign-in/sign-up page directly — the hosted pages at `/sign-in` and `/sign-up` exist only as Clerk fallbacks.

---

## Proxy (Middleware)

The Clerk middleware lives in `proxy.ts` at the project root (Next.js 16 — not `middleware.ts`).

The strategy is **protected-first**: all routes are blocked by default, with specific public routes explicitly allowed. The homepage `/` is public so unauthenticated users can land there; the redirect to `/dashboard` for signed-in users is handled in the page itself (see below).

```ts
// proxy.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
```

---

## Homepage Redirect for Signed-In Users

`app/page.tsx` must redirect authenticated users to `/dashboard`:

```tsx
// app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) redirect("/dashboard");

  // render landing / sign-in prompt for unauthenticated users
}
```

---

## Protected Dashboard Page

`/dashboard` is protected by the proxy — unauthenticated users are automatically redirected to sign-in. The page should also perform a server-side auth check as a safety net:

```tsx
// app/dashboard/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId, isAuthenticated } = await auth();
  if (!isAuthenticated) redirect("/");

  // render dashboard
}
```

---

## Sign In / Sign Up — Always Modal

`<SignInButton>` and `<SignUpButton>` must always use `mode="modal"`. Never use `mode="redirect"` or link directly to `/sign-in` or `/sign-up` in the UI.

```tsx
// Correct — modal only
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal">
  <button>Sign in</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign up</button>
</SignUpButton>
```

```tsx
// WRONG — do not do this
<Link href="/sign-in">Sign in</Link>
<SignInButton mode="redirect">Sign in</SignInButton>
```

The hosted `/sign-in` and `/sign-up` routes exist only as Clerk fallbacks (e.g. for email magic links). Do not link to them in the app UI.

---

## Server-Side Auth

Always `await auth()`. Calling it synchronously returns `undefined`.

```ts
// Server Components, Route Handlers, Server Functions
import { auth } from "@clerk/nextjs/server";

const { userId, isAuthenticated } = await auth();
```

## Client-Side Auth

```tsx
"use client";
import { useUser, useAuth } from "@clerk/nextjs";

const { isLoaded, isSignedIn, user } = useUser();
const { signOut } = useAuth();
```

## Server Function Auth

Always verify authentication at the top of every Server Function before reading input or touching the database:

```ts
"use server";
import { auth } from "@clerk/nextjs/server";

export async function someAction(formData: FormData) {
  const { userId, isAuthenticated } = await auth();
  if (!isAuthenticated) throw new Error("Unauthorized");
  // ...
}
```

---

## ClerkProvider

The root layout (`app/layout.tsx`) wraps the entire app in `<ClerkProvider appearance={{ theme: shadcn }}>`. Do not add another `<ClerkProvider>` anywhere else.

## Show / Hide by Auth State

Use the `<Show>` component from `@clerk/nextjs` to conditionally render UI:

```tsx
import { Show } from "@clerk/nextjs";

<Show when="signed-out">
  {/* Sign in / sign up buttons */}
</Show>
<Show when="signed-in">
  <UserButton />
</Show>
```
