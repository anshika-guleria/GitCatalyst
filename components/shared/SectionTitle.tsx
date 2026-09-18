import { cn } from "@/lib/utils";
import { accentStyles, type AccentVariant } from "@/lib/theme";

interface SectionTitleProps {
  title: string;
  description?: string;
  icon?: React.ElementType;
  accent?: AccentVariant;
  className?: string;
  action?: React.ReactNode;
}

export function SectionTitle({
  title,
  description,
  icon: Icon,
  accent = "violet",
  className,
  action,
}: SectionTitleProps) {
  const styles = accentStyles[accent];

  return (
    <div className={cn("mb-4 flex items-center justify-between", className)}>
      <div>
        <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
          {Icon && <Icon className={cn("h-5 w-5", styles.icon)} />}
          {title}
        </h2>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
