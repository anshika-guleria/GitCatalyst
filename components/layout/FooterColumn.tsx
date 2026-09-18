import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: [string, string][];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-5 font-semibold">{title}</h4>
      <div className="flex flex-col gap-4 text-sm">
        {links.map(([name, href]) => (
          <Link
            key={name}
            href={href}
            className="text-muted-foreground transition hover:text-foreground"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
