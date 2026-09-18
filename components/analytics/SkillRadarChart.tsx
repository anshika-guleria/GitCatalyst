"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { getMockRadarSkills } from "@/lib/github";
import { brandColors } from "@/lib/theme";

export function SkillRadarChart() {
  const data = getMockRadarSkills();

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="var(--border)" opacity={0.6} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="var(--foreground)"
            fontSize={11}
            fontWeight={600}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            stroke="var(--muted-foreground)"
            fontSize={10}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                return (
                  <div className="space-y-1 rounded-2xl border border-accent-pink/30 bg-card p-3 text-xs shadow-xl">
                    <p className="font-bold text-accent-pink">{item.subject}</p>
                    <p className="font-semibold text-foreground">
                      Score: {item.score} / 100
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Radar
            name="Developer Skill Balance"
            dataKey="score"
            stroke={brandColors.pink}
            fill={brandColors.pink}
            fillOpacity={0.4}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
