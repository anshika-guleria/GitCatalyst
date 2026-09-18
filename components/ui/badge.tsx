import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5",
    "rounded-full px-3 py-1",
    "text-xs font-medium",
    "ring-1 ring-inset",
    "transition-all duration-300",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-accent-violet/15 text-accent-violet ring-accent-violet/25",

        gradient: [
          "bg-gradient-to-r from-accent-violet/20 via-accent-blue/20 to-accent-pink/20",
          "text-foreground ring-foreground/15 backdrop-blur-xl",
        ],

        blue:
          "bg-accent-blue/15 text-accent-blue ring-accent-blue/25",

        pink:
          "bg-accent-pink/15 text-accent-pink ring-accent-pink/25",

        cyan:
          "bg-accent-cyan/15 text-accent-cyan ring-accent-cyan/25",

        outline:
          "border border-border bg-foreground/5 text-muted-foreground backdrop-blur ring-0",

        success:
          "bg-success/15 text-success ring-success/25",

        warning:
          "bg-warning/15 text-warning ring-warning/25",
      },

      size: {
        sm: "px-2 py-0.5 text-[11px]",
        default: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
