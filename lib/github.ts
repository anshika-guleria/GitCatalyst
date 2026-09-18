import {
  Achievement,
  CommitActivity,
  ContributionStreak,
  GitHubRepo,
  GitHubUser,
  LanguageStat,
  SkillRadarMetric,
} from "@/types/github";
import { brandColors, chartPalette } from "@/lib/theme";

export const DEFAULT_USERNAME = "anshikaguleria";

// Mock Fallback Data generator for rich offline / demo experience
export function getMockUser(username: string = DEFAULT_USERNAME): GitHubUser {
  const isDefault = username.toLowerCase() === DEFAULT_USERNAME.toLowerCase() || username.toLowerCase() === "anshika";
  return {
    login: username,
    name: isDefault ? "Anshika Guleria ✨" : `${username.charAt(0).toUpperCase() + username.slice(1)}`,
    avatar_url: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=180&auto=format&fit=crop&q=80`,
    html_url: `https://github.com/${username}`,
    bio: isDefault
      ? "Crafting elegant open-source tools & cute UI dashboards 🌸 | Coffee to Code ☕"
      : `Open source developer building high-performance web systems with passion 💖`,
    company: "@GitCatalyst ✨",
    location: "San Francisco, CA 🌿",
    blog: "https://gitcatalyst.app",
    twitter_username: username,
    public_repos: 42,
    public_gists: 14,
    followers: 1280,
    following: 340,
    created_at: "2021-03-15T10:00:00Z",
    statusBadge: "Coding with 💖 & Matcha",
    moodEmoji: "✨",
  };
}

export function getMockRepos(username: string = DEFAULT_USERNAME): GitHubRepo[] {
  return [
    {
      id: 101,
      name: "git-catalyst",
      full_name: `${username}/git-catalyst`,
      description: "Modern GitHub analytics platform & cute customizable README cards generator 💖",
      html_url: `https://github.com/${username}/git-catalyst`,
      stargazers_count: 2340,
      forks_count: 312,
      open_issues_count: 8,
      language: "TypeScript",
      updated_at: new Date(Date.now() - 3600000 * 4).toISOString(),
      topics: ["github-api", "analytics", "readme-widgets", "nextjs", "tailwindcss", "kawaii-ui"],
      fork: false,
      size: 4200,
    },
    {
      id: 102,
      name: "pastel-ui-kit",
      full_name: `${username}/pastel-ui-kit`,
      description: "Charming, accessible React 19 UI component library with pastel aesthetic ✨",
      html_url: `https://github.com/${username}/pastel-ui-kit`,
      stargazers_count: 1890,
      forks_count: 145,
      open_issues_count: 3,
      language: "TypeScript",
      updated_at: new Date(Date.now() - 3600000 * 28).toISOString(),
      topics: ["react", "components", "accessibility", "pastel-theme"],
      fork: false,
      size: 8900,
    },
    {
      id: 103,
      name: "fast-kv-store",
      full_name: `${username}/fast-kv-store`,
      description: "Embedded zero-dependency distributed key-value storage engine written in Rust 🦀",
      html_url: `https://github.com/${username}/fast-kv-store`,
      stargazers_count: 940,
      forks_count: 87,
      open_issues_count: 2,
      language: "Rust",
      updated_at: new Date(Date.now() - 3600000 * 72).toISOString(),
      topics: ["rust", "database", "kv-store", "storage"],
      fork: false,
      size: 15400,
    },
    {
      id: 104,
      name: "dev-insights-cli",
      full_name: `${username}/dev-insights-cli`,
      description: "CLI utility for extracting developer productivity velocity and git commit metrics 🚀",
      html_url: `https://github.com/${username}/dev-insights-cli`,
      stargazers_count: 512,
      forks_count: 42,
      open_issues_count: 1,
      language: "Go",
      updated_at: new Date(Date.now() - 3600000 * 120).toISOString(),
      topics: ["cli", "go", "git", "metrics"],
      fork: false,
      size: 2300,
    },
  ];
}

export function getMockLanguageStats(): LanguageStat[] {
  return [
    { name: "TypeScript", bytes: 485000, percentage: 48.5, color: chartPalette[0] },
    { name: "CSS / Styled", bytes: 240000, percentage: 24.0, color: chartPalette[1] },
    { name: "Rust", bytes: 145000, percentage: 14.5, color: brandColors.warning },
    { name: "Go", bytes: 85000, percentage: 8.5, color: chartPalette[3] },
    { name: "Python", bytes: 45000, percentage: 4.5, color: chartPalette[4] },
  ];
}

export function getMockCommitActivity(): CommitActivity[] {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((day, idx) => ({
    day,
    date: `2026-07-${20 + idx}`,
    commits: [32, 48, 64, 42, 85, 92, 54][idx],
    prs: [3, 5, 2, 8, 6, 4, 2][idx],
    issues: [1, 3, 0, 2, 4, 1, 0][idx],
  }));
}

export function getMockStreak(): ContributionStreak {
  return {
    currentStreak: 186,
    longestStreak: 214,
    totalContributions: 2480,
    streakStart: "2026-01-28",
    streakEnd: "2026-08-03",
  };
}

export function getMockAchievements(): Achievement[] {
  return [
    {
      id: "1",
      title: "Streak Titan 🔥",
      description: "Maintained an active GitHub contribution streak for over 100 consecutive days.",
      iconName: "Flame",
      unlocked: true,
      progress: 100,
      tier: "kawaii",
      cuteTag: "Level MAX ⭐",
    },
    {
      id: "2",
      title: "Polyglot Wizard 🌸",
      description: "Authored production code in 5+ distinct programming languages.",
      iconName: "Code2",
      unlocked: true,
      progress: 100,
      tier: "kawaii",
      cuteTag: "Mastery ✨",
    },
    {
      id: "3",
      title: "Star Magnet 🌟",
      description: "Accumulated over 2,300 total stargazers across public open-source repos.",
      iconName: "Star",
      unlocked: true,
      progress: 85,
      tier: "gold",
      cuteTag: "Superstar 💖",
    },
    {
      id: "4",
      title: "PR Machine 🚀",
      description: "Merged more than 300 pull requests with 98% review approval rate.",
      iconName: "GitPullRequest",
      unlocked: true,
      progress: 95,
      tier: "platinum",
      cuteTag: "Speedy ⚡",
    },
  ];
}

export function getMockRadarSkills(): SkillRadarMetric[] {
  return [
    { subject: "Code Velocity", score: 92, fullMark: 100, description: "Daily commit & lines written rate" },
    { subject: "PR Reviews", score: 88, fullMark: 100, description: "Community code review turnaround time" },
    { subject: "Issue Resolution", score: 95, fullMark: 100, description: "Closed vs open issue ratio" },
    { subject: "Star Magnetism", score: 82, fullMark: 100, description: "Repository star growth momentum" },
    { subject: "Ecosystem Range", score: 90, fullMark: 100, description: "Diversity of languages & frameworks" },
    { subject: "Streak Discipline", score: 98, fullMark: 100, description: "Consistency of daily contributions" },
  ];
}

export async function fetchGitHubUser(username: string, patToken?: string): Promise<GitHubUser> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };
    if (patToken) {
      headers.Authorization = `token ${patToken}`;
    }

    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return getMockUser(username);
    }

    const data = await res.json();
    return {
      login: data.login,
      name: data.name || data.login,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      bio: data.bio || "Building open source tools & software ✨",
      company: data.company,
      location: data.location,
      blog: data.blog,
      twitter_username: data.twitter_username,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      following: data.following,
      created_at: data.created_at,
      statusBadge: "Coding with 💖 & Matcha",
      moodEmoji: "✨",
    };
  } catch {
    return getMockUser(username);
  }
}
