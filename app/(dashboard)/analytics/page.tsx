"use client";

import { BarChart3 } from "lucide-react";

import { AnalyticsMetricsGrid } from "@/components/analytics/AnalyticsMetricsGrid";
import { IssueStatusChart } from "@/components/analytics/IssueStatusChart";
import { PeakHoursChart } from "@/components/analytics/PeakHoursChart";
import { PRVelocityChart } from "@/components/analytics/PRVelocityChart";
import { SkillRadarSection } from "@/components/analytics/SkillRadarSection";
import { PageHeader } from "@/components/shared/PageHeader";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title="Developer Analytics"
        description="Productivity metrics, skill balance, and PR turnaround velocity."
        icon={BarChart3}
        accent="pink"
      />

      <AnalyticsMetricsGrid />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <SkillRadarSection />
        <PeakHoursChart />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <IssueStatusChart />
        <PRVelocityChart />
      </div>
    </div>
  );
}
