"use client";

import { Layers } from "lucide-react";

import { Card } from "@/components/ui/card";
import { accentStyles, pickerStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { widgetCardTypes } from "@/lib/widgets";
import type { WidgetCardType } from "@/types/github";

interface WidgetCardTypePickerProps {
  selected: WidgetCardType;
  onSelect: (type: WidgetCardType) => void;
}

export function WidgetCardTypePicker({ selected, onSelect }: WidgetCardTypePickerProps) {
  return (
    <Card className={cn("p-5", accentStyles.pink.border)}>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
        <Layers className={cn("h-4 w-4", accentStyles.pink.icon)} />
        1. Select Card Type
      </h2>
      <div className="space-y-1.5">
        {widgetCardTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selected === type.id;

          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onSelect(type.id)}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border p-2.5 text-left text-xs transition-all",
                isSelected ? pickerStyles.selected : pickerStyles.unselected
              )}
            >
              <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", accentStyles.pink.icon)} />
              <div className="min-w-0">
                <div className="font-bold text-foreground">{type.name}</div>
                <div className="mt-0.5 text-[11px] leading-4 text-muted-foreground/90">
                  {type.description}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
