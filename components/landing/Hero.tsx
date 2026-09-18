"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Flame, Package, Star, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { GradientText } from "@/components/shared/GradientText";
import { brandColors, chartTooltipStyle } from "@/lib/theme";

const chartData = [
  { day: "Mon", commits: 20 },
  { day: "Tue", commits: 45 },
  { day: "Wed", commits: 35 },
  { day: "Thu", commits: 70 },
  { day: "Fri", commits: 55 },
  { day: "Sat", commits: 95 },
  { day: "Sun", commits: 80 },
];

const stats = [
  { icon: Star, label: "Stars", value: "2.3K" },
  { icon: Flame, label: "Streak", value: "186 Days" },
  { icon: Package, label: "Repositories", value: "58" },
  { icon: Users, label: "Followers", value: "420" },
];

function ContributionField() {
  const cell = 14;
  const gap = 5;
  const tile = cell + gap;
  const cols = 6;
  const rows = 6;
  const accents: Record<string, string> = {
    "1-2": brandColors.violet,
    "3-0": brandColors.blue,
    "2-4": brandColors.pink,
    "4-3": brandColors.violet,
    "0-5": brandColors.blue,
    "5-1": brandColors.pink,
  };

  const cells = [];
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const key = `${x}-${y}`;
      const accent = accents[key];
      cells.push(
        <rect
          key={key}
          x={x * tile}
          y={y * tile}
          width={cell}
          height={cell}
          rx={3}
          fill={accent ?? "currentColor"}
          fillOpacity={accent ? 0.5 : 0.06}
        />
      );
    }
  }

  return (
    <svg
      width={cols * tile}
      height={rows * tile}
      className="text-foreground"
      aria-hidden="true"
    >
      {cells}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_20%_10%,black,transparent)]"
      >
        <div className="absolute -left-4 top-14 opacity-70">
          <ContributionField />
        </div>
        <div className="absolute right-10 top-34 opacity-40">
          <ContributionField />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-26 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
        <div className="text-left">
          <p className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
            Open source · powered by the GitHub API
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turn your <GradientText>GitHub activity</GradientText> into beautiful
            insights
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
            Analyze repositories, track contributions, and create stunning README
            widgets with GitCatalyst.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href="/signup">
              <Button variant="gradient" size="lg">
                Get Started
                <ArrowRight />
              </Button>
            </Link>
            <Link
              href="/overview"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              <FaGithub />
              View live demo
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
            <span>
              <strong className="font-semibold text-foreground">2.3K</strong> stars
            </span>
            <span className="hidden text-border sm:inline">·</span>
            <span>
              <strong className="font-semibold text-foreground">186</strong>-day streak
            </span>
            <span className="hidden text-border sm:inline">·</span>
            <span>
              <strong className="font-semibold text-foreground">58</strong> repos tracked
            </span>
          </div>
        </div>

        <Card className="w-full">
          <div className="p-5">
            <div className="mb-5 flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-warning/70" />
              <span className="h-3 w-3 rounded-full bg-success/70" />
              <p className="ml-3 text-sm text-muted-foreground">GitCatalyst Dashboard</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-foreground/[0.03] p-4 text-left transition-colors duration-300 hover:border-accent-violet/40"
                  >
                    <Icon className="h-5 w-5 text-accent-violet" />
                    <p className="mt-3 text-sm text-muted-foreground">{item.label}</p>
                    <h3 className="mt-1 text-2xl font-bold text-foreground">{item.value}</h3>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-foreground/[0.03] p-6">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="heroChart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={brandColors.violet} stopOpacity={0.5} />
                        <stop offset="100%" stopColor={brandColors.pink} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" hide />
                    <YAxis hide />
                    <Tooltip contentStyle={chartTooltipStyle} />
                    <Area
                      type="monotone"
                      dataKey="commits"
                      stroke={brandColors.violet}
                      strokeWidth={3}
                      fill="url(#heroChart)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Contribution Activity
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
