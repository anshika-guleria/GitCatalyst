"use client";

import { PieChart as PieChartIcon } from "lucide-react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartCardHeader } from "@/components/shared/ChartCardHeader";
import { ChartTooltipContent } from "@/components/shared/ChartTooltipContent";
import { Card } from "@/components/ui/card";
import { statusChartColors } from "@/lib/theme";

const issueStatusData = [
  { name: "Resolved / Merged", count: 216, color: statusChartColors.resolved },
  { name: "In Active Review", count: 18, color: statusChartColors.review },
  { name: "Open Triage", count: 8, color: statusChartColors.open },
];

export function IssueStatusChart() {
  return (
    <Card className="flex flex-col justify-between p-6 lg:col-span-4">
      <ChartCardHeader
        title="Issue Triage Ratio"
        description="Breakdown of issue resolution status"
        icon={PieChartIcon}
        accent="success"
      />

      <div className="my-4 h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={issueStatusData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              paddingAngle={5}
              dataKey="count"
            >
              {issueStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const data = payload[0].payload;
                  return (
                    <ChartTooltipContent title={data.name} accent="success">
                      <p className="font-semibold text-foreground">{data.count} issues</p>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2 text-xs">
        {issueStatusData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-medium text-foreground">{item.name}</span>
            </div>
            <span className="font-bold text-muted-foreground">{item.count}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
