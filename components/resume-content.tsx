"use client";

import { Container } from "./container";
import { SectionEyebrow } from "./section-eyebrow";
import { site } from "@/lib/site";
import { useLang, type Lang } from "@/lib/language";

const tr = {
  eyebrow: "Özgeçmiş",
  location: "İstanbul, Türkiye",
  downloads: { tr: "Türkçe PDF ↓", en: "İngilizce PDF ↓" },
  aboutTitle: "Profil",
  about:
    "Yönetim Bilişim Sistemleri mezunu, 3 yıllık yazılım geliştirme deneyimine sahip Frontend Developer'ım. HTML, CSS, JavaScript, TypeScript, React, Next.js, C# ve ASP.NET MVC teknolojileriyle web ve e-ticaret uygulamaları geliştiriyorum. REST API entegrasyonları, responsive arayüz geliştirme, Git ve Azure DevOps süreçlerinde deneyim sahibiyim. Kullanıcı odaklı, sürdürülebilir ve yeniden kullanılabilir web arayüzleri geliştiriyorum.",
  experienceTitle: "İş Deneyimi",
  experience: [
    {
      period: "10/2023 — Günümüz",
      company: "Ahlatcı Teknoloji",
      role: "Yazılım Geliştiricisi",
      bullets: [
        "ASP.NET MVC ve Razor View kullanarak e-ticaret web sitesinin geliştirme süreçlerinde aktif rol aldım.",
        "Razor View, HTML ve CSS kullanarak yeniden kullanılabilir ve responsive UI bileşenleri geliştirdim.",
        "REST API entegrasyonları gerçekleştirerek frontend ve backend arasındaki veri akışını sağladım.",
        "Figma kullanarak UI tasarımları hazırladım ve tasarımları web arayüzlerine dönüştürdüm.",
        "JavaScript ile dinamik kullanıcı arayüzleri ve etkileşimli web bileşenleri geliştirdim.",
        "DevExtreme bileşenlerini kullanarak yönetim paneli arayüzlerinin geliştirilmesine katkı sağladım.",
        "Git ve Azure DevOps kullanarak versiyon kontrolü ve geliştirme süreçlerinde görev aldım.",
      ],
    },
    {
      period: "03/2022 — 03/2023",
      company: "Korkod Yazılım",
      role: "E-ticaret ve Pazaryeri Uzmanı",
      bullets: [
        "Pazaryerlerinde ürün, içerik ve sipariş yönetimi süreçlerini yürüttüm.",
        "Sosyal medya içerik planlama ve yönetim süreçlerinde görev aldım.",
        "Photoshop, Illustrator, After Effects ve Canva kullanarak dijital içerikler hazırladım.",
      ],
    },
    {
      period: "09/2021 — 01/2022",
      company: "Hasanleyli Ortaokulu",
      role: "Bilişim Teknolojileri Öğretmeni",
      bullets: [
        "Öğrencilere temel bilişim teknolojileri ve yazılım konularında eğitim verdim.",
        "Teknik konuları farklı bilgi seviyelerine uygun şekilde aktararak iletişim ve sunum becerilerimi geliştirdim.",
      ],
    },
  ],
  projectsTitle: "Projeler",
  techLabel: "Teknolojiler",
  projects: [
    {
      period: "2026",
      name: "TravelMind AI",
      role: "Full Stack Developer",
      bullets: [
        "Kullanıcı arayüzü, uygulama akışı ve temel yazılım mimarisi dahil olmak üzere seyahat planlama uygulamasını uçtan uca geliştirdim.",
        "Destinasyon, tarih, bütçe ve kullanıcı tercihlerine göre günlük ve saatlik seyahat rotaları oluşturan çok adımlı planlama sistemi geliştirdim.",
        "Hava durumu ve döviz kuru için REST API entegrasyonları gerçekleştirerek bütçe hesaplama, otel önerileri, bavul listesi ve alternatif rota gibi seyahat özelliklerini geliştirdim.",
        "Responsive kullanıcı arayüzleri, kullanıcı giriş/kayıt, kayıtlı seyahatlerin yönetimi ve seyahat planlarının PDF olarak oluşturulması gibi uygulama özelliklerini geliştirdim.",
      ],
      tech: "Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, OpenAI SDK, Anthropic SDK, Google Places API, Google Routes API, Recharts, jsPDF",
    },
  ],
  educationTitle: "Eğitim",
  education: [
    {
      period: "09/2017 — 06/2021",
      program: "Yönetim Bilişim Sistemleri (MIS/YBS)",
      school: "Düzce Üniversitesi",
    },
    {
      period: "09/2013 — 06/2017",
      program: "Web Tasarımı",
      school: "Ataşehir Rotary Çok Programlı Anadolu Lisesi",
    },
  ],
  toolsTitle: "Teknik Yetkinlikler",
  tools: [
    {
      title: "Frontend",
      items: "HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Responsive Web Design",
    },
    { title: "Backend", items: "C#, ASP.NET MVC, Razor View" },
    { title: "Database & Backend Services", items: "SQL, Microsoft SQL Server, PostgreSQL, Supabase" },
    { title: "UI / Components", items: "DevExtreme, Figma, Recharts" },
    {
      title: "API & Integrations",
      items: "REST API, OpenAI SDK, Anthropic SDK, Google Places API, Google Routes API, Postman",
    },
    { title: "Version Control & DevOps", items: "Git, GitHub, Azure DevOps" },
    { title: "Development Tools", items: "Visual Studio, Visual Studio Code, Cursor" },
  ],
  certificationsTitle: "Sertifikalar",
  certifications: [
    { year: "2024", name: "Uygulamalı Figma", issuer: "BTK Akademi" },
    { year: "2024", name: "Azure DevOps .NET Eğitimi", issuer: "BilgeAdam Teknoloji" },
    { year: "2023", name: "ASP.NET Core Bootcamp", issuer: "BTK Akademi" },
    { year: "2023", name: "Versiyon Kontrolleri: Git & GitHub", issuer: "BTK Akademi" },
    { year: "2023", name: "Uygulamalarla SQL", issuer: "BTK Akademi" },
    { year: "2023", name: "C#", issuer: "BTK Akademi" },
  ],
  languagesTitle: "Yabancı Dil",
  languages: [{ name: "İngilizce", level: "Temel Seviye" }],
};

const en: typeof tr = {
  eyebrow: "Resume",
  location: "İstanbul, Türkiye",
  downloads: { tr: "Turkish PDF ↓", en: "English PDF ↓" },
  aboutTitle: "Profile",
  about:
    "Management Information Systems graduate and Frontend Developer with 3 years of software development experience. Experienced in developing web and e-commerce applications using HTML, CSS, JavaScript, TypeScript, React, Next.js, C#, and ASP.NET MVC. Skilled in REST API integrations, responsive web development, Git, and Azure DevOps workflows. Focused on building user-centered, maintainable, and reusable web interfaces.",
  experienceTitle: "Work Experience",
  experience: [
    {
      period: "10/2023 — Present",
      company: "Ahlatcı Teknoloji",
      role: "Software Developer",
      bullets: [
        "Contributed to the development of an e-commerce application using ASP.NET MVC and Razor Views.",
        "Developed reusable and responsive UI components using Razor Views, HTML, and CSS.",
        "Implemented REST API integrations to enable data flow between frontend and backend systems.",
        "Created UI designs in Figma and translated them into functional web interfaces.",
        "Developed dynamic user interfaces and interactive web components using JavaScript.",
        "Contributed to the development of admin panel interfaces using DevExtreme components.",
        "Used Git and Azure DevOps for version control and development workflows.",
      ],
    },
    {
      period: "03/2022 — 03/2023",
      company: "Korkod Yazılım",
      role: "E-commerce & Marketplace Specialist",
      bullets: [
        "Managed product listings, content, and order operations across online marketplaces.",
        "Contributed to social media content planning and management.",
        "Created digital content using Adobe Photoshop, Illustrator, After Effects, and Canva.",
      ],
    },
    {
      period: "09/2021 — 01/2022",
      company: "Hasanleyli Secondary School",
      role: "Information Technologies Teacher",
      bullets: [
        "Taught students the fundamentals of information technologies and software development.",
        "Improved communication and presentation skills by explaining technical concepts to students with different levels of knowledge.",
      ],
    },
  ],
  projectsTitle: "Projects",
  techLabel: "Technologies",
  projects: [
    {
      period: "2026",
      name: "TravelMind AI",
      role: "Full Stack Developer",
      bullets: [
        "Developed an end-to-end travel planning application, including the user interface, application flow, and core software architecture.",
        "Built a multi-step planning system that generates daily and hourly travel itineraries based on destination, travel dates, budget, and user preferences.",
        "Integrated REST APIs for weather and exchange-rate data and developed features including budget calculation, hotel recommendations, packing lists, and alternative itineraries.",
        "Developed responsive user interfaces and application features including user authentication, saved trip management, and PDF generation for travel plans.",
      ],
      tech: "Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, OpenAI SDK, Anthropic SDK, Google Places API, Google Routes API, Recharts, jsPDF",
    },
  ],
  educationTitle: "Education",
  education: [
    {
      period: "09/2017 — 06/2021",
      program: "Management Information Systems (MIS)",
      school: "Düzce University",
    },
    {
      period: "09/2013 — 06/2017",
      program: "Web Design",
      school: "Ataşehir Rotary Multi-Program Anatolian High School",
    },
  ],
  toolsTitle: "Technical Skills",
  tools: [
    {
      title: "Frontend",
      items: "HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Responsive Web Design",
    },
    { title: "Backend", items: "C#, ASP.NET MVC, Razor Views" },
    { title: "Database & Backend Services", items: "SQL, Microsoft SQL Server, PostgreSQL, Supabase" },
    { title: "UI / Components", items: "DevExtreme, Figma, Recharts" },
    {
      title: "API & Integrations",
      items: "REST API, OpenAI SDK, Anthropic SDK, Google Places API, Google Routes API, Postman",
    },
    { title: "Version Control & DevOps", items: "Git, GitHub, Azure DevOps" },
    { title: "Development Tools", items: "Visual Studio, Visual Studio Code, Cursor" },
  ],
  certificationsTitle: "Certifications",
  certifications: [
    { year: "2024", name: "Applied Figma", issuer: "BTK Akademi" },
    { year: "2024", name: "Azure DevOps .NET Training", issuer: "BilgeAdam Teknoloji" },
    { year: "2023", name: "ASP.NET Core Bootcamp", issuer: "BTK Akademi" },
    { year: "2023", name: "Version Control: Git & GitHub", issuer: "BTK Akademi" },
    { year: "2023", name: "SQL with Practical Applications", issuer: "BTK Akademi" },
    { year: "2023", name: "C#", issuer: "BTK Akademi" },
  ],
  languagesTitle: "Languages",
  languages: [{ name: "English", level: "Basic Proficiency" }],
};

const content = { tr, en };

const pdfLangs: Lang[] = ["tr", "en"];

export function ResumeContent() {
  const lang = useLang();
  const t = content[lang];

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
        <div className="mt-8 flex flex-wrap gap-3">
          {/* Sayfanın dilindeki PDF birincil buton olarak öne çıkıyor. */}
          {pdfLangs.map((code) => (
            <a
              key={code}
              href={site.resumePdf[code]}
              download
              hrefLang={code}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors ${
                code === lang
                  ? "border border-primary bg-primary text-white hover:bg-primary-hover"
                  : "border border-primary text-primary hover:bg-surface"
              }`}
            >
              {t.downloads[code]}
            </a>
          ))}
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
        <SectionEyebrow className="mb-7">{t.projectsTitle}</SectionEyebrow>
        <div className="flex flex-col">
          {t.projects.map((project) => (
            <div
              key={project.name}
              className="grid grid-cols-1 gap-2 border-t border-border py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div>
                <div className="font-heading text-[13px] font-semibold text-title">{project.period}</div>
                <div className="mt-1 text-[13px] text-body">{project.role}</div>
              </div>
              <div>
                <div className="mb-3 font-heading text-lg font-bold text-title">{project.name}</div>
                <div className="flex flex-col gap-2 text-sm leading-relaxed text-body">
                  {project.bullets.map((bullet) => (
                    <div key={bullet}>{bullet}</div>
                  ))}
                </div>
                <div className="mt-4 text-sm leading-relaxed text-body">
                  <span className="font-semibold text-title">{t.techLabel}:</span> {project.tech}
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

      <Container as="section" className="max-w-[1040px] border-t border-border py-10">
        <SectionEyebrow className="mb-7">{t.toolsTitle}</SectionEyebrow>
        <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
          {t.tools.map((group) => (
            <div key={group.title}>
              <div className="mb-2 font-heading text-[15px] font-bold text-title">{group.title}</div>
              <div className="text-sm leading-relaxed text-body">{group.items}</div>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className="max-w-[1040px] border-t border-border py-10">
        <SectionEyebrow className="mb-7">{t.certificationsTitle}</SectionEyebrow>
        <div className="flex flex-col">
          {t.certifications.map((cert) => (
            <div
              key={cert.name}
              className="grid grid-cols-1 gap-1 border-t border-border py-4 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div className="font-heading text-[13px] font-semibold text-title">{cert.year}</div>
              <div>
                <div className="font-heading text-base font-bold text-title">{cert.name}</div>
                <div className="text-sm text-body">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className="max-w-[1040px] border-t border-border py-10 pb-20">
        <SectionEyebrow className="mb-5">{t.languagesTitle}</SectionEyebrow>
        <div className="flex flex-col gap-2 text-sm text-body">
          {t.languages.map((language) => (
            <div key={language.name}>
              <span className="font-semibold text-title">{language.name}</span> · {language.level}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
