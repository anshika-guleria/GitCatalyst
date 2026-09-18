import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/theme";

interface UserAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-8 w-8 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-12 w-12 text-lg",
};

export function UserAvatar({ name, size = "md", className }: UserAvatarProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-bold text-primary-foreground shadow-sm",
        brandGradients.mark,
        sizeMap[size],
        className
      )}
    >
      {initial}
    </div>
  );
}
