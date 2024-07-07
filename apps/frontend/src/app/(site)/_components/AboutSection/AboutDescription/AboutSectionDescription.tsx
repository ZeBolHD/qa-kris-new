import { ConsultationButton } from "@/app/_components/ConsultationButton";

import { AboutAchievementsList } from "./AboutAchievementList";

import { achievements } from "../types";
import { SectionHeading } from "@/app/_components";

export const AboutSectionDescription = () => (
  <div className="w-[460px] z-50">
    <div>
      <SectionHeading text="Об авторе курса" />
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
