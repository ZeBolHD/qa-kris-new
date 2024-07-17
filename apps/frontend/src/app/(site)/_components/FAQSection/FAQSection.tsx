import { SectionHeading } from "@/app/_components";
import { BackgroundPatterns } from "./BackgroundPatterns";
import { FAQList } from "./FAQList/FAQList";

import { HomePageFAQSectionDto } from "@/lib/api/homePage";

interface FAQSectionProps extends HomePageFAQSectionDto {}

export const FAQSection = ({ faqs }: FAQSectionProps) => (
  <section id="faq" className="py-[140px] max-sm:py-[25px]">
    <div className="container w-full relative">
      <BackgroundPatterns />
      <div className="z-50">
        <SectionHeading text="Часто задаваемые вопросы" centered className="max-sm:text-left" />
      </div>
      <div className="w-full mt-[60px] max-sm:mt-[33px]">{faqs && <FAQList faqs={faqs} />}</div>
    </div>
  </section>
);
