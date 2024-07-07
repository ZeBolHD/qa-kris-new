import type { Schema, Attribute } from "@strapi/strapi";

export interface HomePageAboutSection extends Schema.Component {
  collectionName: "components_home_page_about_sections";
  info: {
    displayName: "AboutSection";
    icon: "user";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    achievements: Attribute.Component<"ui.achievement", true>;
    avatar: Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

export interface HomePageCompaniesSection extends Schema.Component {
  collectionName: "components_home_page_companies_sections";
  info: {
    displayName: "CompaniesSection";
    icon: "briefcase";
  };
  attributes: {
    companies: Attribute.Relation<
      "home-page.companies-section",
      "oneToMany",
      "api::company.company"
    >;
  };
}

export interface HomePageFaqSection extends Schema.Component {
  collectionName: "components_home_page_faq_sections";
  info: {
    displayName: "FAQSection";
  };
  attributes: {
    faqs: Attribute.Relation<"home-page.faq-section", "oneToMany", "api::faq.faq">;
  };
}

export interface HomePageHeroSection extends Schema.Component {
  collectionName: "components_home_page_hero_sections";
  info: {
    displayName: "HeroSection";
    description: "";
  };
  attributes: {
    heading: Attribute.String;
    uptitle: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface HomePagePricingSection extends Schema.Component {
  collectionName: "components_home_page_pricing_sections";
  info: {
    displayName: "PricingSection";
    icon: "priceTag";
  };
  attributes: {
    services: Attribute.Relation<"home-page.pricing-section", "oneToMany", "api::service.service">;
  };
}

export interface HomePageProgramSection extends Schema.Component {
  collectionName: "components_home_page_program_sections";
  info: {
    displayName: "ProgramSection";
    icon: "grid";
    description: "";
  };
  attributes: {
    programs: Attribute.Relation<"home-page.program-section", "oneToMany", "api::program.program">;
    title: Attribute.String;
    descriptions: Attribute.Component<"ui.description", true>;
  };
}

export interface HomePageReviewsSection extends Schema.Component {
  collectionName: "components_home_page_reviews_sections";
  info: {
    displayName: "ReviewsSection";
    icon: "user";
    description: "";
  };
  attributes: {
    reviews: Attribute.Relation<"home-page.reviews-section", "oneToMany", "api::review.review">;
    link: Attribute.String;
  };
}

export interface UiAchievement extends Schema.Component {
  collectionName: "components_ui_achievements";
  info: {
    displayName: "Achievement";
    icon: "magic";
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface UiDescription extends Schema.Component {
  collectionName: "components_ui_descriptions";
  info: {
    displayName: "Description";
    icon: "apps";
  };
  attributes: {
    text: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "home-page.about-section": HomePageAboutSection;
      "home-page.companies-section": HomePageCompaniesSection;
      "home-page.faq-section": HomePageFaqSection;
      "home-page.hero-section": HomePageHeroSection;
      "home-page.pricing-section": HomePagePricingSection;
      "home-page.program-section": HomePageProgramSection;
      "home-page.reviews-section": HomePageReviewsSection;
      "ui.achievement": UiAchievement;
      "ui.description": UiDescription;
    }
  }
}
