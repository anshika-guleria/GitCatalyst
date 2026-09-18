/**
 * Central theme tokens for GitCatalyst.
 * CSS variables in globals.css are the single source of truth for colors.
 * Use these constants for SVG/Recharts where Tailwind classes aren't available.
 */

export const brandColors = {
  violet: "var(--violet)",
  blue: "var(--blue)",
  pink: "var(--pink)",
  cyan: "var(--cyan)",
  success: "var(--success)",
  warning: "var(--warning)",
  destructive: "var(--destructive)",
} as const;

export type BrandColor = keyof typeof brandColors;

export type AccentVariant = "violet" | "blue" | "pink" | "cyan" | "success" | "warning";

/** Tailwind class sets for icon boxes and stat cards */
export const accentStyles: Record<
  AccentVariant,
  { icon: string; bg: string; border: string; text: string; dot: string }
> = {
  violet: {
    icon: "text-accent-violet",
    bg: "bg-accent-violet/10",
    border: "border-accent-violet/20",
    text: "text-accent-violet",
    dot: "bg-accent-violet",
  },
  blue: {
    icon: "text-accent-blue",
    bg: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    text: "text-accent-blue",
    dot: "bg-accent-blue",
  },
  pink: {
    icon: "text-accent-pink",
    bg: "bg-accent-pink/10",
    border: "border-accent-pink/20",
    text: "text-accent-pink",
    dot: "bg-accent-pink",
  },
  cyan: {
    icon: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
    border: "border-accent-cyan/20",
    text: "text-accent-cyan",
    dot: "bg-accent-cyan",
  },
  success: {
    icon: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
    text: "text-success",
    dot: "bg-success",
  },
  warning: {
    icon: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
    text: "text-warning",
    dot: "bg-warning",
  },
};

/** Reusable Tailwind class strings for brand gradients */
export const brandGradients = {
  /** Logo mark, icon containers */
  mark: "bg-gradient-to-br from-accent-violet via-accent-blue to-accent-pink",
  /** Primary CTA buttons */
  cta: "bg-gradient-to-r from-accent-violet to-accent-blue",
  /** Headline accent text */
  text: "bg-gradient-to-r from-accent-violet via-accent-blue to-accent-pink bg-clip-text text-transparent",
  /** Badge / pill highlight */
  badge: "bg-gradient-to-r from-accent-violet to-accent-pink",
  /** Active nav item shadow */
  shadow: "shadow-accent-violet/20",
} as const;

/** Chart color palette — maps to brand tokens */
export const chartPalette = [
  brandColors.violet,
  brandColors.pink,
  brandColors.blue,
  brandColors.cyan,
  brandColors.success,
] as const;

/** Default Recharts tooltip styles using theme variables */
export const chartTooltipStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  fontSize: "12px",
  color: "var(--foreground)",
} as const;

/** Reusable form input classes */
export const inputClasses =
  "h-10 w-full rounded-xl border border-border bg-muted/30 px-3.5 text-xs font-medium text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-accent-violet focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent-violet/20";

/** Picker / selectable list item states */
export const pickerStyles = {
  selected:
    "border-accent-violet bg-accent-violet/10 font-semibold text-foreground ring-2 ring-accent-violet/30",
  unselected:
    "border-border/60 text-muted-foreground hover:border-border hover:bg-muted/40",
} as const;

/** Accent-colored hover borders for cards */
export const accentHoverBorder: Record<AccentVariant, string> = {
  violet: "hover:border-accent-violet/40",
  blue: "hover:border-accent-blue/40",
  pink: "hover:border-accent-pink/40",
  cyan: "hover:border-accent-cyan/40",
  success: "hover:border-success/40",
  warning: "hover:border-warning/40",
};

/** Chart series colors mapped to brand tokens */
export const chartSeriesColors = {
  primary: brandColors.violet,
  secondary: brandColors.pink,
  tertiary: brandColors.blue,
  quaternary: brandColors.cyan,
  success: brandColors.success,
} as const;

/** Bar chart fill palette cycling brand colors */
export const barChartPalette = [
  brandColors.blue,
  brandColors.violet,
  brandColors.pink,
] as const;

/** Issue / status chart segments using theme tokens */
export const statusChartColors = {
  resolved: brandColors.success,
  review: brandColors.violet,
  open: brandColors.pink,
} as const;
