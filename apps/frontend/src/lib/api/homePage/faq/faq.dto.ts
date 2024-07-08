import { GetHomePageFaqSectionQuery } from "@/__generated__/graphql";
import { FAQ } from "@/types";

export class HomePageFAQSectionDto {
  faqs: FAQ[] | null | undefined;

  constructor(public data: GetHomePageFaqSectionQuery) {
    this.faqs = data.homePage?.data?.attributes?.faq_section?.faqs?.data?.map((faq) => ({
      question: faq?.attributes?.question,
      answer: faq?.attributes?.answer,
    }));
  }
}
