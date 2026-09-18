import { ExternalLink } from "lucide-react";

interface FooterLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export function FooterLink({ href, icon, text }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
    >
      {icon}
      {text}
      <ExternalLink size={12} />
    </a>
  );
}
