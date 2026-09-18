import { Compass } from "lucide-react";

import { SkillRadarChart } from "@/components/analytics/SkillRadarChart";
import { ChartCardHeader } from "@/components/shared/ChartCardHeader";
import { Card } from "@/components/ui/card";

export function SkillRadarSection() {
  return (
    <Card className="flex flex-col justify-between p-6 lg:col-span-5">
      <ChartCardHeader
        title="Developer Skill Balance"
        description="6-axis evaluation of repository contributions"
        icon={Compass}
        accent="pink"
      />

      <div className="my-4">
        <SkillRadarChart />
      </div>

      <p className="text-center text-[11px] text-muted-foreground">
        Hover points on radar chart for exact score breakdown
      </p>
    </Card>
  );
}
