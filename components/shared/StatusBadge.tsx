import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label: string;
  variant?: "success" | "warning" | "default";
  pulse?: boolean;
  className?: string;
}

const variantStyles = {
  success: {
    container: "border-success/20 bg-success/10 text-success",
    dot: "bg-success",
  },
  warning: {
    container: "border-warning/20 bg-warning/10 text-warning",
    dot: "bg-warning",
  },
  default: {
    container: "border-accent-violet/20 bg-accent-violet/10 text-accent-violet",
    dot: "bg-accent-violet",
  },
};

export function StatusBadge({
  label,
  variant = "success",
  pulse = true,
  className,
}: StatusBadgeProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium",
        styles.container,
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          styles.dot,
          pulse && "animate-pulse"
        )}
      />
      {label}
    </div>
  );
}
