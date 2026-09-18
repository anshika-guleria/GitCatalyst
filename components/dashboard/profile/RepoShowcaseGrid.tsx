import { BookOpen, GitFork, Star } from "lucide-react";

import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentHoverBorder, accentStyles } from "@/lib/theme";
import type { GitHubRepo } from "@/types/github";
import { cn } from "@/lib/utils";

interface RepoShowcaseGridProps {
  repos: GitHubRepo[];
}

export function RepoShowcaseGrid({ repos }: RepoShowcaseGridProps) {
  return (
    <div>
      <SectionTitle
        title="Featured Repositories"
        description="Top repositories pinned on profile"
        icon={BookOpen}
        accent="violet"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            className={cn(
              "flex flex-col justify-between p-5 transition-all",
              accentHoverBorder.pink
            )}
          >
            <div>
              <div className="flex items-center justify-between">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-foreground transition-colors group-hover:text-accent-pink"
                >
                  <BookOpen className={cn("h-4 w-4", accentStyles.pink.icon)} />
                  {repo.name}
                </a>
                <Badge variant="outline" size="sm">
                  Public
                </Badge>
              </div>

              {repo.description && (
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
              )}

              {repo.topics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <Badge key={topic} variant="pink" size="sm">
                      #{topic}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-semibold text-foreground">
                  <span className={cn("h-2.5 w-2.5 rounded-full", accentStyles.violet.dot)} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className={cn("h-3.5 w-3.5", accentStyles.warning.icon)} />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className={cn("h-3.5 w-3.5", accentStyles.blue.icon)} />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
