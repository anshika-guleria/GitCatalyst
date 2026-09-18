"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root {...props} />;
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        [
          "z-50 overflow-hidden rounded-lg",
          "border border-border",
          "bg-popover text-popover-foreground",
          "px-3 py-1.5",
          "text-xs font-medium",
          "shadow-xl shadow-black/10 dark:shadow-black/30",
          "animate-in fade-in-0 zoom-in-95",
        ],
        className
      )}
      {...props}
    />
  );
}

export {
    Tooltip, TooltipContent,
    TooltipProvider, TooltipTrigger
};
