import { cn } from "@/lib/utils";

type GlowVariant = "hero" | "cta" | "subtle";

interface BrandGlowProps {
  variant?: GlowVariant;
  className?: string;
}

const variantStyles: Record<GlowVariant, string> = {
  hero: "absolute inset-0 -z-10 overflow-hidden",
  cta: "absolute inset-0 -z-10 overflow-hidden",
  subtle: "pointer-events-none absolute inset-0 -z-10",
};

export function BrandGlow({ variant = "hero", className }: BrandGlowProps) {
  return (
    <div className={cn(variantStyles[variant], className)} aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/15 blur-[120px]" />
      <div className="absolute right-20 top-0 h-56 w-56 rounded-full bg-accent-cyan/10 blur-[100px]" />
      <div className="absolute left-20 bottom-0 h-56 w-56 rounded-full bg-accent-pink/10 blur-[100px]" />
    </div>
  );
}
