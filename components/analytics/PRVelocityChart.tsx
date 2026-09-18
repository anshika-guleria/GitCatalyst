"use client";

import { GitPullRequest } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartCardHeader } from "@/components/shared/ChartCardHeader";
import { ChartTooltipContent } from "@/components/shared/ChartTooltipContent";
import { Card } from "@/components/ui/card";
import { brandColors } from "@/lib/theme";

const prVelocityData = [
  { month: "Jan", prsMerged: 24, avgHoursToMerge: 3.5, issueResolved: 18 },
  { month: "Feb", prsMerged: 32, avgHoursToMerge: 2.8, issueResolved: 24 },
  { month: "Mar", prsMerged: 45, avgHoursToMerge: 2.1, issueResolved: 38 },
  { month: "Apr", prsMerged: 38, avgHoursToMerge: 1.9, issueResolved: 31 },
  { month: "May", prsMerged: 52, avgHoursToMerge: 1.5, issueResolved: 46 },
  { month: "Jun", prsMerged: 68, avgHoursToMerge: 1.2, issueResolved: 59 },
];

export function PRVelocityChart() {
  return (
    <Card className="p-6 lg:col-span-8">
      <ChartCardHeader
        title="Pull Request & Issue Resolution Velocity"
        description="Monthly PRs merged vs issues resolved"
        icon={GitPullRequest}
        accent="pink"
        className="mb-6"
      />

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={prVelocityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} />
            <YAxis stroke="var(--muted-foreground)" fontSize={11} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const d = payload[0].payload;
                  return (
                    <ChartTooltipContent title={`${d.month} Overview`} accent="pink">
                      <p className="font-semibold text-accent-pink">PRs Merged: {d.prsMerged}</p>
                      <p className="font-semibold text-accent-blue">Issues Closed: {d.issueResolved}</p>
                      <p className="text-[11px] text-muted-foreground">
                        Avg merge time: {d.avgHoursToMerge}h
                      </p>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
            <Line
              type="monotone"
              dataKey="prsMerged"
              name="PRs Merged"
              stroke={brandColors.pink}
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="issueResolved"
              name="Issues Closed"
              stroke={brandColors.blue}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
