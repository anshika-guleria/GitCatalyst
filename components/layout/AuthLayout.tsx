import Link from "next/link";

import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

interface AuthLayoutProps {
  children: React.ReactNode;
  footer?: string;
}

export function AuthLayout({
  children,
  footer = "© 2026 GitCatalyst Platform. Powered by GitHub API.",
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-background p-6 text-foreground">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Logo showText />
        <ThemeToggle />
      </div>

      <div className="mx-auto my-12 w-full max-w-md">{children}</div>

      <div className="text-center text-xs text-muted-foreground">{footer}</div>
    </div>
  );
}
