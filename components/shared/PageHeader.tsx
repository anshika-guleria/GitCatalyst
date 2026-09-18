import { cn } from "@/lib/utils";
import { accentStyles, type AccentVariant } from "@/lib/theme";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ElementType;
  accent?: AccentVariant;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  icon: Icon,
  accent = "violet",
  className,
  children,
}: PageHeaderProps) {
  const styles = accentStyles[accent];

  return (
    <div className={cn("border-b border-border pb-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {Icon && <Icon className={cn("h-7 w-7", styles.icon)} />}
            {title}
          </h1>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
