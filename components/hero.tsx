import Link from "next/link";
import { Container } from "./container";
import { HeroGraphic } from "./hero-graphic";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-sm font-bold tracking-[0.04em] text-primary">Merhaba, ben</p>

          <h1 className="mt-3 text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-[76px]">
            {site.name}
          </h1>
          <p className="mt-3 font-heading text-lg font-medium text-primary sm:text-xl">
            {site.role}
          </p>

          <div className="my-6 h-0.5 w-10 bg-accent" aria-hidden="true" />
          <p className="max-w-[480px] text-base leading-relaxed text-body sm:text-lg">
            Kullanımı kolay, sade ve anlaşılır web arayüzleri geliştirmeyi seviyorum. Bir proje
            geliştirirken sadece kodun düzgün çalışmasına değil, ortaya çıkan işin nasıl
            göründüğüne ve kullanıcıya nasıl hissettirdiğine de önem veriyorum.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Projeleri görüntüle →
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-lg border border-border px-6 py-3.5 text-[15px] font-semibold text-title transition-colors hover:border-title"
            >
              Özgeçmiş
            </Link>
          </div>
        </div>

        <HeroGraphic className="hidden lg:block" />
      </Container>
    </section>
  );
}
