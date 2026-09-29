"use client";

import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { MenuIcon, CloseIcon } from "./icons";
import { site } from "@/lib/site";
import { setLang, useLang, type Lang } from "@/lib/language";

const tr = {
  nav: [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımda", href: "/#about" },
    { label: "Projeler", href: "/#projects" },
    { label: "Özgeçmiş", href: "/resume" },
    { label: "İletişim", href: "/#contact" },
  ],
  mainMenu: "Ana menü",
  mobileMenu: "Mobil menü",
  openMenu: "Menüyü aç",
  closeMenu: "Menüyü kapat",
  language: "Dil seçimi",
};

const en: typeof tr = {
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/#contact" },
  ],
  mainMenu: "Main menu",
  mobileMenu: "Mobile menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  language: "Language",
};

const content = { tr, en };
const languages: Lang[] = ["tr", "en"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;
  const lang = useLang();
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Mobil menü açıkken arka sayfa kaymasın, Escape ile kapansın. Layout effect: kilit
  // flushSync ile kapanışta hemen kalksın ki ardından gelen scrollIntoView çalışsın.
  useLayoutEffect(() => {
    if (!open) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const logoRef = useRef<HTMLImageElement>(null);
  const [logoFailed, setLogoFailed] = useState(false);
  // Statik HTML'de görsel hidrasyondan önce hata verirse onError kaçar; mount'ta kontrol et.
  useEffect(() => {
    const img = logoRef.current;
    if (img?.complete && img.naturalWidth === 0) setLogoFailed(true);
  }, []);

  // Anasayfadayken bölüm linklerini kendimiz kaydırıyoruz: adres zaten aynıysa
  // (ör. ikinci kez "Hakkımda") Next hiçbir şey yapmıyor ve sayfa yerinde kalıyordu.
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== "/" || !(href === "/" || href.startsWith("/#"))) {
      setOpen(false);
      return;
    }
    const hash = href.slice(1);
    const target = hash ? document.querySelector(hash) : null;
    if (hash && !target) return;

    e.preventDefault();
    // Menü açıkken sayfa kaydırması kilitli; önce kapatıp kilidi kaldırmazsak kaydırma çalışmıyor.
    flushSync(() => setOpen(false));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0 });
    history.pushState(null, "", `${location.pathname}${hash}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" onClick={(e) => handleClick(e, "/")} className="font-heading text-lg font-bold text-title">
          {logoFailed ? (
            "BÖ"
          ) : (
            // eslint-disable-next-line @next/next/no-img-element -- statik export; next/image string src'ye basePath eklemiyor
            <img
              ref={logoRef}
              src={site.logo}
              alt={site.name}
              onError={() => setLogoFailed(true)}
              className="h-9 w-auto"
            />
          )}
        </Link>

        <nav className="hidden items-center gap-9 sm:flex" aria-label={t.mainMenu}>
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
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
          <div
            role="group"
            aria-label={t.language}
            className="flex overflow-hidden rounded-md border border-border font-heading text-xs font-semibold"
          >
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  lang === code ? "bg-card text-title" : "text-body hover:text-title"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-body sm:hidden"
          >
            {open ? <CloseIcon className="size-[18px]" /> : <MenuIcon className="size-[18px]" />}
          </button>
        </div>
      </Container>

      {open && (
        <>
          {/* Panel akışta olsaydı header'ı uzatıp sayfayı aşağı iterdi; bu yüzden sayfanın üstünde süzülüyor. */}
          <div
            className="fixed inset-x-0 top-16 bottom-0 bg-title/40 sm:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label={t.mobileMenu}
            className="absolute inset-x-0 top-full border-b border-border bg-bg shadow-lg sm:hidden"
          >
            <Container className="flex flex-col gap-1 py-3">
              {t.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-body transition-colors hover:bg-surface hover:text-title"
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </nav>
        </>
      )}
    </header>
  );
}
