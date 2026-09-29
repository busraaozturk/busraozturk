"use client";

import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { site } from "@/lib/site";
import { useLang } from "@/lib/language";

const tr = {
  eyebrow: "Özgeçmiş",
  location: "İstanbul – Ataşehir",
  download: "PDF indir ↓",
  aboutTitle: "Hakkımda",
  about:
    "Düzce Üniversitesi Yönetim Bilişim Sistemleri (MIS) mezunuyum. HTML, CSS, C#, SQL ve JavaScript kullanarak web projeleri geliştiriyorum. İş hayatıma Bilişim Teknolojileri ve Yazılım öğretmeni olarak başladım; iletişim, sunum ve analitik becerilerimi geliştirdim. Ardından E-Ticaret ve Pazaryeri uzmanı olarak dijital pazarlama, sosyal medya yönetimi ve proje yönetimi alanlarında deneyim kazandım. Şu anda frontend ağırlıklı, Yazılım Geliştirici olarak çalışıyorum; ASP.NET MVC, Razor View ve DevExtreme ile kullanıcı odaklı e-ticaret modülleri geliştiriyor, REST API entegrasyonları ve Azure DevOps/Git ile proje yönetim süreçlerine katkı sağlıyorum. Web tasarımı ve frontend geliştirme konularında online eğitimlerle kendimi sürekli geliştirmekteyim.",
  experienceTitle: "İş Deneyimi",
  experience: [
    {
      period: "2023 — Devam Ediyor",
      company: "Ahlatcı Teknoloji",
      role: "Yazılım Geliştirici",
      bullets: [
        "E-ticaret altyapısına uygun olarak ASP.NET MVC üzerinde geliştirilmesine katkı sağladım.",
        "Razor View ile yeniden kullanılabilir UI bileşenleri geliştirdim.",
        "JavaScript ile dinamik arayüz etkileşimleri oluşturdum; DevExtreme DataGrid ile yönetim panelleri tasarladım.",
        "REST API'lerle veri entegrasyonu sağladım.",
      ],
    },
    {
      period: "Mart 2022 — Mart 2023",
      company: "Korkod Yazılım",
      role: "E-Ticaret ve Pazaryeri Uzmanı",
      bullets: [
        "Pazaryerlerinde ürün yükleme ve sipariş süreçlerinin yönetiminde aktif rol aldım.",
        "Sosyal medya içerik planlama ve yönetim süreçlerini yürüttüm.",
        "Photoshop, Illustrator, After Effects ve Canva uygulamalarını temel seviyede kullanabilme yetkinliği edindim.",
      ],
    },
    {
      period: "Eylül 2021 — Ocak 2022",
      company: "MEB (Ücretli Öğretmen)",
      role: "Bilişim Teknolojileri ve Yazılım Öğretmeni",
      bullets: [
        "Ortaokul öğrencilerine temel bilişim teknolojileri eğitimi verdim.",
        "Bu süreçte iletişim becerilerimi geliştirdim ve topluluk önünde etkili konuşma yetkinliği edindim.",
      ],
    },
  ],
  educationTitle: "Eğitim",
  education: [
    {
      period: "2017 — 2021",
      program: "Yönetim Bilişim Sistemleri",
      school: "Düzce Üniversitesi",
    },
    {
      period: "2013 — 2017",
      program: "Bilişim Teknolojileri – Web Tasarım ve Programlama",
      school: "Ataşehir Rotary Çok Programlı Anadolu Lisesi",
    },
  ],
  toolsTitle: "Teknolojiler & Araçlar",
  tools: [
    {
      title: "Diller & Teknolojiler",
      items: ["HTML · CSS · JavaScript", "C#", "ASP.NET MVC · Razor View", "SQL", "Bootstrap", "Git / GitHub"],
    },
    {
      title: "Programlar",
      items: [
        "MS Visual Studio · VS Code",
        "MS SQL Server",
        "Figma · Postman",
        "Adobe (Photoshop · Illustrator · After Effects)",
        "MS Office (Word · Excel · PowerPoint · Outlook · Access)",
      ],
    },
  ],
};

const en: typeof tr = {
  eyebrow: "Resume",
  location: "Ataşehir, Istanbul",
  download: "Download PDF ↓",
  aboutTitle: "About",
  about:
    "I graduated in Management Information Systems (MIS) from Düzce University. I build web projects using HTML, CSS, C#, SQL and JavaScript. I started my career as an IT and Software teacher, where I developed my communication, presentation and analytical skills. I then worked as an E-Commerce and Marketplace Specialist, gaining experience in digital marketing, social media management and project management. I currently work as a frontend-focused Software Developer, building user-centered e-commerce modules with ASP.NET MVC, Razor View and DevExtreme, and contributing to REST API integrations and project management processes with Azure DevOps/Git. I keep improving myself in web design and frontend development through online courses.",
  experienceTitle: "Work Experience",
  experience: [
    {
      period: "2023 — Present",
      company: "Ahlatcı Teknoloji",
      role: "Software Developer",
      bullets: [
        "Contributed to development on ASP.NET MVC in line with the e-commerce infrastructure.",
        "Built reusable UI components with Razor View.",
        "Created dynamic UI interactions with JavaScript and designed admin panels with DevExtreme DataGrid.",
        "Handled data integration with REST APIs.",
      ],
    },
    {
      period: "Mar 2022 — Mar 2023",
      company: "Korkod Yazılım",
      role: "E-Commerce and Marketplace Specialist",
      bullets: [
        "Played an active role in managing product listings and order processes on marketplaces.",
        "Ran social media content planning and management.",
        "Gained basic proficiency in Photoshop, Illustrator, After Effects and Canva.",
      ],
    },
    {
      period: "Sep 2021 — Jan 2022",
      company: "Ministry of National Education (Contract Teacher)",
      role: "IT and Software Teacher",
      bullets: [
        "Taught fundamental information technology to middle school students.",
        "Strengthened my communication skills and gained confidence in public speaking.",
      ],
    },
  ],
  educationTitle: "Education",
  education: [
    {
      period: "2017 — 2021",
      program: "Management Information Systems",
      school: "Düzce University",
    },
    {
      period: "2013 — 2017",
      program: "Information Technology – Web Design and Programming",
      school: "Ataşehir Rotary Multi-Program Anatolian High School",
    },
  ],
  toolsTitle: "Technologies & Tools",
  tools: [
    {
      title: "Languages & Technologies",
      items: ["HTML · CSS · JavaScript", "C#", "ASP.NET MVC · Razor View", "SQL", "Bootstrap", "Git / GitHub"],
    },
    {
      title: "Software",
      items: [
        "MS Visual Studio · VS Code",
        "MS SQL Server",
        "Figma · Postman",
        "Adobe (Photoshop · Illustrator · After Effects)",
        "MS Office (Word · Excel · PowerPoint · Outlook · Access)",
      ],
    },
  ],
};

const content = { tr, en };

export function ResumeContent() {
  const t = content[useLang()];

  return (
    <>
      <Container as="section" className="max-w-[1040px] py-20 pb-14">
        <SectionEyebrow className="mb-6">{t.eyebrow}</SectionEyebrow>
        <h1 className="text-4xl leading-tight font-bold sm:text-[52px]">{site.name}</h1>
        <p className="mt-2.5 font-heading text-lg font-medium text-primary">{site.role}</p>
        <div className="mt-8 flex flex-wrap gap-5 text-sm text-body">
          <span>{t.location}</span>
          <span>·</span>
          <a href={`mailto:${site.email}`} className="text-body transition-colors hover:text-primary">
            {site.email}
          </a>
        </div>
        <div className="mt-8">
          <a
            href={site.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {t.download}
          </a>
        </div>
      </Container>

      <Container as="section" className="max-w-[1040px] border-t border-border py-10">
        <SectionEyebrow className="mb-5">{t.aboutTitle}</SectionEyebrow>
        <p className="text-base leading-[1.8] text-body">{t.about}</p>
      </Container>

      <Container as="section" className="max-w-[1040px] border-t border-border py-10">
        <SectionEyebrow className="mb-7">{t.experienceTitle}</SectionEyebrow>
        <div className="flex flex-col">
          {t.experience.map((job) => (
            <div
              key={job.company}
              className="grid grid-cols-1 gap-2 border-t border-border py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div>
                <div className="font-heading text-[13px] font-semibold text-title">{job.period}</div>
                <div className="mt-1 text-[13px] text-body">{job.company}</div>
              </div>
              <div>
                <div className="mb-3 font-heading text-lg font-bold text-title">{job.role}</div>
                <div className="flex flex-col gap-2 text-sm leading-relaxed text-body">
                  {job.bullets.map((bullet) => (
                    <div key={bullet}>{bullet}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className="max-w-[1040px] border-t border-border py-10">
        <SectionEyebrow className="mb-7">{t.educationTitle}</SectionEyebrow>
        <div className="flex flex-col">
          {t.education.map((edu) => (
            <div
              key={edu.program}
              className="grid grid-cols-1 gap-2 border-t border-border py-5 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div className="font-heading text-[13px] font-semibold text-title">{edu.period}</div>
              <div>
                <div className="mb-1 font-heading text-base font-bold text-title">{edu.program}</div>
                <div className="text-sm text-body">{edu.school}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className="max-w-[1040px] border-t border-border py-10 pb-20">
        <SectionEyebrow className="mb-7">{t.toolsTitle}</SectionEyebrow>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {t.tools.map((group) => (
            <div key={group.title}>
              <div className="mb-3.5 font-heading text-[15px] font-bold text-title">{group.title}</div>
              <div className="flex flex-col gap-2.5 text-sm text-body">
                {group.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
