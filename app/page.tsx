import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { SkillsSection } from "@/components/skills";
import { WorkSection } from "@/components/work";

export default function page() {
  return (
    <main>
      <div className="relative">
        <HeroSection />
        <AboutSection />
      </div>
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
