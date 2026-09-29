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
  highlightsLabel: "Neler yaptım",
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
        "Bütçe, süre ve ilgi alanlarını 5 adımlı bir sihirbazla toplayıp OpenAI API ile saat saat günlük rota ve bütçe dağılımı oluşturan akışı geliştirdim.",
        "Open-Meteo ile gerçek zamanlı hava durumunu, open.er-api ile 30+ para birimli döviz çeviriciyi API anahtarı gerektirmeden entegre ettim.",
        "Framework kullanmadan, bağımlılıksız vanilla JavaScript ile giriş/kayıt, yorum sistemi ve PDF indirme özelliklerini geliştirdim.",
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
  highlightsLabel: "What I built",
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
        "Built a 5-step wizard that collects budget, duration and interests, then uses the OpenAI API to generate an hour-by-hour daily itinerary with a budget breakdown.",
        "Integrated real-time weather via Open-Meteo and a currency converter for 30+ currencies via open.er-api, with no API keys required.",
        "Built sign-in/sign-up, a comment system and PDF export in dependency-free vanilla JavaScript, without any framework.",
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
            <div
              key={project.slug}
              className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 xl:gap-16"
            >
              {/* Görselin kendi tarayıcı çerçevesi ve arka planı var; üstüne ek çerçeve koymuyoruz. */}
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-2xl border border-border"
                >
                  <Image
                    src={project.image}
                    alt={t.screenshotAlt}
                    placeholder="blur"
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="h-auto w-full"
                  />
                </a>
                <p className="mt-4 text-sm text-body">
                  {project.type} · {project.year}
                </p>
              </div>

              <div>
                <p className="font-heading text-xs font-semibold tracking-[0.12em] text-body uppercase">
                  {t.featuredLabel}
                </p>
                <h3 className="mt-3 text-4xl leading-tight font-bold sm:text-5xl lg:text-[56px]">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">{project.tagline}</p>

                <dl className="mt-8 grid grid-cols-[auto_auto_1fr] gap-x-4 gap-y-3 border-t border-border pt-8 text-[15px] sm:text-base">
                  <dt className="font-heading font-bold text-title">{t.roleLabel}</dt>
                  <dd className="text-body" aria-hidden="true">—</dd>
                  <dd className="text-body">{project.role}</dd>
                  <dt className="font-heading font-bold text-title">{t.focusLabel}</dt>
                  <dd className="text-body" aria-hidden="true">—</dd>
                  <dd className="text-body">{project.focus.join(" · ")}</dd>
                </dl>

                <p className="mt-8 font-heading text-xs font-semibold tracking-[0.12em] text-body uppercase">
                  {t.highlightsLabel}
                </p>
                <ul className="mt-3 flex flex-col gap-2.5 text-[15px] leading-relaxed text-body">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded-full border border-border px-4 py-2 text-sm text-title">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
                  >
                    {t.details} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
