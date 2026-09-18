"use client";

import {
  Check,
  Database,
  Key,
  Save,
  Shield,
  Sun,
} from "lucide-react";
import { useState } from "react";

import { SettingsSection } from "@/components/settings/SettingsSection";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { inputClasses } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function SettingsForm() {
  const [patToken, setPatToken] = useState("");
  const [cacheInterval, setCacheInterval] = useState("3600");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <form onSubmit={handleSave} className="max-w-3xl space-y-6">
      <Card>
        <SettingsSection
          title="GitHub Personal Access Token"
          description="Increases API rate limit from 60 to 5,000 requests per hour."
          icon={Key}
          accent="violet"
        >
          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-muted-foreground">
              Personal Access Token
            </label>
            <input
              type="password"
              value={patToken}
              onChange={(e) => setPatToken(e.target.value)}
              placeholder="ghp_************************************"
              className={cn(inputClasses, "font-mono")}
            />
            <p className="flex items-center gap-1 text-[11px] text-muted-foreground/80">
              <Shield className="h-3 w-3 text-success" />
              Stored locally in browser state. Never sent to third-party servers.
            </p>
          </div>
        </SettingsSection>
      </Card>

      <Card>
        <SettingsSection
          title="Data Fetching & Cache"
          description="Set revalidation frequency to optimize performance and prevent rate limiting."
          icon={Database}
          accent="blue"
        >
          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-muted-foreground">
              Cache Lifespan
            </label>
            <select
              value={cacheInterval}
              onChange={(e) => setCacheInterval(e.target.value)}
              className={cn(inputClasses, "bg-card")}
            >
              <option value="300">5 Minutes (Aggressive Sync)</option>
              <option value="1800">30 Minutes (Balanced)</option>
              <option value="3600">1 Hour (Recommended)</option>
              <option value="86400">24 Hours (Conservative)</option>
            </select>
          </div>
        </SettingsSection>
      </Card>

      <Card>
        <SettingsSection
          title="Theme & Interface"
          description="Switch between Light, Dark, or System mode."
          icon={Sun}
          accent="pink"
          action={<ThemeToggle />}
        />
      </Card>

      <div className="flex items-center gap-3">
        <Button variant="gradient" type="submit" className="gap-2">
          <Save className="h-4 w-4" />
          Save Settings
        </Button>
        {saved && (
          <span className="flex items-center gap-1 text-xs font-semibold text-success">
            <Check className="h-4 w-4" />
            Settings Saved
          </span>
        )}
      </div>
    </form>
  );
}
