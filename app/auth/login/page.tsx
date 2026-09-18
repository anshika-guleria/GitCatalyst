"use client";

import { ArrowRight, CheckCircle2, Key, ShieldCheck, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"oauth" | "pat">("oauth");
  const [patInput, setPatInput] = useState("");

  const handleGuestLogin = () => {
    router.push("/overview");
  };

  const handlePatLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/overview");
  };

  return (
    <AuthLayout>
      <Card className="relative overflow-hidden border-border/80 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Sign in to GitCatalyst
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Access your GitHub profile analytics, contribution insights, and README widgets.
          </p>
        </div>

        <div className="mb-6 flex rounded-xl bg-muted/60 p-1 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("oauth")}
            className={`flex-1 rounded-lg py-2 transition-all ${
              activeTab === "oauth"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            GitHub OAuth
          </button>
          <button
            onClick={() => setActiveTab("pat")}
            className={`flex-1 rounded-lg py-2 transition-all ${
              activeTab === "pat"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Access Token (PAT)
          </button>
        </div>

        {activeTab === "oauth" ? (
          <div className="space-y-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={handleGuestLogin}
              className="w-full gap-3 py-6 text-sm font-semibold"
            >
              <FaGithub className="h-5 w-5" />
              Continue with GitHub
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                <span className="bg-card px-3 font-semibold text-muted-foreground">
                  Or Explore
                </span>
              </div>
            </div>

            <Button variant="outline" onClick={handleGuestLogin} className="w-full gap-2 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
              Enter Demo Guest Mode
              <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </Button>
          </div>
        ) : (
          <form onSubmit={handlePatLogin} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                Personal Access Token (classic or fine-grained)
              </label>
              <input
                type="password"
                value={patInput}
                onChange={(e) => setPatInput(e.target.value)}
                placeholder="ghp_************************************"
                required
                className="h-10 w-full rounded-xl border border-border bg-muted/30 px-3 font-mono text-xs text-foreground focus:border-accent-violet focus:outline-none"
              />
            </div>
            <Button variant="gradient" type="submit" className="w-full gap-2">
              <Key className="h-4 w-4" />
              Authenticate with PAT
            </Button>
          </form>
        )}

        <div className="mt-8 space-y-2 border-t border-border/60 pt-6 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" />
            No write permissions required
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-blue" />
            100% Client-side token storage
          </div>
        </div>
      </Card>
    </AuthLayout>
  );
}
