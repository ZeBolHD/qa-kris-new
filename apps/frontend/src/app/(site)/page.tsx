import BackgroundGradient from "./BackgroundGradient";
import AboutSection from "./_components/AboutSection";
import AdvantagesSection from "./_components/AdvantagesSection";
import CompaniesSection from "./_components/CompaniesSection";
import HeroSection from "./_components/HeroSection";
import ProgramSection from "./_components/ProgramSection";
import FAQSection from "./_components/FAQSection";
import PricingSection from "./_components/PricingSection";
import GetStartedSection from "./_components/GetStartedSection";
import ReviewsSection from "./_components/ReviewsSection";
import { reviews } from "./_components/ReviewsSection/types";

export default function HomePage() {
  return (
    <>
      <BackgroundGradient />
      <HeroSection />
      <ReviewsSection reviews={reviews} />
      <AdvantagesSection />
      <ProgramSection />
      <CompaniesSection />
      <AboutSection />
      <FAQSection />
      <PricingSection />
      <GetStartedSection />
    </>
  );
}
