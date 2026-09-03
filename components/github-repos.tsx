import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import {
  FolderIcon,
  SeedlingIcon,
  NoteIcon,
  BranchIcon,
  BookIcon,
  CodeIcon,
  BracesIcon,
  UserIcon,
  MountainIcon,
  RingIcon,
  StarIcon,
  EnvelopeIcon,
  HeartIcon,
  CurvedArrowIcon,
} from "./icons";
import { site } from "@/lib/site";

/**
 * Vitrin projeleri hazırlanana kadar, öğrenme sürecimde tuttuğum notları ve
 * pratik denemelerimi burada tanıtıyorum — amaç reklam değil, aynı yoldan
 * geçen yeni başlayanlara bir yön göstermek.
 */
function repoUrl(name: string) {
  return `${site.github}/${name}`;
}

const notesRepo = {
  name: "CalismaNotlarim",
  description:
    "Web geliştirme sürecinde öğrendiğim konuları, ihtiyaç duyduğumda yeniden dönebileceğim şekilde bir araya getirdiğim kişisel çalışma notlarım.",
  contents: [
    { icon: BookIcon, label: "Temel Konular" },
    { icon: BranchIcon, label: "Git & GitHub" },
    { icon: CodeIcon, label: "HTML & CSS" },
    { icon: BracesIcon, label: "JavaScript" },
  ],
};

const practiceRepo = {
  name: "HTML-CSS-JS",
  description:
    "HTML, CSS ve JavaScript ile hazırladığım küçük uygulamaları ve arayüz denemelerini bir arada tuttuğum pratik alanım.",
  tags: ["HTML", "CSS", "JavaScript"],
};

export function GithubRepos() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <SectionEyebrow>02 — Öğrenirken Paylaştıklarım</SectionEyebrow>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-title transition-colors hover:text-primary"
          >
            GitHub profilim →
          </a>
        </div>

        <h2 className="max-w-2xl text-3xl leading-snug font-bold sm:text-4xl">
          Öğrenirken ürettiklerimi paylaşıyorum.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
          Çalışma notlarımı ve küçük uygulamalarımı, aynı yoldan geçenlere kaynak ve başlangıç
          noktası olması için GitHub&apos;da açık tutuyorum.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-2 text-sm text-body">
            <FolderIcon className="size-[18px] text-primary" />
            02 açık repo
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
          <span className="flex items-center gap-2 text-sm text-body">
            <SeedlingIcon className="size-[18px] text-primary" />
            Temelden pratiğe
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
          <span className="flex items-center gap-2 text-sm text-body">
            <NoteIcon className="size-[18px] text-primary" />
            Notlar ve uygulamalar
          </span>
        </div>

        {/* Panel */}
        <div className="relative mt-12 rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(38,37,31,0.04),0_12px_28px_-16px_rgba(38,37,31,0.18)] sm:mt-16 sm:p-9 xl:p-12">
          <div
            className="absolute top-8 bottom-8 left-3 hidden w-1.5 flex-col items-center justify-between sm:flex"
            aria-hidden="true"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="size-1.5 shrink-0 rounded-full bg-border" />
            ))}
          </div>

          <div className="absolute top-0 right-0 flex size-11 items-center justify-center rounded-tr-2xl rounded-bl-2xl border-b border-l border-border bg-surface">
            <BranchIcon className="size-4 text-primary" />
          </div>

          <div className="sm:px-6">
            <p className="text-xs font-semibold tracking-[0.1em] text-body uppercase">
              Öğrenme Arşivim
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-title sm:text-2xl">
                Nereden başlamak istersin?
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-surface px-4 py-2.5 text-sm font-semibold text-title">
                  <BookIcon className="size-4 text-primary" />
                  Konuları incelemek istiyorum
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-body">
                  <CodeIcon className="size-4 text-body" />
                  Uygulayarak öğrenmek istiyorum
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <p className="text-center text-sm text-body">
                İhtiyacına uygun repoyu seçerek ilerleyebilirsin.
              </p>
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="h-8 border-l border-dashed border-border" aria-hidden="true" />
            </div>

            <div className="grid items-stretch gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
              {/* Notes repo card */}
              <div className="flex flex-col rounded-xl border border-border bg-bg p-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span
                      className="font-heading text-5xl leading-none font-bold text-border select-none"
                      aria-hidden="true"
                    >
                      01
                    </span>
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                      <FolderIcon className="size-5 text-primary" />
                    </div>
                  </div>

                  <span className="mt-4 inline-block rounded-full bg-surface px-3 py-1 text-[11px] font-semibold tracking-[0.05em] text-body uppercase">
                    01 · Notlar
                  </span>

                  <h4 className="mt-3 font-mono text-lg font-bold text-title">{notesRepo.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{notesRepo.description}</p>

                  <p className="mt-5 text-[11px] font-semibold tracking-[0.08em] text-body uppercase">
                    İçerikler
                  </p>
                  <div className="mt-2 flex flex-col gap-2.5 rounded-lg border border-border bg-card p-3.5">
                    {notesRepo.contents.map((item) => (
                      <span key={item.label} className="flex items-center gap-2.5 text-sm text-title">
                        <item.icon className="size-4 shrink-0 text-primary" />
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={repoUrl(notesRepo.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Çalışma notlarını incele ↗
                </a>
              </div>

              {/* Practice repo card */}
              <div className="flex flex-col rounded-xl border border-border bg-bg p-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span
                      className="font-heading text-5xl leading-none font-bold text-border select-none"
                      aria-hidden="true"
                    >
                      02
                    </span>
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                      <CodeIcon className="size-5 text-primary" />
                    </div>
                  </div>

                  <span className="mt-4 inline-block rounded-full bg-surface px-3 py-1 text-[11px] font-semibold tracking-[0.05em] text-body uppercase">
                    02 · Uygulamalar
                  </span>

                  <h4 className="mt-3 font-mono text-lg font-bold text-title">{practiceRepo.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{practiceRepo.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {practiceRepo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-2.5">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface">
                        <UserIcon className="size-3.5 text-primary" />
                      </span>
                      <div className="flex flex-1 flex-col gap-1">
                        <span className="h-1.5 w-3/4 rounded-full bg-border" />
                        <span className="h-1.5 w-1/2 rounded-full bg-border" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg border border-border bg-title p-2.5">
                      <MountainIcon className="size-5 text-card/70" />
                    </div>
                    <div className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card p-2.5">
                      <RingIcon className="size-4 text-body" />
                      <StarIcon className="size-4 text-body" />
                    </div>
                    <div className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card p-2.5">
                      <EnvelopeIcon className="size-4 text-body" />
                      <HeartIcon className="size-4 text-body" />
                    </div>
                  </div>
                </div>

                <a
                  href={repoUrl(practiceRepo.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Uygulamaları incele ↗
                </a>
              </div>
            </div>

            <div className="mt-3 hidden grid-cols-2 gap-8 lg:gap-12 xl:grid">
              <div className="-rotate-2 flex items-start gap-1.5 pl-1 text-primary/70" aria-hidden="true">
                <CurvedArrowIcon className="size-6 shrink-0" />
                <span className="font-hand text-lg leading-tight">Konu konu ilerlemek için</span>
              </div>
              <div
                className="flex items-start justify-end gap-1.5 rotate-2 pr-1 text-right text-primary/70"
                aria-hidden="true"
              >
                <span className="font-hand text-lg leading-tight">Öğrendiklerini pekiştirmek için</span>
                <CurvedArrowIcon className="size-6 shrink-0 -scale-x-100" />
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-body sm:mt-14">
              <SeedlingIcon className="size-4 text-primary" />
              <span>İncele · Dene · Kendi yaklaşımını geliştir</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
