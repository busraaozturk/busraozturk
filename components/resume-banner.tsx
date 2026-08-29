import Link from "next/link";
import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { FileIcon } from "./icons";

export function ResumeBanner() {
  return (
    <section id="resume" className="border-t border-border bg-primary py-14 sm:py-16">
      <Container className="flex flex-col gap-8">
        <SectionEyebrow invert>04 — Özgeçmiş</SectionEyebrow>
        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          <FileIcon className="h-[52px] w-[46px] shrink-0 text-white" />
          <div className="min-w-[220px] flex-1">
            <p className="text-lg leading-snug font-bold text-white sm:text-xl">
              Deneyim, eğitim ve teknik yeteneklerimin detaylı özeti.
            </p>
            <p className="mt-2 text-sm text-white/85">
              Çevrimiçi görüntüleyebilir veya PDF olarak indirebilirsiniz.
            </p>
          </div>
          <Link
            href="/resume"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary-hover px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Özgeçmişi Görüntüle →
          </Link>
        </div>
      </Container>
    </section>
  );
}
