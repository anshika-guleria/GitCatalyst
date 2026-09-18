import { cn } from "@/lib/utils";
import { inputClasses } from "@/lib/theme";

interface FormFieldProps {
  label: string;
  icon?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}

export function FormField({ label, icon: Icon, children, className }: FormFieldProps) {
  return (
    <label className={cn("block rounded-2xl border border-border/60 p-2.5", className)}>
      <span className="mb-1 flex items-center gap-1 text-xs font-semibold text-foreground">
        {Icon && <Icon className="h-3 w-3 text-accent-violet" />}
        {label}
      </span>
      {children}
    </label>
  );
}

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  compact?: boolean;
}

export function TextInput({ className, compact, ...props }: TextInputProps) {
  return (
    <input
      className={cn(
        inputClasses,
        compact && "h-8 rounded-xl px-3",
        className
      )}
      {...props}
    />
  );
}
