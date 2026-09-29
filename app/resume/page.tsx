import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ResumeContent } from "@/components/resume-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Özgeçmiş — ${site.name}`,
  description: "Deneyimim, eğitimim ve yeteneklerime dair okunabilir bir özet.",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ResumeContent />
      </main>
      <Footer withLinks />
    </>
  );
}
