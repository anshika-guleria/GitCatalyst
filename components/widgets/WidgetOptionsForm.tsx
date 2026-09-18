"use client";

import { Heart, Sliders } from "lucide-react";

import { FormField, TextInput } from "@/components/shared/FormField";
import { Card } from "@/components/ui/card";
import { accentStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface WidgetOptionsFormProps {
  username: string;
  statusText: string;
  hideBorder: boolean;
  size: "compact" | "standard" | "wide";
  showIcons: boolean;
  iconStyle: "emoji" | "badge" | "minimal";
  onUsernameChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onHideBorderChange: (value: boolean) => void;
  onSizeChange: (value: "compact" | "standard" | "wide") => void;
  onShowIconsChange: (value: boolean) => void;
  onIconStyleChange: (value: "emoji" | "badge" | "minimal") => void;
}

export function WidgetOptionsForm({
  username,
  statusText,
  hideBorder,
  size,
  showIcons,
  iconStyle,
  onUsernameChange,
  onStatusChange,
  onHideBorderChange,
  onSizeChange,
  onShowIconsChange,
  onIconStyleChange,
}: WidgetOptionsFormProps) {
  return (
    <Card className={cn("p-5", accentStyles.blue.border)}>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
        <Sliders className={cn("h-4 w-4", accentStyles.blue.icon)} />
        3. Customize Card Details
      </h2>
      <div className="space-y-3 text-xs">
        <FormField label="Target GitHub Username">
          <TextInput
            compact
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
          />
        </FormField>

        <FormField label="Custom Developer Status" icon={Heart}>
          <TextInput
            compact
            value={statusText}
            onChange={(e) => onStatusChange(e.target.value)}
          />
        </FormField>

        <FormField label="Card Size">
          <select
            value={size}
            onChange={(e) => onSizeChange(e.target.value as "compact" | "standard" | "wide")}
            className="w-full rounded-xl border border-border/60 bg-background px-3 py-2 text-xs text-foreground outline-none"
          >
            <option value="compact">Compact</option>
            <option value="standard">Standard</option>
            <option value="wide">Wide</option>
          </select>
        </FormField>

        <FormField label="Icon Style">
          <select
            value={iconStyle}
            onChange={(e) => onIconStyleChange(e.target.value as "emoji" | "badge" | "minimal")}
            className="w-full rounded-xl border border-border/60 bg-background px-3 py-2 text-xs text-foreground outline-none"
          >
            <option value="emoji">Cute Emojis</option>
            <option value="badge">Soft Badge Icons</option>
            <option value="minimal">Minimal Dot</option>
          </select>
        </FormField>

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-border/60 p-2.5 hover:bg-muted/30">
          <span className="font-medium text-foreground">Show Cute Icons</span>
          <input
            type="checkbox"
            checked={showIcons}
            onChange={(e) => onShowIconsChange(e.target.checked)}
            className="h-4 w-4 rounded border-border text-accent-violet focus:ring-accent-violet"
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-border/60 p-2.5 hover:bg-muted/30">
          <span className="font-medium text-foreground">Hide Card Border</span>
          <input
            type="checkbox"
            checked={hideBorder}
            onChange={(e) => onHideBorderChange(e.target.checked)}
            className="h-4 w-4 rounded border-border text-accent-violet focus:ring-accent-violet"
          />
        </label>
      </div>
    </Card>
  );
}
