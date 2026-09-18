"use client";

import {
  Calendar,
  ExternalLink,
  MapPin,
  Share2,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FormField, TextInput } from "@/components/shared/FormField";
import { accentStyles } from "@/lib/theme";
import type { GitHubUser } from "@/types/github";
import { cn } from "@/lib/utils";

interface ProfileHeroCardProps {
  user: GitHubUser;
  streak: number;
  shareUrl: string;
}

export function ProfileHeroCard({ user, streak, shareUrl }: ProfileHeroCardProps) {
  const [copied, setCopied] = useState(false);
  const [customStatus, setCustomStatus] = useState("Building open source tools");

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickStats = [
    { label: "Followers", value: user.followers.toLocaleString(), accent: "pink" as const },
    { label: "Following", value: user.following.toLocaleString(), accent: "violet" as const },
    { label: "Repositories", value: user.public_repos.toLocaleString(), accent: "blue" as const },
    { label: "Active Streak", value: `${streak} Days`, accent: "warning" as const },
  ];

  return (
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-30",
          "bg-gradient-to-br from-accent-pink/10 via-accent-violet/10 to-accent-blue/10"
        )}
      />

      <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="relative">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="h-24 w-24 rounded-2xl border-4 border-background object-cover shadow-lg ring-2 ring-accent-violet/30"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {user.name}
              </h1>
              <Badge variant="pink" size="sm">
                @{user.login}
              </Badge>
            </div>

            {user.bio && (
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {user.bio}
              </p>
            )}

            <FormField label="Status" className="max-w-sm border-none p-0">
              <TextInput
                compact
                value={customStatus}
                onChange={(e) => setCustomStatus(e.target.value)}
              />
            </FormField>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-muted-foreground">
              {user.location && (
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className={cn("h-3.5 w-3.5", accentStyles.pink.icon)} />
                  {user.location}
                </span>
              )}
              <span className="flex items-center gap-1 font-medium">
                <Calendar className={cn("h-3.5 w-3.5", accentStyles.violet.icon)} />
                Member since {new Date(user.created_at).getFullYear()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
            <Share2 className="h-3.5 w-3.5" />
            {copied ? "Copied!" : "Share Profile"}
          </Button>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <Button variant="gradient" size="sm" className="gap-2">
              GitHub Profile
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-center sm:grid-cols-4">
        {quickStats.map((stat) => {
          const styles = accentStyles[stat.accent];
          return (
            <div
              key={stat.label}
              className={cn("rounded-2xl border p-3", styles.bg, styles.border)}
            >
              <div className={cn("text-2xl font-bold", styles.text)}>{stat.value}</div>
              <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
