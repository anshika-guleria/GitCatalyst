import { cn } from "@/lib/utils";
import { accentStyles, type AccentVariant } from "@/lib/theme";

interface ChartTooltipContentProps {
  title: string;
  accent?: AccentVariant;
  children: React.ReactNode;
  className?: string;
}

export function ChartTooltipContent({
  title,
  accent = "violet",
  children,
  className,
}: ChartTooltipContentProps) {
  const styles = accentStyles[accent];

  return (
    <div
      className={cn(
        "space-y-1 rounded-2xl border bg-card p-3 text-xs shadow-xl",
        styles.border,
        className
      )}
    >
      <p className={cn("font-bold", styles.text)}>{title}</p>
      {children}
    </div>
  );
}
