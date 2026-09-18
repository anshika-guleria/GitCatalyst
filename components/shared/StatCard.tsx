import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { accentStyles, accentHoverBorder, type AccentVariant } from "@/lib/theme";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: React.ElementType;
  accent?: AccentVariant;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  accent = "violet",
  className,
}: StatCardProps) {
  const styles = accentStyles[accent];

  return (
    <Card
      className={cn(
        "relative overflow-hidden p-5 transition-all duration-300",
        accentHoverBorder[accent],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground">{title}</span>
        <div className={cn("rounded-2xl p-2.5", styles.bg, styles.icon)}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-3">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p className={cn("mt-1 text-[11px] font-medium", styles.text)}>
            {change}
          </p>
        )}
      </div>
    </Card>
  );
}
