import { HeroSection } from "@/components/hero-section";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import { FoundersSection } from "@/components/founders-section";
import { ContactSection } from "@/components/contact-section";
import { AboutSection } from "@/components/about-section";
import { ProjectSection } from "@/components/project-section";

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="p-4 md:p-8 mx-auto max-w-7xl space-y-32 md:space-y-48">
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
