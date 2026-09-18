import { Award, Code2, Flame, GitPullRequest, Star } from "lucide-react";

import { ProgressBar } from "@/components/shared/ProgressBar";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconBox } from "@/components/shared/IconBox";
import { accentHoverBorder } from "@/lib/theme";
import type { Achievement } from "@/types/github";
import { cn } from "@/lib/utils";

const iconMap = {
  Flame,
  Star,
  GitPullRequest,
  Code2,
};

interface AchievementGridProps {
  achievements: Achievement[];
}

export function AchievementGrid({ achievements }: AchievementGridProps) {
  return (
    <div>
      <SectionTitle
        title="Developer Badges"
        description="Unlocked accomplishments and milestone rewards"
        icon={Award}
        accent="warning"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => {
          const Icon = iconMap[item.iconName as keyof typeof iconMap] ?? Code2;

          return (
            <Card
              key={item.id}
              className={cn("p-5 transition-all", accentHoverBorder.pink)}
            >
              <div className="flex items-center justify-between">
                <IconBox icon={Icon} variant="pink" size="lg" />
                {item.cuteTag && (
                  <Badge variant="gradient" size="sm">
                    {item.cuteTag}
                  </Badge>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2">
                <ProgressBar value={item.progress} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
