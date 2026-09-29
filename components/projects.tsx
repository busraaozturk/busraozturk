"use client";

import Image from "next/image";
import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { site } from "@/lib/site";
import { useLang } from "@/lib/language";
import travelmindShot from "@/public/images/projects/travelmind.png";

const travelmind = {
  slug: "travelmind-ai",
  title: "TravelMind AI",
  image: travelmindShot,
  liveUrl: "https://busraaozturk.github.io/TravelMindAI/",
  tech: ["HTML", "CSS", "JavaScript", "OpenAI API", "Open-Meteo API"],
  year: "2026",
};

const tr = {
  eyebrow: "02 — Projeler",
  seeAll: "Tümünü gör →",
  featuredLabel: "Öne Çıkan Proje",
  roleLabel: "Rol",
  focusLabel: "Odak",
  techLabel: "Kullanılan teknolojiler",
  highlightsLabel: "Neler yaptım",
  highlightsSummary: "Tasarım · Geliştirme · Entegrasyon",
  details: "Projeyi incele",
  screenshotAlt: "TravelMind AI ana sayfasının ekran görüntüsü",
  featured: [
    {
      ...travelmind,
      tagline:
        "Gerçek verileri kullanıcı tercihleriyle birleştirerek kişiselleştirilmiş seyahat planları oluşturan yapay zekâ destekli web uygulaması.",
      role: "UI tasarımı & Frontend geliştirme",
      focus: ["Kişiselleştirme", "Kullanıcı deneyimi", "Responsive yapı"],
      highlights: [
        {
          title: "Planlama akışı",
          text: "Bütçe, süre ve ilgi alanlarını toplayan 5 adımlı sihirbazı; saatlik rota ve bütçe dağılımı üretecek şekilde geliştirdim.",
        },
        {
          title: "Gerçek veri entegrasyonları",
          text: "Open-Meteo hava durumu ve 30+ para birimini destekleyen döviz servislerini API anahtarı gerektirmeden entegre ettim.",
        },
        {
          title: "Bağımsız frontend yapısı",
          text: "Vanilla JavaScript ile giriş/kayıt, yorum sistemi ve PDF indirme özelliklerini bağımlılıksız olarak geliştirdim.",
        },
      ],
      type: "Web uygulaması",
    },
  ],
};

const en: typeof tr = {
  eyebrow: "02 — Projects",
  seeAll: "See all →",
  featuredLabel: "Featured Project",
  roleLabel: "Role",
  focusLabel: "Focus",
  techLabel: "Technologies used",
  highlightsLabel: "What I built",
  highlightsSummary: "Design · Development · Integration",
  details: "View project",
  screenshotAlt: "Screenshot of the TravelMind AI homepage",
  featured: [
    {
      ...travelmind,
      tagline:
        "An AI-powered web app that combines real-world data with user preferences to create personalized travel plans.",
      role: "UI design & Frontend development",
      focus: ["Personalization", "User experience", "Responsive layout"],
      highlights: [
        {
          title: "Planning flow",
          text: "Built a 5-step wizard that collects budget, duration and interests, then generates an hourly itinerary and budget breakdown.",
        },
        {
          title: "Real-data integrations",
          text: "Integrated Open-Meteo weather and a currency service supporting 30+ currencies, with no API keys required.",
        },
        {
          title: "Standalone frontend",
          text: "Built sign-in/sign-up, a comment system and PDF export in vanilla JavaScript with zero dependencies.",
        },
      ],
      type: "Web app",
    },
  ],
};

const content = { tr, en };

export function Projects() {
  const t = content[useLang()];

  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-3 sm:mb-14">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-title transition-colors hover:text-primary"
          >
            {t.seeAll}
          </a>
        </div>

        <div className="flex flex-col gap-20 sm:gap-24">
          {t.featured.map((project) => (
            <div key={project.slug}>
              <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 xl:gap-16">
                {/* lg'de satır yüksekliğini metin sütunu belirler; görsel mutlak konumlanıp bu yüksekliği doldurur. */}
                <div className="flex flex-col">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block rounded-2xl border border-border bg-surface p-2.5 transition-colors hover:border-accent sm:p-3 lg:min-h-80 lg:flex-1"
                  >
                    <div className="lg:absolute lg:inset-3">
                      <Image
                        src={project.image}
                        alt={t.screenshotAlt}
                        placeholder="blur"
                        sizes="(min-width: 1024px) 640px, 100vw"
                        className="h-auto w-full rounded-xl border border-border lg:h-full lg:object-cover lg:object-top"
                      />
                    </div>
                  </a>
                  <p className="mt-4 text-sm text-body">
                    {project.type} · {project.year}
                  </p>
                </div>

                <div>
                  <p className="font-heading text-xs font-semibold tracking-[0.12em] text-body uppercase">
                    {t.featuredLabel}
                  </p>
                  <h3 className="mt-1.5 text-4xl leading-tight font-bold sm:text-5xl lg:text-[56px]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-normal text-body sm:text-lg">
                    {project.tagline}
                  </p>

                  <dl className="mt-4 grid grid-cols-[auto_auto_1fr] gap-x-4 gap-y-1.5 border-t border-border pt-4 text-[15px] sm:text-base">
                    <dt className="font-heading font-bold text-title">
                      {t.roleLabel}
                    </dt>
                    <dd className="text-body" aria-hidden="true">
                      —
                    </dd>
                    <dd className="text-body">{project.role}</dd>
                    <dt className="font-heading font-bold text-title">
                      {t.focusLabel}
                    </dt>
                    <dd className="text-body" aria-hidden="true">
                      —
                    </dd>
                    <dd className="text-body">{project.focus.join(" · ")}</dd>
                  </dl>

                  <p className="mt-4 font-heading text-xs font-semibold tracking-[0.12em] text-body uppercase">
                    {t.techLabel}
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-surface px-3.5 py-1.5 text-[13px] font-medium text-title"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-border pt-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 rounded-lg bg-title py-2 pr-2 pl-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary"
                    >
                      {t.details}
                      <span
                        aria-hidden="true"
                        className="grid size-9 place-items-center rounded-md bg-white/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-5 sm:mt-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-heading text-xs font-bold tracking-[0.12em] text-title uppercase">
                    {t.highlightsLabel}
                  </p>
                  <p className="text-sm text-body">{t.highlightsSummary}</p>
                </div>
                {/* Ayırıcı çizgiler kartın üst/alt kenarına değmesin diye dikey boşluk li'de değil ol'da. */}
                <ol className="mt-3 grid gap-5 rounded-xl border border-border bg-card py-5 md:grid-cols-3 md:gap-0">
                  {project.highlights.map((item, i) => (
                    <li
                      key={item.title}
                      className="border-t border-border px-6 pt-5 first:border-t-0 first:pt-0 sm:px-10 md:border-t-0 md:border-l md:pt-0 md:first:border-l-0"
                    >
                      <span className="font-heading text-sm font-medium text-body">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                      <p className="mt-1 text-[15px] leading-relaxed text-body">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
