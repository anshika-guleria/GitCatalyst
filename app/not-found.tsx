import { ArrowLeft, GitBranch, SearchX } from "lucide-react";
import Link from "next/link";

import { BrandGlow } from "@/components/shared/BrandGlow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { brandGradients } from "@/lib/theme";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <BrandGlow variant="hero" />

      <div className="mx-auto max-w-2xl text-center">
        <div
          className={`mx-auto flex h-24 w-24 items-center justify-center rounded-3xl text-primary-foreground shadow-2xl shadow-accent-violet/30 ${brandGradients.mark}`}
        >
          <SearchX className="h-11 w-11" />
        </div>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-accent-violet">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
          Branch not found.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Looks like this page has been deleted, renamed, or never existed.
          Let&apos;s get you back to your dashboard before your commits get lonely.
        </p>

        <Card className="mx-auto mt-12 max-w-lg p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-accent-violet/15 p-3">
              <GitBranch className="h-6 w-6 text-accent-violet" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">git checkout main</h3>
              <p className="text-sm text-muted-foreground">
                Switch back to a valid route.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button variant="gradient" size="lg">
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Button>
          </Link>
          <Link href="/overview">
            <Button variant="outline" size="lg">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
