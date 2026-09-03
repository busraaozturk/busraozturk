import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
// import { Projects } from "@/components/projects";
import { GithubRepos } from "@/components/github-repos";
import { Skills } from "@/components/skills";
import { ResumeBanner } from "@/components/resume-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        {/* Vitrin projeleri hazır olana kadar geçici olarak GitHub depolarımı gösteriyorum. */}
        {/* <Projects /> */}
        <GithubRepos />
        <Skills />
        <ResumeBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
