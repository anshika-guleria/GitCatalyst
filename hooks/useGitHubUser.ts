"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_USERNAME,
  fetchGitHubUser,
  getMockAchievements,
  getMockCommitActivity,
  getMockLanguageStats,
  getMockRepos,
  getMockStreak,
} from "@/lib/github";
import { Achievement, CommitActivity, ContributionStreak, GitHubRepo, GitHubUser, LanguageStat } from "@/types/github";

export function useGitHubUser(targetUsername: string = DEFAULT_USERNAME) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [activity, setActivity] = useState<CommitActivity[]>([]);
  const [streak, setStreak] = useState<ContributionStreak>(getMockStreak());
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      const userData = await fetchGitHubUser(targetUsername);
      if (isMounted) {
        setUser(userData);
        setRepos(getMockRepos(targetUsername));
        setLanguages(getMockLanguageStats());
        setActivity(getMockCommitActivity());
        setStreak(getMockStreak());
        setAchievements(getMockAchievements());
        setLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [targetUsername]);

  return { user, repos, languages, activity, streak, achievements, loading };
}
