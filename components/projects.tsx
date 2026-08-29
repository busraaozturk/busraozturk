import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { site } from "@/lib/site";

const featured = [
  {
    slug: "travelmind-ai",
    title: "TravelMind AI",
    tagline:
      "Kullanıcı tercihlerine göre kişiselleştirilmiş gezi planları öneren yapay zeka destekli bir uygulama.",
    role: "Frontend Geliştirme",
    tech: "React · TypeScript · Tailwind CSS · OpenAI API",
    initials: "TR",
  },
  {
    slug: "gkaretech",
    title: "GkareTECH",
    tagline:
      "Kurumsal hizmetler sunan bir teknoloji şirketi için geliştirilen tanıtım ve yönetim platformu.",
    role: "Frontend Geliştirme",
    tech: "React · Bootstrap · .NET · REST API",
    initials: "GK",
  },
];

const secondary = [
  {
    title: "Portfolio",
    tagline: "Kişisel portfolyo sitesi.",
    tech: "React · Tailwind CSS",
  },
  {
    title: "İnsan Kaynakları Yönetim Sistemi",
    tagline: "Çalışan ve işe alım süreçlerini yöneten kurumsal panel.",
    tech: "React · .NET · REST API",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-3 sm:mb-16">
          <SectionEyebrow>02 — Seçili Projeler</SectionEyebrow>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-title transition-colors hover:text-primary"
          >
            Tümünü gör →
          </a>
        </div>

        <div className="flex flex-col gap-16 sm:gap-24">
          {featured.map((project, i) => {
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
                    <span className="font-bold text-title">Rol — </span>
                    {project.role}
                  </p>
                  <p className="mt-1.5 text-sm text-body">
                    <span className="font-bold text-title">Teknolojiler — </span>
                    {project.tech}
                  </p>
                  <span className="mt-6 inline-block border-b border-title text-sm font-semibold text-title">
                    Projeyi incele →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-8 sm:mt-20">
          <p className="mb-6 text-xs font-semibold tracking-[0.06em] text-body uppercase">Diğer Projeler</p>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            {secondary.map((project) => (
              <div key={project.title} className="flex flex-1 items-center justify-between gap-4">
                <div>
                  <div className="font-heading text-base font-semibold text-title">{project.title}</div>
                  <div className="mt-1.5 text-sm text-body">{project.tagline}</div>
                  <div className="mt-2 text-[13px] font-semibold text-primary">{project.tech}</div>
                </div>
                <span className="shrink-0 text-lg text-body" aria-hidden="true">→</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
