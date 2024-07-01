import BackgroundGradient from "./BackgroundGradient";
import AboutSection from "./_components/AboutSection";
import AdvantagesSection from "./_components/AdvantagesSection";
import CompaniesSection from "./_components/CompaniesSection";
import HeroSection from "./_components/HeroSection";
import ProgramSection from "./_components/ProgramSection";
import FAQSection from "./_components/FAQSection";
import PricingSection from "./_components/PricingSection";
import GetStartedSection from "./_components/GetStartedSection";

export default function HomePage() {
  return (
    <div className="text-4xl">
      <BackgroundGradient />
      <HeroSection />
      <AdvantagesSection />
      <ProgramSection />
      <CompaniesSection />
      <AboutSection />
      <FAQSection />
      <PricingSection />
      <GetStartedSection />
    </div>
  );
}
