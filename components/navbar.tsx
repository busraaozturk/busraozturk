"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { MenuIcon, CloseIcon } from "./icons";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımda", href: "/#about" },
  { label: "Projeler", href: "/#projects" },
  { label: "Özgeçmiş", href: "/resume" },
  { label: "İletişim", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-heading text-lg font-bold text-title">
          BÖ
        </Link>

        <nav className="hidden items-center gap-9 sm:flex" aria-label="Ana menü">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b-2 pb-1.5 text-[15px] font-medium transition-colors ${
                isActive(item.href)
                  ? "border-primary text-title"
                  : "border-transparent text-body hover:text-title"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <div className="hidden overflow-hidden rounded-md border border-border font-heading text-xs font-semibold sm:flex">
            <span className="bg-card px-3 py-1.5 text-title">TR</span>
            <span className="cursor-not-allowed px-3 py-1.5 text-body">EN</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-body sm:hidden"
          >
            {open ? <CloseIcon className="size-[18px]" /> : <MenuIcon className="size-[18px]" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav aria-label="Mobil menü" className="border-t border-border bg-bg sm:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-body transition-colors hover:bg-surface hover:text-title"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
