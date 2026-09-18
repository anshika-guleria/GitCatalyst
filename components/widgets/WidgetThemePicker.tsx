"use client";

import { Check, Palette } from "lucide-react";

import { Card } from "@/components/ui/card";
import { accentStyles, pickerStyles } from "@/lib/theme";
import { widgetThemes } from "@/lib/widget-themes";
import type { WidgetTheme } from "@/types/github";
import { cn } from "@/lib/utils";

interface WidgetThemePickerProps {
  selected: WidgetTheme;
  onSelect: (theme: WidgetTheme) => void;
}

export function WidgetThemePicker({ selected, onSelect }: WidgetThemePickerProps) {
  return (
    <Card className={cn("p-5", accentStyles.violet.border)}>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
        <Palette className={cn("h-4 w-4", accentStyles.violet.icon)} />
        2. Choose Theme Preset
      </h2>
      <div className="grid grid-cols-2 gap-2.5">
        {widgetThemes.map((theme) => {
          const isSelected = selected === theme.id;

          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => onSelect(theme.id)}
              className={cn(
                "flex items-center justify-between rounded-2xl border p-2.5 text-xs transition-all",
                isSelected ? pickerStyles.selected : pickerStyles.unselected
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "h-3.5 w-3.5 rounded-full bg-gradient-to-r shadow-xs",
                    theme.preview.accent
                  )}
                />
                <span className="truncate">{theme.name}</span>
              </div>
              {isSelected && (
                <Check className={cn("h-3.5 w-3.5 shrink-0", accentStyles.violet.icon)} />
              )}
            </button>
          );
        })}
      </div>
    </Card>
  );
}
