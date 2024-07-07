import {
  AboutSection,
  AdvantagesSection,
  BackgroundGradient,
  CompaniesSection,
  FAQSection,
  HeroSection,
  PricingSection,
  ProgramSection,
  ReviewsSection,
  GetStartedSection,
} from "./_components";
import { reviews } from "./_components/ReviewsSection/types";
import { homePageApiClient } from "@/lib/api";

export default async function HomePage() {
  const { data: hero } = await homePageApiClient.getHeroSection();

  return (
    <>
      <BackgroundGradient />
      <HeroSection {...hero} />
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
