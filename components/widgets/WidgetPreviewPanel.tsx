"use client";

import { Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { accentStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { getWidgetTheme } from "@/lib/widget-themes";
import type { WidgetCardType, WidgetIconStyle, WidgetTheme } from "@/types/github";

interface WidgetPreviewPanelProps {
  cardType: WidgetCardType;
  username: string;
  theme: WidgetTheme;
  statusText: string;
  showBorder: boolean;
  size: "compact" | "standard" | "wide";
  showIcons: boolean;
  iconStyle: WidgetIconStyle;
}

export function WidgetPreviewPanel({
  cardType,
  username,
  theme,
  statusText,
  showBorder,
  size,
  showIcons,
  iconStyle,
}: WidgetPreviewPanelProps) {
  const themeConfig = getWidgetTheme(theme);
  const previewUrl = `/api/widgets/stats?type=${cardType}&username=${username}&theme=${theme}&status=${encodeURIComponent(statusText)}&border=${showBorder}&size=${size}&icons=${showIcons}&iconStyle=${iconStyle}`;

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Eye className={cn("h-4 w-4", accentStyles.success.icon)} />
          Live SVG Preview
        </h2>
        <Badge variant="pink" size="sm">
          Theme: {themeConfig.name}
        </Badge>
      </div>

      <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/40 p-6">
        <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.01]">
          <img
            src={previewUrl}
            alt={`GitCatalyst ${cardType} card`}
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </Card>
  );
}
