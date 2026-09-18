"use client";

import { GitCommit } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartCardHeader } from "@/components/shared/ChartCardHeader";
import { ChartLegend } from "@/components/shared/ChartLegend";
import { Card } from "@/components/ui/card";
import { brandColors, chartTooltipStyle } from "@/lib/theme";

interface ActivityDataPoint {
  day: string;
  commits: number;
  prs: number;
}

interface ContributionVelocityChartProps {
  data: ActivityDataPoint[];
}

export function ContributionVelocityChart({ data }: ContributionVelocityChartProps) {
  return (
    <Card className="p-6 lg:col-span-2">
      <div className="mb-6 flex items-center justify-between">
        <ChartCardHeader
          title="Contribution Velocity"
          description="Weekly commit and PR activity"
          icon={GitCommit}
          accent="pink"
        />
        <ChartLegend
          items={[
            { label: "Commits", accent: "violet" },
            { label: "PRs", accent: "pink" },
          ]}
        />
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={brandColors.violet} stopOpacity={0.4} />
                <stop offset="95%" stopColor={brandColors.violet} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPRs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={brandColors.pink} stopOpacity={0.4} />
                <stop offset="95%" stopColor={brandColors.pink} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip contentStyle={chartTooltipStyle} />
            <Area
              type="monotone"
              dataKey="commits"
              stroke={brandColors.violet}
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorCommits)"
            />
            <Area
              type="monotone"
              dataKey="prs"
              stroke={brandColors.pink}
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPRs)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
