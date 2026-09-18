"use client";

import { useGitHubUser } from "@/hooks/useGitHubUser";
import { DEFAULT_USERNAME } from "@/lib/github";
import { DashboardSkeleton } from "@/components/shared/DashboardSkeleton";
import { OverviewHeader } from "@/components/dashboard/overview/OverviewHeader";
import { OverviewStatsGrid } from "@/components/dashboard/overview/OverviewStatsGrid";
import { ContributionVelocityChart } from "@/components/dashboard/overview/ContributionVelocityChart";
import { LanguageBreakdownChart } from "@/components/dashboard/overview/LanguageBreakdownChart";
import { RepositoryTable } from "@/components/dashboard/overview/RepositoryTable";

export default function OverviewPage() {
  const { user, repos, languages, activity, streak, loading } =
    useGitHubUser(DEFAULT_USERNAME);

  if (loading || !user) {
    return <DashboardSkeleton />;
  }

  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);

  return (
    <div className="space-y-8 pb-12">
      <OverviewHeader
        userName={user.name}
        userLogin={user.login}
        githubUrl={user.html_url}
      />

      <OverviewStatsGrid
        totalContributions={streak.totalContributions}
        currentStreak={streak.currentStreak}
        longestStreak={streak.longestStreak}
        totalStars={totalStars}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ContributionVelocityChart data={activity} />
        <LanguageBreakdownChart languages={languages} />
      </div>

      <RepositoryTable repos={repos} />
    </div>
  );
}
