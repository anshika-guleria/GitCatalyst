import { brandColors } from "@/lib/theme";

/** Official GitHub language colors — domain data, not UI theme tokens */
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  HTML: "#e34c26",
  CSS: brandColors.pink,
  Java: "#b07219",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Shell: "#89e051",
};

export function getLanguageColor(language: string): string {
  return LANGUAGE_COLORS[language] ?? brandColors.violet;
}
