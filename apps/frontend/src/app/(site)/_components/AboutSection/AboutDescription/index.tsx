import ConsultationButton from "@/app/_components/ConsultationButton";
import AboutAchievementsList from "./AboutAchievementList";
import { achievements } from "./types";

const AboutSectionDescription = () => {
  return (
    <div className="w-[460px]">
      <div>
        <h2 className="text-[42px] font-bold">Об авторе курса</h2>
        <p className="text-[25px] mt-[16px] font-medium">Кристина петрова, Senior QA Manual</p>
      </div>
      <div className="mt-[16px]">
        <AboutAchievementsList achievements={achievements} />
      </div>
      <div className="mt-16">
        <ConsultationButton text="Написать в Telegram" />
      </div>
    </div>
  );
};

export default AboutSectionDescription;
