import { cn } from "@/lib/utils";
import { accentStyles, type AccentVariant } from "@/lib/theme";

interface ChartLegendProps {
  items: { label: string; accent: AccentVariant }[];
  className?: string;
}

export function ChartLegend({ items, className }: ChartLegendProps) {
  return (
    <div className={cn("flex items-center gap-4 text-xs font-semibold text-muted-foreground", className)}>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <span className={cn("h-2.5 w-2.5 rounded-full", accentStyles[item.accent].dot)} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
