import ConsultationButton from "@/app/_components/ConsultationButton";
import AboutAchievementsList from "./AboutAchievementList";
import { achievements } from "../types";

const AboutSectionDescription = () => {
  return (
    <div className="w-[460px] z-50">
      <div>
        <h2 className="text-[42px] font-bold">Об авторе курса</h2>
        <p className="text-[25px] mt-[16px] font-medium">
          Кристина: Senior Manual QA в крупном РФ банке
        </p>
      </div>
      <div className="mt-[16px]">
        <AboutAchievementsList achievements={achievements} />
      </div>
      <div className="mt-16">
        <ConsultationButton text="Написать в Telegram" className="text-white" />
      </div>
    </div>
  );
};

export default AboutSectionDescription;
