import {
  Clock,
  Code,
  GitMerge,
  HelpCircle,
  Zap,
} from "lucide-react";

import { StatCard } from "@/components/shared/StatCard";
import { Card } from "@/components/ui/card";

export function AnalyticsMetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Peak Coding Window"
        value="16:00 - 20:00"
        change="240 commits recorded"
        icon={Clock}
        accent="pink"
      />
      <StatCard
        title="Avg PR Turnaround"
        value="1.2 Hours"
        change="65% faster than benchmark"
        icon={Zap}
        accent="violet"
      />
      <Card className="p-5">
        <div className="mb-2 flex items-center justify-between text-muted-foreground">
          <span className="flex items-center gap-1 text-xs font-semibold">
            Issue Resolution Ratio
            <HelpCircle className="h-3 w-3 text-muted-foreground/60" />
          </span>
          <GitMerge className="h-4 w-4 text-success" />
        </div>
        <div className="text-xl font-bold text-foreground">94.8%</div>
        <p className="mt-1 text-[11px] text-muted-foreground">216 issues closed</p>
      </Card>
      <Card className="p-5">
        <div className="mb-2 flex items-center justify-between text-muted-foreground">
          <span className="flex items-center gap-1 text-xs font-semibold">
            Primary Language
            <HelpCircle className="h-3 w-3 text-muted-foreground/60" />
          </span>
          <Code className="h-4 w-4 text-accent-blue" />
        </div>
        <div className="text-xl font-bold text-foreground">TypeScript</div>
        <p className="mt-1 text-[11px] text-muted-foreground">48.5% of total codebase</p>
      </Card>
    </div>
  );
}
