import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";

const principles = [
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
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-16">
        <div>
          <SectionEyebrow className="mb-8">01 — Hakkımda</SectionEyebrow>
          <h2 className="max-w-[600px] text-2xl leading-snug font-bold sm:text-[34px]">
            Kod yazarken sonradan üzerinde çalışmayı zorlaştırmayacak bir yapı kurmaya ve
            yaptığım işi olabildiğince temiz ilerletmeye dikkat ediyorum.
          </h2>
          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-body">
            Frontend alanında kendimi geliştirmeye devam ederken öğrendiğim yeni şeyleri
            projelerimde denemeyi seviyorum. Bir problemi çözerken farklı yolları araştırmak ve
            sonunda daha iyi bir çözüm bulmak, bu işi sevdiğim taraflardan biri.
          </p>
          <a
            href="#"
            className="mt-7 inline-block border-b border-title text-base font-bold text-title transition-colors hover:border-primary hover:text-primary"
          >
            Devamını oku →
          </a>
        </div>

        <div className="flex flex-col">
          {principles.map((item, i) => (
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
