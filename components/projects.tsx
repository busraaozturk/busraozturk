"use client";

import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { site } from "@/lib/site";
import { useLang } from "@/lib/language";

const tr = {
  eyebrow: "02 — Seçili Projeler",
  seeAll: "Tümünü gör →",
  roleLabel: "Rol — ",
  techLabel: "Teknolojiler — ",
  details: "Projeyi incele →",
  featured: [
    {
      slug: "travelmind-ai",
      title: "TravelMind AI",
      tagline:
        "Kullanıcı tercihlerine göre kişiselleştirilmiş gezi planları öneren yapay zeka destekli bir uygulama.",
      role: "Frontend Geliştirme",
      tech: "React · TypeScript · Tailwind CSS · OpenAI API",
      initials: "TR",
    },
  ],
};

const en: typeof tr = {
  eyebrow: "02 — Selected Projects",
  seeAll: "See all →",
  roleLabel: "Role — ",
  techLabel: "Technologies — ",
  details: "View project →",
  featured: [
    {
      slug: "travelmind-ai",
      title: "TravelMind AI",
      tagline: "An AI-powered app that suggests personalized travel plans based on user preferences.",
      role: "Frontend Development",
      tech: "React · TypeScript · Tailwind CSS · OpenAI API",
      initials: "TR",
    },
  ],
};

const content = { tr, en };

export function Projects() {
  const t = content[useLang()];

  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-3 sm:mb-16">
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

        <div className="flex flex-col gap-16 sm:gap-24">
          {t.featured.map((project, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <div key={project.slug} className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
                <div
                  className={`aspect-[4/3] overflow-hidden border border-border bg-card ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    className="flex size-full items-center justify-center font-heading text-2xl font-medium tracking-wide text-body/60"
                    aria-hidden="true"
                  >
                    {project.initials}
                  </div>
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <h3 className="text-3xl font-bold sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-body">{project.tagline}</p>
                  <p className="mt-6 text-sm text-body">
                    <span className="font-bold text-title">{t.roleLabel}</span>
                    {project.role}
                  </p>
                  <p className="mt-1.5 text-sm text-body">
                    <span className="font-bold text-title">{t.techLabel}</span>
                    {project.tech}
                  </p>
                  <span className="mt-6 inline-block border-b border-title text-sm font-semibold text-title">
                    {t.details}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
