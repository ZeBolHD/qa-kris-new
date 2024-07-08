import { ConsultationButton } from "@/app/_components/ConsultationButton";

import { AboutAchievementsList } from "./AboutAchievementList";

import { SectionHeading } from "@/app/_components";
import { HomePageAboutSectionDto } from "@/lib/api/homePage";

interface AboutSectionDescriptionProps
  extends Pick<HomePageAboutSectionDto, "title" | "achievements"> {}

export const AboutSectionDescription = ({ title, achievements }: AboutSectionDescriptionProps) => (
  <div className="w-[460px] z-50 flex flex-col gap-[16px]">
    <div>
      <SectionHeading text="Об авторе курса" />
      <p className="text-[25px] font-medium">{title}</p>
    </div>
    {achievements && <AboutAchievementsList achievements={achievements} />}

    <ConsultationButton text="Написать в Telegram" className="text-white" />
  </div>
);
