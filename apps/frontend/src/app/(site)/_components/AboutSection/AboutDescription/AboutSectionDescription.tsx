import { ConsultationButton } from "@/app/_components/ConsultationButton";

import { AboutAchievementsList } from "./AboutAchievementList";

import { SectionHeading } from "@/app/_components";
import { HomePageAboutSectionDto } from "@/lib/api/homePage";

interface AboutSectionDescriptionProps
  extends Pick<HomePageAboutSectionDto, "title" | "achievements"> {}

export const AboutSectionDescription = ({ title, achievements }: AboutSectionDescriptionProps) => (
  <div className="w-[460px] z-50 flex flex-col gap-[16px] max-sm:w-full max-sm:mt-[40px]">
    <div>
      <SectionHeading text="Об авторе курса" className="max-sm:hidden" />
      <p className="text-[25px] font-medium">{title}</p>
    </div>
    {achievements && <AboutAchievementsList achievements={achievements} />}

    <div className="w-full max-sm:text-center">
      <ConsultationButton text="Написать в Telegram" className="text-white max-sm:hidden" />
    </div>
  </div>
);
