import { IconBox } from "@/components/shared/IconBox";
import type { AccentVariant } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface SettingsSectionProps {
  title: string;
  description: string;
  icon: React.ElementType;
  accent?: AccentVariant;
  children?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function SettingsSection({
  title,
  description,
  icon,
  accent = "violet",
  children,
  action,
  className,
}: SettingsSectionProps) {
  return (
    <div className={cn("space-y-4 p-6", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconBox icon={icon} variant={accent} size="md" />
          <div>
            <h2 className="text-base font-bold text-foreground">{title}</h2>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
