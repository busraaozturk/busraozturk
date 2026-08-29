import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { EnvelopeIcon, NetworkIcon, CodeIcon } from "./icons";
import { site } from "@/lib/site";

export function Contact() {
  const cards = [
    { label: "E-posta", value: site.email, href: `mailto:${site.email}`, Icon: EnvelopeIcon },
    { label: "LinkedIn", value: "linkedin.com/in/busraoozturk", href: site.linkedin, Icon: NetworkIcon },
    { label: "GitHub", value: "github.com/busraaozturk", href: site.github, Icon: CodeIcon },
  ];

  return (
    <section id="contact" className="border-t border-border bg-surface py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
        <div>
          <SectionEyebrow className="mb-6">05 — İletişim</SectionEyebrow>
          <p className="max-w-[340px] text-lg leading-relaxed text-title">
            Profesyonel fırsatlar ve iş birlikleri için memnuniyetle görüşürüm. Sizin için en
            rahat olan kanaldan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group relative flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5 text-title transition-colors hover:border-primary"
            >
              <Icon className="size-5 text-primary" />
              <span
                className="absolute top-4 right-4 text-sm text-body transition-colors group-hover:text-primary"
                aria-hidden="true"
              >
                ↗
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-heading text-[15px] font-semibold text-title">{label}</span>
                <span className="text-[13px] text-body">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
