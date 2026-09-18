import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";

export function Preview() {
  return (
    <section className="py-9">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Dashboard Preview"
          title="Everything you need to"
          highlight="analyze GitHub"
          description="Beautiful dashboards, interactive charts, repository insights and customizable README widgets—all powered by live GitHub data."
          align="center"
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl">
          <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-border bg-muted/30">
            <p className="text-xl text-muted-foreground">Dashboard Preview</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 text-accent-violet transition hover:text-accent-violet/80"
          >
            Explore the Dashboard
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
