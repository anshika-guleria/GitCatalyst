import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/theme";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  className,
  showLabel = true,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={className}>
      {showLabel && (
        <div className="mb-1 flex justify-between text-[10px] font-bold text-muted-foreground">
          <span>Progress</span>
          <span className="text-accent-violet">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full transition-all duration-500", brandGradients.mark)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
