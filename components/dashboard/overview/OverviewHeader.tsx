"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";

interface OverviewHeaderProps {
  userName: string;
  userLogin: string;
  githubUrl: string;
}

export function OverviewHeader({ userName, userLogin, githubUrl }: OverviewHeaderProps) {
  return (
    <PageHeader
      title={`Welcome back, ${userName}`}
      description={`GitHub summary and analytics for @${userLogin}`}
      accent="violet"
    >
      <div className="flex items-center gap-3">
        <Link href="/widgets">
          <Button variant="gradient" size="sm" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Generate README Cards
          </Button>
        </Link>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <Button variant="outline" size="sm" className="gap-2">
            GitHub Profile
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
      </div>
    </PageHeader>
  );
}
