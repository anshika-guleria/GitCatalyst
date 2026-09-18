"use client";

import {
  ArrowLeftRight,
  Crown,
  GitCompare,
  Search,
} from "lucide-react";
import { useState } from "react";

import { PageHeader } from "@/components/shared/PageHeader";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ComparePage() {
  const [user1, setUser1] = useState("anshikaguleria");
  const [user2, setUser2] = useState("torvalds");
  const [comparing, setComparing] = useState(false);

  const handleCompare = () => {
    setComparing(true);
    setTimeout(() => setComparing(false), 500);
  };

  const comparisonMetrics = [
    { label: "Total Stars Earned", val1: 2340, val2: 185000, winner: 2 },
    { label: "Public Repositories", val1: 42, val2: 12, winner: 1 },
    { label: "Contribution Streak", val1: "186 Days", val2: "14 Days", winner: 1 },
    { label: "PR Merge Rate", val1: "98.2%", val2: "94.5%", winner: 1 },
    { label: "Followers Count", val1: 1280, val2: 215000, winner: 2 },
    { label: "Primary Ecosystem", val1: "TypeScript", val2: "C / Kernel", winner: 0 },
    { label: "Account Age", val1: "5 Years", val2: "19 Years", winner: 2 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title="Developer & Repository Comparison"
        description="Compare GitHub users side-by-side on stars, commits, contribution velocity, and ecosystem stats."
        icon={ArrowLeftRight}
        accent="violet"
      />

      <Card className="p-6">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-11">
          <div className="space-y-1.5 md:col-span-5">
            <label className="text-xs font-semibold text-muted-foreground">First Target</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={user1}
                onChange={(e) => setUser1(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-muted/30 pl-9 pr-3 text-xs font-medium text-foreground focus:border-accent-violet focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center md:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-violet/30 bg-accent-violet/10 text-xs font-bold text-accent-violet">
              VS
            </div>
          </div>

          <div className="space-y-1.5 md:col-span-5">
            <label className="text-xs font-semibold text-muted-foreground">Second Target</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={user2}
                onChange={(e) => setUser2(e.target.value)}
                className="h-10 w-full rounded-xl border border-border bg-muted/30 pl-9 pr-3 text-xs font-medium text-foreground focus:border-accent-violet focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <Button
            variant="gradient"
            size="sm"
            onClick={handleCompare}
            disabled={comparing}
            className="gap-2 px-8"
          >
            <GitCompare className="h-4 w-4" />
            Run Head-to-Head Analysis
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CompareUserCard
          username={user1}
          badgeLabel="Target 1"
          badgeVariant="default"
          borderAccent="violet"
          winnerSide={1}
          metrics={comparisonMetrics}
        />
        <CompareUserCard
          username={user2}
          badgeLabel="Target 2"
          badgeVariant="blue"
          borderAccent="blue"
          winnerSide={2}
          metrics={comparisonMetrics}
        />
      </div>
    </div>
  );
}

function CompareUserCard({
  username,
  badgeLabel,
  badgeVariant,
  borderAccent,
  winnerSide,
  metrics,
}: {
  username: string;
  badgeLabel: string;
  badgeVariant: "default" | "blue";
  borderAccent: "violet" | "blue";
  winnerSide: 1 | 2;
  metrics: {
    label: string;
    val1: string | number;
    val2: string | number;
    winner: number;
  }[];
}) {
  const borderClass =
    borderAccent === "violet"
      ? "border-accent-violet/30"
      : "border-accent-blue/30";

  return (
    <Card className={cn("relative overflow-hidden p-6", borderClass)}>
      <div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
        <UserAvatar name={username} size="lg" />
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
            @{username}
            <Badge variant={badgeVariant} size="sm">
              {badgeLabel}
            </Badge>
          </h2>
          <p className="text-xs text-muted-foreground">Comparison target profile</p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        {metrics.map((m) => {
          const isWinner = m.winner === winnerSide;
          const value = winnerSide === 1 ? m.val1 : m.val2;

          return (
            <div
              key={m.label}
              className={cn(
                "flex items-center justify-between rounded-xl border p-3",
                isWinner
                  ? "border-success/30 bg-success/10 font-bold text-foreground"
                  : "border-border/50 bg-muted/20 text-muted-foreground"
              )}
            >
              <span>{m.label}</span>
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                {isWinner && <Crown className="h-3.5 w-3.5 text-warning" />}
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
