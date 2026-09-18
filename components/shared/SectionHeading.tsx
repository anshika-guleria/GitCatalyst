import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        isCenter && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge && (
        <Badge variant="default" className="mb-4">
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          isCenter && "mt-6"
        )}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-accent-violet via-accent-blue to-accent-pink bg-clip-text text-transparent">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-muted-foreground",
            isCenter && "text-lg"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
