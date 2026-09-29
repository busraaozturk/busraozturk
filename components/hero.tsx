"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import heroBg from "@/public/hero-bg.jpg";
import { site } from "@/lib/site";
import { useLang } from "@/lib/language";

const tr = {
  greeting: "Merhaba, ben",
  intro:
    "3 yıllık yazılım geliştirme deneyimiyle web ve e-ticaret projeleri geliştiriyorum. Kullanımı kolay, sade ve anlaşılır arayüzler kurmayı seviyorum; sadece kodun düzgün çalışmasına değil, ortaya çıkan işin kullanıcıya nasıl hissettirdiğine de önem veriyorum.",
  projects: "Projeleri görüntüle →",
  resume: "Özgeçmiş",
};

const en: typeof tr = {
  greeting: "Hi, I'm",
  intro:
    "With 3 years of software development experience, I build web and e-commerce projects. I love creating interfaces that are simple, clear and easy to use, and I care not only about the code working correctly but also about how the result feels to the user.",
  projects: "View projects →",
  resume: "Resume",
};

const content = { tr, en };

export function Hero() {
  const t = content[useLang()];

  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border">
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      {/* Görselin sol tarafı zaten boş; dar ekranlarda laptop metnin altına girdiği için okunurluğu koruyan bir perde. */}
      <div
        className="absolute inset-0 -z-10 bg-bg/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-bg/70 lg:via-transparent"
        aria-hidden="true"
      />
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.04em] text-primary">{t.greeting}</p>

          <h1 className="mt-3 text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-[76px]">
            {site.name}
          </h1>
          <p className="mt-3 font-heading text-lg font-medium text-primary sm:text-xl">
            {site.role}
          </p>

          <div className="my-6 h-0.5 w-10 bg-accent" aria-hidden="true" />
          <p className="max-w-[480px] text-base leading-relaxed text-body sm:text-lg">{t.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {t.projects}
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-lg border border-primary bg-card/80 px-6 py-3.5 text-[15px] font-semibold text-primary backdrop-blur-sm"
            >
              {t.resume}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
