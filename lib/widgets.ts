import {
  Activity,
  BarChart3,
  Code,
  Flame,
  GitBranch,
  Layers,
  Medal,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";

import type { WidgetCardType } from "@/types/github";

export const widgetCardTypes: {
  id: WidgetCardType;
  name: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    id: "stats",
    name: "1. Overview Stats",
    description: "A clean profile snapshot with repo, follower, following, and gist totals.",
    icon: Sparkles,
  },
  {
    id: "analytics",
    name: "2. Weekly Bar Graph",
    description: "Visible contribution bars with total and merge-rate readouts.",
    icon: BarChart3,
  },
  {
    id: "velocity",
    name: "3. Velocity Trend",
    description: "A directional trend card for pull request cadence and release pace.",
    icon: TrendingUp,
  },
  {
    id: "comparison",
    name: "4. Metric Comparison",
    description: "Side-by-side KPI view for commits, reviews, and release numbers.",
    icon: GitBranch,
  },
  {
    id: "distribution",
    name: "5. Impact Distribution",
    description: "Readable share view for followers, forks, and stars.",
    icon: Layers,
  },
  {
    id: "network",
    name: "6. Community Network",
    description: "Connected community graph with engagement milestones.",
    icon: Activity,
  },
  {
    id: "streak",
    name: "7. Contribution Streak",
    description: "Current streak and long-run contribution history in one card.",
    icon: Flame,
  },
  {
    id: "languages",
    name: "8. Top Languages",
    description: "Readable language share breakdown with clear percentages.",
    icon: Code,
  },
  {
    id: "repo",
    name: "9. Repository Showcase",
    description: "Featured project card with stars, forks, issues, and topics.",
    icon: Layers,
  },
  {
    id: "banner",
    name: "10. Profile Hero Banner",
    description: "Personal hero header with status, bio, and key profile stats.",
    icon: User,
  },
  {
    id: "trophy",
    name: "11. Achievement Highlights",
    description: "Milestone badges and achievement labels with readable values.",
    icon: Medal,
  },
];
