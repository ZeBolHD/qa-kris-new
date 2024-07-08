import {
  getHomePageAboutSection,
  getHomePageAdvantagesSection,
  getHomePageCompaniesSection,
  getHomePageFAQSection,
  getHomePageHeroSection,
  getHomePagePricingSection,
  getHomePageProgramSection,
  getHomePageReviewsSection,
} from "./homePage";

export const apiClient = {
  getHeroSection: getHomePageHeroSection,
  getReviewsSection: getHomePageReviewsSection,
  getAdvantagesSection: getHomePageAdvantagesSection,
  getProgramSection: getHomePageProgramSection,
  getAboutSection: getHomePageAboutSection,
  getFAQSection: getHomePageFAQSection,
  getPricingSection: getHomePagePricingSection,
  getCompaniesSection: getHomePageCompaniesSection,
};
