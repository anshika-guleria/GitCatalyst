"use client";

import { Clock } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartCardHeader } from "@/components/shared/ChartCardHeader";
import { ChartTooltipContent } from "@/components/shared/ChartTooltipContent";
import { Card } from "@/components/ui/card";
import { barChartPalette, brandColors } from "@/lib/theme";

const timeOfDayData = [
  { time: "00:00 - 04:00", commits: 12, note: "Late night bursts" },
  { time: "04:00 - 08:00", commits: 28, note: "Early morning warm-ups" },
  { time: "08:00 - 12:00", commits: 145, note: "Morning peak focus" },
  { time: "12:00 - 16:00", commits: 198, note: "Afternoon review window" },
  { time: "16:00 - 20:00", commits: 240, note: "Prime productivity sprint" },
  { time: "20:00 - 24:00", commits: 88, note: "Evening maintenance" },
];

export function PeakHoursChart() {
  return (
    <Card className="p-6 lg:col-span-7">
      <ChartCardHeader
        title="Peak Productivity Hours"
        description="Commit volume distribution by time slot (UTC)"
        icon={Clock}
        accent="violet"
        className="mb-6"
      />

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={timeOfDayData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
            <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} />
            <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length) {
                  const data = payload[0].payload;
                  return (
                    <ChartTooltipContent title={data.time} accent="violet">
                      <p className="font-semibold text-foreground">
                        Commits: {data.commits}
                      </p>
                      <p className="text-[11px] font-medium text-accent-pink">{data.note}</p>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="commits" radius={[10, 10, 0, 0]}>
              {timeOfDayData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index === 4
                      ? brandColors.pink
                      : index === 3
                        ? brandColors.violet
                        : barChartPalette[index % barChartPalette.length]
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
