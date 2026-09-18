import { cn } from "@/lib/utils";
import { accentStyles, type AccentVariant } from "@/lib/theme";

interface ChartCardHeaderProps {
  title: string;
  description?: string;
  icon: React.ElementType;
  accent?: AccentVariant;
  className?: string;
}

export function ChartCardHeader({
  title,
  description,
  icon: Icon,
  accent = "violet",
  className,
}: ChartCardHeaderProps) {
  const styles = accentStyles[accent];

  return (
    <div className={className}>
      <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
        <Icon className={cn("h-5 w-5", styles.icon)} />
        {title}
      </h2>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
