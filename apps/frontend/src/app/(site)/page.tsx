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

import { apiClient } from "@/lib/api";

export default async function HomePage() {
  const { data: heroSection } = await apiClient.getHeroSection();
  const { data: reviewsSection } = await apiClient.getReviewsSection();
  const { data: advantagesSection } = await apiClient.getAdvantagesSection();
  const { data: programSection } = await apiClient.getProgramSection();
  const { data: aboutSection } = await apiClient.getAboutSection();
  const { data: faqSection } = await apiClient.getFAQSection();
  const { data: pricingSection } = await apiClient.getPricingSection();
  const { data: companiesSection } = await apiClient.getCompaniesSection();

  return (
    <>
      <BackgroundGradient />
      <HeroSection {...heroSection} />
      <ReviewsSection {...reviewsSection} />
      <AdvantagesSection {...advantagesSection} />
      <ProgramSection {...programSection} />
      <CompaniesSection {...companiesSection} />
      <AboutSection {...aboutSection} />
      <FAQSection {...faqSection} />
      <PricingSection {...pricingSection} />
      <GetStartedSection consultationLink={heroSection.link!} />

      {/* <ReviewsSection {...reviewsSection} />
      <AdvantagesSection {...advantagesSection} />
      <ProgramSection {...programSection} />
      <CompaniesSection {...companiesSection} />
      <AboutSection {...aboutSection} />
      <FAQSection {...faqSection} />
      <PricingSection {...pricingSection} />
      <GetStartedSection consultationLink={heroSection.link!} /> */}
    </>
  );
}
