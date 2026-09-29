"use client";

import Link from "next/link";
import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { FileIcon } from "./icons";
import { useLang } from "@/lib/language";

const tr = {
  eyebrow: "05 — Özgeçmiş",
  title: "Deneyim, eğitim ve teknik yeteneklerimin detaylı özeti.",
  subtitle: "Çevrimiçi görüntüleyebilir veya PDF olarak indirebilirsiniz.",
  cta: "Özgeçmişi Görüntüle →",
};

const en: typeof tr = {
  eyebrow: "05 — Resume",
  title: "A detailed summary of my experience, education and technical skills.",
  subtitle: "You can view it online or download it as a PDF.",
  cta: "View Resume →",
};

const content = { tr, en };

export function ResumeBanner() {
  const t = content[useLang()];

  return (
    <section id="resume" className="border-t border-border bg-primary py-14 sm:py-16">
      <Container className="flex flex-col gap-8">
        <SectionEyebrow invert>{t.eyebrow}</SectionEyebrow>
        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          <FileIcon className="h-[52px] w-[46px] shrink-0 text-white" />
          <div className="min-w-[220px] flex-1">
            <p className="text-lg leading-snug font-bold text-white sm:text-xl">{t.title}</p>
            <p className="mt-2 text-sm text-white/85">{t.subtitle}</p>
          </div>
          <Link
            href="/resume"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary-hover px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
