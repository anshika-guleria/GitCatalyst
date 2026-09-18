"use client";

import {
  ArrowLeftRight,
  BarChart3,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/shared/Logo";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/theme";

const navigation = [
  { name: "Overview", href: "/overview", icon: LayoutDashboard, badge: "Main" },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Profile Insights", href: "/profile", icon: User },
  { name: "Widgets & README", href: "/widgets", icon: Sparkles, badge: "New" },
  { name: "Compare Matrix", href: "/compare", icon: ArrowLeftRight },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface DashboardSidebarProps {
  currentUsername: string;
  className?: string;
  onNavigate?: () => void;
}

export function DashboardSidebar({
  currentUsername,
  className,
  onNavigate,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r border-border bg-card/60 backdrop-blur-xl transition-all",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-5">
        <Logo href="/" />
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-6">
        <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Platform Menu
        </div>

        <nav className="space-y-1.5">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/overview" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "group relative flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "border border-accent-violet/20 bg-accent-violet/10 font-semibold text-accent-violet shadow-sm"
                    : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive
                        ? "text-accent-violet"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  <span>{item.name}</span>
                </div>

                {item.badge && (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide",
                      item.badge === "New"
                        ? `${brandGradients.badge} text-primary-foreground`
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-border bg-muted/20 p-3">
        <div className="flex items-center justify-between rounded-xl border border-border/80 bg-card p-3">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <UserAvatar name={currentUsername} size="sm" />
            <div className="truncate">
              <p className="truncate text-xs font-semibold text-foreground">
                @{currentUsername}
              </p>
              <p className="truncate text-[10px] text-muted-foreground">Active Target</p>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      </div>

      <div className="border-t border-border p-3">
        <Link
          href="/auth/login"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          <span>Switch Account / Auth</span>
        </Link>
      </div>
    </aside>
  );
}
