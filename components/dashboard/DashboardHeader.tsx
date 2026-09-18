"use client";

import { Bell, Check, Menu, RefreshCw, Search } from "lucide-react";
import { useState } from "react";

import { StatusBadge } from "@/components/shared/StatusBadge";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  currentUsername: string;
  onUsernameChange: (newUsername: string) => void;
  onToggleMobileMenu?: () => void;
}

export function DashboardHeader({
  currentUsername,
  onUsernameChange,
  onToggleMobileMenu,
}: DashboardHeaderProps) {
  const [inputVal, setInputVal] = useState(currentUsername);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onUsernameChange(inputVal.trim());
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshed(true);
      setTimeout(() => setRefreshed(false), 2000);
    }, 800);
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={18} />
        </button>

        <form onSubmit={handleSubmit} className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Search GitHub username..."
            className="h-9 w-48 rounded-xl border border-border bg-muted/30 pl-9 pr-14 text-xs font-medium text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-accent-violet focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent-violet/20 sm:w-64"
          />
          <button
            type="submit"
            className="absolute right-1.5 rounded-lg bg-accent-violet px-2 py-1 text-[10px] font-semibold text-primary-foreground transition-colors hover:bg-accent-violet/90"
          >
            Fetch
          </button>
        </form>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          className="hidden h-9 gap-1.5 text-xs text-muted-foreground hover:text-foreground sm:inline-flex"
        >
          <RefreshCw
            className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-accent-violet" : ""}`}
          />
          <span>{refreshed ? "Updated" : "Sync Data"}</span>
          {refreshed && <Check className="ml-0.5 h-3 w-3 text-success" />}
        </Button>

        <StatusBadge
          label="GitHub API Connected"
          variant="success"
          className="hidden lg:flex"
        />

        <ThemeToggle />

        <div className="flex items-center gap-2 border-l border-border pl-3">
          <UserAvatar name={currentUsername} size="sm" />
        </div>
      </div>
    </header>
  );
}
