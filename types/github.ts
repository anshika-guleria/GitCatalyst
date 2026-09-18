export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  statusBadge?: string;
  moodEmoji?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
  size: number;
}

export interface LanguageStat {
  name: string;
  bytes: number;
  percentage: number;
  color: string;
}

export interface CommitActivity {
  day: string;
  date: string;
  commits: number;
  prs: number;
  issues: number;
}

export interface ContributionStreak {
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
  streakStart: string;
  streakEnd: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlocked: boolean;
  progress: number; // 0 to 100
  tier: "bronze" | "silver" | "gold" | "platinum" | "kawaii";
  cuteTag?: string;
}

export type WidgetTheme = 
  | "pastel-dream"
  | "kawaii-dark"
  | "soft-rose"
  | "matcha"
  | "synthwave"
  | "nord"
  | "dracula"
  | "github-dark";

export type WidgetSize = "compact" | "standard" | "wide";
export type WidgetIconStyle = "emoji" | "badge" | "minimal";

export type WidgetCardType =
  | "stats"
  | "streak"
  | "languages"
  | "banner"
  | "trophy"
  | "repo"
  | "activity"
  | "impact"
  | "trending"
  | "analytics"
  | "velocity"
  | "network"
  | "comparison"
  | "distribution";

export interface WidgetConfig {
  cardType: WidgetCardType;
  username: string;
  repoName?: string;
  theme: WidgetTheme;
  showIcons: boolean;
  hideBorder: boolean;
  customTitle?: string;
  borderRadius: number;
  statusText?: string;
}

export interface SkillRadarMetric {
  subject: string;
  score: number;
  fullMark: number;
  description: string;
}
