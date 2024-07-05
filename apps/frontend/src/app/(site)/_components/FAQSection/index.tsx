import BackgroundPatterns from "./BackgroundPatterns";
import Offers from "./Offers";
import QuestionList from "./QuestionList";
import { offers, questions } from "./types";

const FAQSection = () => {
  return (
    <section id="faq" className="py-[140px]">
      <div className="container w-full relative">
        <BackgroundPatterns />
        <div className="z-50">
          <h2 className="text-[42px] font-bold">Вопросы и ответы</h2>
        </div>
        <div className="w-full mt-[60px]">
          <QuestionList questions={questions} />
        </div>
        {/* <div className="z-50">
          <Offers offers={offers} />
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
