import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { CodeIcon, PaletteIcon, DatabaseIcon, WrenchIcon } from "./icons";

const groups = [
  { title: "Frontend", icon: CodeIcon, items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "UI & Styling", icon: PaletteIcon, items: ["Tailwind CSS", "Bootstrap"] },
  { title: "Backend & Data", icon: DatabaseIcon, items: [".NET", "REST API"] },
  { title: "Araçlar", icon: WrenchIcon, items: ["Figma", "Photoshop", "Git & GitHub"] },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionEyebrow className="mb-10 sm:mb-14">03 — Teknik Yetkinlikler</SectionEyebrow>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {groups.map((group, i) => (
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
      </Container>
    </section>
  );
}
