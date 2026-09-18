"use client";

import { useGitHubUser } from "@/hooks/useGitHubUser";
import { DEFAULT_USERNAME } from "@/lib/github";
import { AchievementGrid } from "@/components/dashboard/profile/AchievementGrid";
import { ProfileHeroCard } from "@/components/dashboard/profile/ProfileHeroCard";
import { RepoShowcaseGrid } from "@/components/dashboard/profile/RepoShowcaseGrid";
import { DashboardSkeleton } from "@/components/shared/DashboardSkeleton";

export default function ProfilePage() {
  const { user, repos, achievements, streak, loading } =
    useGitHubUser(DEFAULT_USERNAME);

  if (loading || !user) {
    return <DashboardSkeleton />;
  }

  const shareUrl = `https://gitcatalyst.vercel.app/profile/${user.login}`;

  return (
    <div className="space-y-8 pb-12">
      <ProfileHeroCard
        user={user}
        streak={streak.currentStreak}
        shareUrl={shareUrl}
      />

      <AchievementGrid achievements={achievements} />
      <RepoShowcaseGrid repos={repos} />
    </div>
  );
}
