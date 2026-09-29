"use client";

import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { useLang } from "@/lib/language";

const tr = {
  eyebrow: "01 — Hakkımda",
  heading:
    "Kod yazarken sonradan üzerinde çalışmayı zorlaştırmayacak bir yapı kurmaya ve yaptığım işi olabildiğince temiz ilerletmeye dikkat ediyorum.",
  body: "Frontend alanında kendimi geliştirmeye devam ederken öğrendiğim yeni şeyleri projelerimde denemeyi seviyorum. Bir problemi çözerken farklı yolları araştırmak ve sonunda daha iyi bir çözüm bulmak, bu işi sevdiğim taraflardan biri.",
  principles: [
    {
      title: "Detaylara Özen",
      body: "Küçük detayların ortaya çıkan işi daha iyi hale getirdiğini düşünüyorum.",
    },
    {
      title: "Gelişime Açıklık",
      body: "Yeni şeyler öğrenmeyi ve öğrendiklerimi projelerimde denemeyi seviyorum.",
    },
    {
      title: "Sürdürülebilirlik",
      body: "Sonradan geliştirmesi ve üzerinde çalışması kolay yapılar oluşturmaya dikkat ediyorum.",
    },
  ],
};

const en: typeof tr = {
  eyebrow: "01 — About",
  heading:
    "When I write code, I aim to build a structure that stays easy to work on later and to keep my work as clean as possible.",
  body: "As I keep growing in frontend development, I enjoy trying out what I learn in my projects. Exploring different approaches to a problem and finally landing on a better solution is one of the things I love most about this work.",
  principles: [
    {
      title: "Attention to Detail",
      body: "I believe small details are what make the final result better.",
    },
    {
      title: "Open to Growth",
      body: "I enjoy learning new things and putting them into practice in my projects.",
    },
    {
      title: "Maintainability",
      body: "I focus on building structures that are easy to extend and work on later.",
    },
  ],
};

const content = { tr, en };

export function About() {
  const t = content[useLang()];

  return (
    <section id="about" className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-16">
        <div>
          <SectionEyebrow className="mb-8">{t.eyebrow}</SectionEyebrow>
          <h2 className="max-w-[600px] text-2xl leading-snug font-bold sm:text-[34px]">{t.heading}</h2>
          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-body">{t.body}</p>
        </div>

        <div className="flex flex-col">
          {t.principles.map((item, i) => (
            <div key={item.title} className={`flex flex-col gap-2 py-5 ${i > 0 ? "border-t border-border" : ""}`}>
              <div className="flex items-center gap-2.5">
                <span className="size-[7px] shrink-0 bg-primary" aria-hidden="true" />
                <span className="font-heading text-base font-semibold text-title">{item.title}</span>
              </div>
              <p className="pl-[17px] text-sm text-body">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
