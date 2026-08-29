import Link from "next/link";
import { Container } from "./container";
import { site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Ana sayfa", href: "/" },
];

export function Footer({ withLinks = false }: { withLinks?: boolean }) {
  if (!withLinks) {
    return (
      <footer className="mt-auto border-t border-border py-9">
        <Container className="flex justify-center">
          <p className="text-[13px] text-body">© 2026 {site.name}</p>
        </Container>
      </footer>
    );
  }

  return (
    <footer className="mt-auto border-t border-border py-9">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[13px] text-body">© 2026 {site.name}</p>
        <div className="flex gap-7 text-[13px]">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} href={link.href} className="text-body transition-colors hover:text-title">
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-body transition-colors hover:text-title"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </Container>
    </footer>
  );
}
