"use client";

import { Code2 } from "lucide-react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartCardHeader } from "@/components/shared/ChartCardHeader";
import { Card } from "@/components/ui/card";
import { chartTooltipStyle } from "@/lib/theme";

interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

interface LanguageBreakdownChartProps {
  languages: LanguageData[];
}

export function LanguageBreakdownChart({ languages }: LanguageBreakdownChartProps) {
  return (
    <Card className="flex flex-col justify-between p-6">
      <ChartCardHeader
        title="Top Languages"
        description="Ecosystem breakdown"
        icon={Code2}
        accent="violet"
      />

      <div className="relative my-4 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={languages}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              paddingAngle={5}
              dataKey="percentage"
            >
              {languages.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={chartTooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2 text-xs">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: lang.color }}
              />
              <span className="font-semibold text-foreground">{lang.name}</span>
            </div>
            <span className="font-bold text-muted-foreground">{lang.percentage}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
