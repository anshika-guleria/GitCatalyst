import {
  Activity,
  BarChart3,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { IconBox } from "@/components/shared/IconBox";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/card";
import type { AccentVariant } from "@/lib/theme";

const features: {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: AccentVariant;
}[] = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Explore contributions, repositories, languages, commits, and coding trends.",
    accent: "violet",
  },
  {
    icon: Palette,
    title: "README Widgets",
    description:
      "Create beautiful GitHub cards and widgets with customizable themes.",
    accent: "pink",
  },
  {
    icon: Activity,
    title: "Interactive Dashboards",
    description:
      "Visualize GitHub activity through charts, heatmaps, and metrics.",
    accent: "blue",
  },
  {
    icon: Sparkles,
    title: "Developer Insights",
    description:
      "Discover coding patterns and track your development progress.",
    accent: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Secure Integration",
    description: "Connect GitHub securely and fetch your repository data.",
    accent: "success",
  },
];

export function Features() {
  return (
    <section id="features" className="py-13">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Powerful tools for your GitHub profile"
          description="Analyze your work, showcase achievements, and understand your developer journey."
          className="mb-14"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-violet/40"
            >
              <IconBox
                icon={feature.icon}
                variant={feature.accent}
                className="mb-5"
              />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
