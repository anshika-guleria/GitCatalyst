import { WidgetTheme } from "@/types/github";

export interface WidgetThemeConfig {
  id: WidgetTheme;
  name: string;
  /** SVG/card generation colors */
  colors: {
    bg: string;
    cardBg: string;
    text: string;
    accent: string;
    accent2: string;
    subtext: string;
    border: string;
  };
  /** UI preview classes for the builder */
  preview: {
    bg: string;
    text: string;
    accent: string;
  };
  badge: string;
}

export const widgetThemes: WidgetThemeConfig[] = [
  {
    id: "pastel-dream",
    name: "Pastel Dream",
    colors: {
      bg: "#fdf2f8",
      cardBg: "#ffffff",
      text: "#831843",
      accent: "#ec4899",
      accent2: "#a855f7",
      subtext: "#9d174d",
      border: "#fbcfe8",
    },
    preview: {
      bg: "bg-accent-pink/10 border-accent-pink/20",
      text: "text-accent-pink",
      accent: "from-accent-pink via-accent-violet to-accent-blue",
    },
    badge: "Cutest",
  },
  {
    id: "kawaii-dark",
    name: "Kawaii Dark",
    colors: {
      bg: "#18181b",
      cardBg: "#27272a",
      text: "#f4f4f5",
      accent: "#f472b6",
      accent2: "#c084fc",
      subtext: "#a1a1aa",
      border: "#3f3f46",
    },
    preview: {
      bg: "bg-card border-border",
      text: "text-foreground",
      accent: "from-accent-pink to-accent-violet",
    },
    badge: "Popular",
  },
  {
    id: "soft-rose",
    name: "Soft Rose",
    colors: {
      bg: "#fff1f2",
      cardBg: "#ffffff",
      text: "#881337",
      accent: "#f43f5e",
      accent2: "#fb7185",
      subtext: "#9f1239",
      border: "#fecdd3",
    },
    preview: {
      bg: "bg-accent-pink/10 border-accent-pink/20",
      text: "text-accent-pink",
      accent: "from-accent-pink to-accent-pink/80",
    },
    badge: "Warm",
  },
  {
    id: "matcha",
    name: "Matcha Mint",
    colors: {
      bg: "#f0fdf4",
      cardBg: "#ffffff",
      text: "#14532d",
      accent: "#10b981",
      accent2: "#34d399",
      subtext: "#166534",
      border: "#bbf7d0",
    },
    preview: {
      bg: "bg-success/10 border-success/20",
      text: "text-success",
      accent: "from-success to-accent-cyan",
    },
    badge: "Fresh",
  },
  {
    id: "synthwave",
    name: "Synthwave",
    colors: {
      bg: "#2b213a",
      cardBg: "#3b2d4e",
      text: "#f8f8f2",
      accent: "#ff79c6",
      accent2: "#bd93f9",
      subtext: "#6272a4",
      border: "#44475a",
    },
    preview: {
      bg: "bg-card border-border",
      text: "text-foreground",
      accent: "from-accent-pink to-accent-violet",
    },
    badge: "Retro",
  },
  {
    id: "nord",
    name: "Nord Cold",
    colors: {
      bg: "#2e3440",
      cardBg: "#3b4252",
      text: "#eceff4",
      accent: "#88c0d0",
      accent2: "#81a1c1",
      subtext: "#d8dee9",
      border: "#4c566a",
    },
    preview: {
      bg: "bg-card border-border",
      text: "text-foreground",
      accent: "from-accent-cyan to-accent-blue",
    },
    badge: "Clean",
  },
  {
    id: "dracula",
    name: "Dracula",
    colors: {
      bg: "#282a36",
      cardBg: "#343746",
      text: "#f8f8f2",
      accent: "#ff79c6",
      accent2: "#50fa7b",
      subtext: "#6272a4",
      border: "#44475a",
    },
    preview: {
      bg: "bg-card border-border",
      text: "text-foreground",
      accent: "from-accent-pink to-success",
    },
    badge: "Vamp",
  },
  {
    id: "github-dark",
    name: "GitHub Dark",
    colors: {
      bg: "#0d1117",
      cardBg: "#161b22",
      text: "#c9d1d9",
      accent: "#238636",
      accent2: "#2ea043",
      subtext: "#8b949e",
      border: "#30363d",
    },
    preview: {
      bg: "bg-card border-border",
      text: "text-foreground",
      accent: "from-success to-success/80",
    },
    badge: "Classic",
  },
];

export function getWidgetTheme(id: WidgetTheme): WidgetThemeConfig {
  return widgetThemes.find((t) => t.id === id) ?? widgetThemes[0];
}

export function getWidgetThemeColors(id: WidgetTheme) {
  return getWidgetTheme(id).colors;
}
