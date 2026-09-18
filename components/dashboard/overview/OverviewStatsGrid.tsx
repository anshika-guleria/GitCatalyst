import {
  Flame,
  GitCommit,
  GitPullRequest,
  Star,
} from "lucide-react";

import { StatCard } from "@/components/shared/StatCard";
import type { AccentVariant } from "@/lib/theme";

interface OverviewStatsGridProps {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  totalStars: number;
}

export function OverviewStatsGrid({
  totalContributions,
  currentStreak,
  longestStreak,
  totalStars,
}: OverviewStatsGridProps) {
  const stats: {
    title: string;
    value: string;
    change: string;
    icon: React.ElementType;
    accent: AccentVariant;
  }[] = [
    {
      title: "Total Contributions",
      value: totalContributions.toLocaleString(),
      change: "+12.4% this month",
      icon: GitCommit,
      accent: "violet",
    },
    {
      title: "Current Streak",
      value: `${currentStreak} Days`,
      change: `Longest: ${longestStreak} Days`,
      icon: Flame,
      accent: "pink",
    },
    {
      title: "Total Stars Earned",
      value: totalStars.toLocaleString(),
      change: "Across public repositories",
      icon: Star,
      accent: "warning",
    },
    {
      title: "Pull Requests Merged",
      value: "312",
      change: "98.2% merge rate",
      icon: GitPullRequest,
      accent: "success",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
