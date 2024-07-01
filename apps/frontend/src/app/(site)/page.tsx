import BackgroundGradient from "./BackgroundGradient";
import AboutSection from "./_components/AboutSection";
import AdvantagesSection from "./_components/AdvantagesSection";
import CompaniesSection from "./_components/CompaniesSection";
import HeroSection from "./_components/HeroSection";
import ProgramSection from "./_components/ProgramSection";

export default function HomePage() {
  return (
    <div className="text-4xl">
      <BackgroundGradient />
      <HeroSection />
      <AdvantagesSection />
      <ProgramSection />
      <CompaniesSection />
      <AboutSection />
    </div>
  );
}
