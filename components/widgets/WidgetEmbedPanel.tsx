"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { accentStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface WidgetEmbedPanelProps {
  markdownSnippet: string;
  htmlSnippet: string;
}

export function WidgetEmbedPanel({ markdownSnippet, htmlSnippet }: WidgetEmbedPanelProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const copyToClipboard = (text: string, formatName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(formatName);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <Card className="space-y-4 p-6">
      <h2 className="flex items-center gap-2 text-sm font-bold text-foreground">
        <Copy className={cn("h-4 w-4", accentStyles.pink.icon)} />
        Copy Embed Code
      </h2>

      <EmbedBlock
        label="Markdown (for GitHub profile README.md)"
        code={markdownSnippet}
        copyLabel={copiedFormat === "markdown" ? "Copied!" : "Copy Markdown"}
        onCopy={() => copyToClipboard(markdownSnippet, "markdown")}
      />

      <EmbedBlock
        label="HTML Tag"
        code={htmlSnippet}
        copyLabel={copiedFormat === "html" ? "Copied!" : "Copy HTML"}
        onCopy={() => copyToClipboard(htmlSnippet, "html")}
      />
    </Card>
  );
}

function EmbedBlock({
  label,
  code,
  copyLabel,
  onCopy,
}: {
  label: string;
  code: string;
  copyLabel: string;
  onCopy: () => void;
}) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs font-semibold text-muted-foreground">
        <span>{label}</span>
        <button
          type="button"
          onClick={onCopy}
          className="flex items-center gap-1 font-bold text-accent-pink hover:text-accent-pink/80"
        >
          <Copy className="h-3.5 w-3.5" />
          {copyLabel}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-2xl border border-border bg-muted/50 p-3.5 font-mono text-[11px] text-foreground">
        {code}
      </pre>
    </div>
  );
}
