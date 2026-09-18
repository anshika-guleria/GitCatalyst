import Link from "next/link";
import { GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/theme";

interface LogoProps {
  href?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { mark: "h-8 w-8 text-sm rounded-lg", icon: 18 },
  md: { mark: "h-9 w-9 text-sm rounded-xl", icon: 20 },
  lg: { mark: "h-11 w-11 text-base rounded-xl", icon: 22 },
};

export function Logo({
  href = "/",
  showText = true,
  size = "md",
  className,
}: LogoProps) {
  const sizes = sizeMap[size];

  const content = (
    <>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center font-bold text-primary-foreground shadow-sm",
          brandGradients.mark,
          sizes.mark
        )}
      >
        {size === "lg" ? (
          <GitBranch size={sizes.icon} />
        ) : (
          "G"
        )}
      </div>

      {showText && (
        <div className="hidden sm:block">
          <p className="font-bold leading-none text-foreground">GitCatalyst</p>
          <p className="mt-1 text-xs text-muted-foreground">GitHub Analytics</p>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("flex items-center gap-3 group", className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn("flex items-center gap-3", className)}>{content}</div>;
}
