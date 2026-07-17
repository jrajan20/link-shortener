import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton } from "@clerk/nextjs";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, BarChart3, Zap, Shield, Globe, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "shorten",
    icon: Link2,
    title: "Shorten Any URL",
    description:
      "Paste any long URL and instantly get a short, shareable link. Works with any website.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "Track how many times your links are clicked. Understand your audience and measure reach.",
  },
  {
    id: "redirects",
    icon: Zap,
    title: "Instant Redirects",
    description:
      "Ultra-fast redirects ensure your visitors reach their destination without delay.",
  },
  {
    id: "security",
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your links are protected and always available. Built on modern, resilient infrastructure.",
  },
  {
    id: "share",
    icon: Globe,
    title: "Share Everywhere",
    description:
      "Short links work anywhere — social media, emails, SMS, QR codes, and more.",
  },
  {
    id: "manage",
    icon: Copy,
    title: "Easy Management",
    description:
      "View, copy, and manage all your shortened links from a single, clean dashboard.",
  },
];

export default async function Home() {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) redirect("/dashboard");

  return (
    <main className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Badge variant="secondary" className="text-xs">
          Free to use
        </Badge>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Shorten links. Track clicks.{" "}
          <span className="text-muted-foreground">Share smarter.</span>
        </h1>
        <p className="max-w-lg text-muted-foreground text-lg leading-relaxed">
          Turn long, unwieldy URLs into clean short links in seconds. Get
          real-time click analytics and manage everything from one dashboard.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SignUpButton mode="modal" forceRedirectUrl="/dashboard" asChild>
            <Button size="lg" className="rounded-full px-8">
              Get started for free
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="flex flex-col items-center gap-10 px-6 py-20 bg-muted/40"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
          <p className="max-w-md text-muted-foreground">
            A simple, powerful set of tools to shorten, share, and understand
            your links.
          </p>
        </div>
        <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, icon: Icon, title, description }) => (
            <Card key={id} className="gap-4 py-6">
              <CardHeader className="gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="max-w-md text-3xl font-bold tracking-tight">
          Ready to shorten your first link?
        </h2>
        <p className="max-w-sm text-muted-foreground">
          Create a free account and start shortening links in under a minute.
        </p>
        <SignUpButton mode="modal" asChild>
          <Button size="lg" className="rounded-full px-8">
            Create free account
          </Button>
        </SignUpButton>
      </section>
    </main>
  );
}
