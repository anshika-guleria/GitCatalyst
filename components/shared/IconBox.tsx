import { cn } from "@/lib/utils";
import { accentStyles, type AccentVariant } from "@/lib/theme";

interface IconBoxProps {
  icon: React.ElementType;
  variant?: AccentVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { box: "h-8 w-8 rounded-lg", icon: 16 },
  md: { box: "h-10 w-10 rounded-lg", icon: 20 },
  lg: { box: "h-14 w-14 rounded-2xl", icon: 28 },
};

export function IconBox({
  icon: Icon,
  variant = "violet",
  size = "md",
  className,
}: IconBoxProps) {
  const styles = accentStyles[variant];
  const sizes = sizeMap[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        sizes.box,
        styles.bg,
        styles.icon,
        className
      )}
    >
      <Icon size={sizes.icon} />
    </div>
  );
}
