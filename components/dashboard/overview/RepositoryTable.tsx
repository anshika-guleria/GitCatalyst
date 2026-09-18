"use client";

import {
  ArrowUpRight,
  BookOpen,
  GitFork,
  Star,
} from "lucide-react";
import Link from "next/link";

import { ChartCardHeader } from "@/components/shared/ChartCardHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { accentStyles } from "@/lib/theme";
import type { GitHubRepo } from "@/types/github";
import { cn } from "@/lib/utils";

interface RepositoryTableProps {
  repos: GitHubRepo[];
}

export function RepositoryTable({ repos }: RepositoryTableProps) {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <ChartCardHeader
          title="Active Repositories"
          description="Recent open source projects"
          icon={BookOpen}
          accent="pink"
        />
        <Link href="/profile">
          <Button variant="ghost" size="sm" className="gap-1 text-xs text-accent-pink">
            View All Repos
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-border font-bold text-muted-foreground">
              <th className="pb-3 pl-2">Repository</th>
              <th className="pb-3">Primary Language</th>
              <th className="pb-3">Stars</th>
              <th className="pb-3">Forks</th>
              <th className="pb-3 pr-2 text-right">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {repos.map((repo) => (
              <tr key={repo.id} className="group transition-colors hover:bg-muted/40">
                <td className="py-3.5 pl-2 font-medium">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-bold text-foreground transition-colors group-hover:text-accent-pink"
                  >
                    <BookOpen className={cn("h-3.5 w-3.5", accentStyles.pink.icon)} />
                    {repo.name}
                  </a>
                  {repo.description && (
                    <p className="mt-0.5 line-clamp-1 max-w-md text-[11px] text-muted-foreground/80">
                      {repo.description}
                    </p>
                  )}
                </td>
                <td className="py-3.5">
                  <Badge variant="pink" size="sm" dot>
                    {repo.language || "Plain Text"}
                  </Badge>
                </td>
                <td className="py-3.5 font-bold text-foreground">
                  <div className="flex items-center gap-1">
                    <Star className={cn("h-3.5 w-3.5", accentStyles.warning.icon)} />
                    {repo.stargazers_count.toLocaleString()}
                  </div>
                </td>
                <td className="py-3.5 font-bold text-foreground">
                  <div className="flex items-center gap-1">
                    <GitFork className={cn("h-3.5 w-3.5", accentStyles.blue.icon)} />
                    {repo.forks_count.toLocaleString()}
                  </div>
                </td>
                <td className="py-3.5 pr-2 text-right text-muted-foreground">
                  {new Date(repo.updated_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
