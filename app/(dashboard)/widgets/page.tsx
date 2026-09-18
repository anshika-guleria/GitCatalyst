"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { PageHeader } from "@/components/shared/PageHeader";
import { WidgetCardTypePicker } from "@/components/widgets/WidgetCardTypePicker";
import { WidgetEmbedPanel } from "@/components/widgets/WidgetEmbedPanel";
import { WidgetOptionsForm } from "@/components/widgets/WidgetOptionsForm";
import { WidgetPreviewPanel } from "@/components/widgets/WidgetPreviewPanel";
import { WidgetThemePicker } from "@/components/widgets/WidgetThemePicker";
import { DEFAULT_USERNAME } from "@/lib/github";
import type { WidgetCardType, WidgetIconStyle, WidgetSize, WidgetTheme } from "@/types/github";

export default function WidgetsPage() {
  const [username, setUsername] = useState(DEFAULT_USERNAME);
  const [selectedType, setSelectedType] = useState<WidgetCardType>("stats");
  const [selectedTheme, setSelectedTheme] = useState<WidgetTheme>("pastel-dream");
  const [statusText, setStatusText] = useState("Building open source tools");
  const [hideBorder, setHideBorder] = useState(false);
  const [selectedSize, setSelectedSize] = useState<WidgetSize>("standard");
  const [showIcons, setShowIcons] = useState(true);
  const [iconStyle, setIconStyle] = useState<WidgetIconStyle>("emoji");

  const rawUrl = `https://gitcatalyst.app/api/widgets/stats?type=${selectedType}&username=${username}&theme=${selectedTheme}&status=${encodeURIComponent(statusText)}&border=${!hideBorder}&size=${selectedSize}&icons=${showIcons}&iconStyle=${iconStyle}`;
  const markdownSnippet = `![GitCatalyst Card](${rawUrl})`;
  const htmlSnippet = `<img src="${rawUrl}" alt="GitCatalyst ${selectedType}" />`;

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title="README Card Builder"
        description="Create embeddable SVG cards for your GitHub profile with real-time stats and themes."
        icon={Sparkles}
        accent="pink"
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <WidgetCardTypePicker selected={selectedType} onSelect={setSelectedType} />
          <WidgetThemePicker selected={selectedTheme} onSelect={setSelectedTheme} />
          <WidgetOptionsForm
            username={username}
            statusText={statusText}
            hideBorder={hideBorder}
            size={selectedSize}
            showIcons={showIcons}
            iconStyle={iconStyle}
            onUsernameChange={setUsername}
            onStatusChange={setStatusText}
            onHideBorderChange={setHideBorder}
            onSizeChange={setSelectedSize}
            onShowIconsChange={setShowIcons}
            onIconStyleChange={setIconStyle}
          />
        </div>

        <div className="space-y-6 lg:col-span-7">
          <WidgetPreviewPanel
            cardType={selectedType}
            username={username}
            theme={selectedTheme}
            statusText={statusText}
            showBorder={!hideBorder}
            size={selectedSize}
            showIcons={showIcons}
            iconStyle={iconStyle}
          />
          <WidgetEmbedPanel
            markdownSnippet={markdownSnippet}
            htmlSnippet={htmlSnippet}
          />
        </div>
      </div>
    </div>
  );
}
