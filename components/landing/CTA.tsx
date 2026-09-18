import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { BrandGlow } from "@/components/shared/BrandGlow";
import { GradientText } from "@/components/shared/GradientText";
import { Button } from "@/components/ui/button";
import { brandGradients } from "@/lib/theme";

export function CTA() {
  return (
    <section className="relative py-10">
      <BrandGlow variant="cta" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-border bg-card/70 p-12 text-center backdrop-blur-xl">
          <div
            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground shadow-lg ${brandGradients.mark}`}
          >
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to elevate your <GradientText>GitHub profile?</GradientText>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Connect your GitHub account, explore detailed analytics, and generate
            beautiful README widgets in just a few clicks.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button variant="gradient" size="lg">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ No credit card required</span>
            <span>✓ GitHub OAuth</span>
            <span>✓ Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
