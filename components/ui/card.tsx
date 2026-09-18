import * as React from "react";

import { cn } from "@/lib/utils";


function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        [
          "group relative overflow-hidden rounded-2xl",
          "border border-border/80",
          "bg-card",
          "text-card-foreground",

          // subtle depth
          "shadow-sm",
          "transition-all duration-300 ease-out",

          // hover interaction
          "hover:-translate-y-1",
          "hover:border-foreground/20",
          "hover:shadow-xl hover:shadow-black/10",
          "dark:hover:shadow-black/40",

          // soft inner light
          "before:pointer-events-none",
          "before:absolute",
          "before:inset-x-0",
          "before:top-0",
          "before:h-px",
          "before:bg-gradient-to-r",
          "before:from-transparent",
          "before:via-foreground/20",
          "before:to-transparent",

          // subtle background glow
          "after:pointer-events-none",
          "after:absolute",
          "after:-right-20",
          "after:-top-20",
          "after:h-40",
          "after:w-40",
          "after:rounded-full",
          "after:bg-accent-violet/10",
          "after:blur-3xl",
          "after:opacity-0",
          "after:transition-opacity",
          "after:duration-500",
          "group-hover:after:opacity-100",
        ],
        className
      )}
      {...props}
    />
  );
}


function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col gap-2 p-6",
        className
      )}
      {...props}
    />
  );
}


function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}


function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}


function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative z-10 p-6 pt-0",
        className
      )}
      {...props}
    />
  );
}


function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative z-10 flex items-center p-6 pt-0",
        className
      )}
      {...props}
    />
  );
}


export {
    Card, CardContent, CardDescription, CardFooter, CardHeader,
    CardTitle
};
