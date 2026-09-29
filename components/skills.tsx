"use client";

import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { CodeIcon, PaletteIcon, DatabaseIcon, WrenchIcon } from "./icons";
import { useLang } from "@/lib/language";

// Yalnızca iş deneyiminde veya projelerde kullanılmış teknolojiler; özgeçmişle tutarlı kalmalı.
const tr = {
  eyebrow: "04 — Teknik Beceriler",
  groups: [
    { title: "Frontend", icon: CodeIcon, items: ["HTML", "CSS", "JavaScript", "Razor View"] },
    { title: "UI & Bileşenler", icon: PaletteIcon, items: ["Bootstrap", "DevExtreme", "Tailwind CSS"] },
    { title: "Backend & Veri", icon: DatabaseIcon, items: ["C#", "ASP.NET MVC", "MS SQL Server", "REST API"] },
    { title: "Araçlar & Süreç", icon: WrenchIcon, items: ["Git & GitHub", "Azure DevOps", "Figma", "Postman"] },
  ],
  learningLabel: "Şu an geliştirdiğim",
  learning: ["React", "Next.js", "TypeScript"],
};

const en: typeof tr = {
  eyebrow: "04 — Technical Skills",
  groups: [
    { title: "Frontend", icon: CodeIcon, items: ["HTML", "CSS", "JavaScript", "Razor View"] },
    { title: "UI & Components", icon: PaletteIcon, items: ["Bootstrap", "DevExtreme", "Tailwind CSS"] },
    { title: "Backend & Data", icon: DatabaseIcon, items: ["C#", "ASP.NET MVC", "MS SQL Server", "REST API"] },
    { title: "Tools & Workflow", icon: WrenchIcon, items: ["Git & GitHub", "Azure DevOps", "Figma", "Postman"] },
  ],
  learningLabel: "Currently learning",
  learning: ["React", "Next.js", "TypeScript"],
};

const content = { tr, en };

export function Skills() {
  const t = content[useLang()];

  return (
    <section id="skills" className="border-t border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionEyebrow className="mb-10 sm:mb-14">{t.eyebrow}</SectionEyebrow>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {t.groups.map((group, i) => (
            <div key={group.title} className={i > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}>
              <div className="flex items-center gap-2.5">
                <group.icon className="size-[18px] text-primary" />
                <span className="font-heading text-base font-bold text-title">{group.title}</span>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-body">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <span className="font-heading text-xs font-semibold tracking-[0.08em] text-body uppercase">
            {t.learningLabel}
          </span>
          {t.learning.map((item) => (
            <span key={item} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-title">
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
