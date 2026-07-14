import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Shortener — Shorten, Share & Track",
  description:
    "Turn long URLs into clean short links in seconds. Get real-time click analytics and manage all your links from one dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider appearance={{ theme: shadcn }}>
          <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Link Shortener</span>
            <div className="flex items-center gap-3">
              <Show when="signed-out">
                <SignInButton mode="modal" asChild>
                  <Button variant="outline" className="rounded-full">
                    Sign in
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal" asChild>
                  <Button className="rounded-full">
                    Sign up
                  </Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}