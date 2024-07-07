import { SectionHeading } from "@/app/_components";
import { BackgroundPatterns } from "./BackgroundPatterns";
import { QuestionList } from "./QuestionList/QuestionList";
import { questions } from "./types";

export const FAQSection = () => (
  <section id="faq" className="py-[140px]">
    <div className="container w-full relative">
      <BackgroundPatterns />
      <div className="z-50">
        <SectionHeading text="Часто задаваемые вопросы" />
      </div>
      <div className="w-full mt-[60px]">
        <QuestionList questions={questions} />
      </div>
    </div>
  </section>
);
