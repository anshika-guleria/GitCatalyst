"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { AuthLayout } from "@/components/layout/AuthLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("anshikaguleria");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      router.push("/overview");
    }
  };

  return (
    <AuthLayout footer="© 2026 GitCatalyst Platform.">
      <Card className="relative overflow-hidden border-border/80 p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <Badge variant="default" size="sm" className="uppercase tracking-wider">
            Step {step} of 2
          </Badge>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
            {step === 1 ? "Connect Your GitHub" : "Setup Developer Workspace"}
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            {step === 1
              ? "Authorize GitCatalyst to generate analytics and custom widgets."
              : "Choose your primary handle to customize your dashboard."}
          </p>
        </div>

        {step === 1 ? (
          <div className="space-y-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => setStep(2)}
              className="w-full gap-3 py-6 text-sm font-semibold"
            >
              <FaGithub className="h-5 w-5" />
              Authorize with GitHub
            </Button>

            <div className="mt-6 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" /> Instant commit heatmap tracking
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" /> Exportable SVG README widgets
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" /> Real-time language breakdown
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                GitHub Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. torvalds"
                required
                className="h-10 w-full rounded-xl border border-border bg-muted/30 px-3 text-xs font-medium text-foreground focus:border-accent-violet focus:outline-none"
              />
            </div>

            <Button variant="gradient" type="submit" className="w-full gap-2 py-5">
              Launch Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        )}

        <div className="mt-6 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-accent-violet hover:underline">
            Sign In
          </Link>
        </div>
      </Card>
    </AuthLayout>
  );
}
