import Offers from "./Offers";
import QuestionList from "./QuestionList";
import { offers, questions } from "./types";

const FAQSection = () => {
  return (
    <section id="faq" className="py-[140px]">
      <div className="container w-full flex justify-between">
        <div className="w-[480px]">
          <h2 className="text-[42px] font-bold">Вопросы и ответы</h2>
          <div className="w-full mt-[60px]">
            <QuestionList questions={questions} />
          </div>
        </div>
        <div>
          <Offers offers={offers} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
