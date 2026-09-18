"use client";

import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

import { FooterColumn } from "@/components/layout/FooterColumn";
import { FooterLink } from "@/components/layout/FooterLink";
import { Logo } from "@/components/shared/Logo";

const productLinks: [string, string][] = [
  ["Analytics", "/analytics"],
  ["README Widgets", "/widgets"],
  ["Dashboard", "/overview"],
  ["Compare Profiles", "/compare"],
];

const resourceLinks: [string, string][] = [
  ["Documentation", "#"],
  ["API", "#"],
  ["Changelog", "#"],
  ["Privacy", "#"],
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-violet/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo size="lg" />
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Transform your GitHub activity into analytics, insights, and
              beautiful developer widgets.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div>
            <h4 className="mb-5 font-semibold">Connect</h4>
            <div className="flex flex-col gap-4">
              <FooterLink
                href="https://github.com"
                icon={<FaGithub size={16} />}
                text="GitHub"
              />
              <FooterLink
                href="https://linkedin.com"
                icon={<FaLinkedin size={16} />}
                text="LinkedIn"
              />
              <FooterLink
                href="mailto:hello@gitcatalyst.dev"
                icon={<Mail size={16} />}
                text="Contact"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 GitCatalyst. Built for developers.</p>
          <p className="flex items-center gap-2">
            Made with
            <Heart size={15} className="fill-accent-pink text-accent-pink" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
