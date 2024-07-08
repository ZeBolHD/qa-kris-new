import { HomePageProgramSectionDto } from "@/lib/api/homePage";
import { BackgroundPatterns } from "./BackgroundPatterns";
import { ProgramAbout } from "./ProgramAbout/ProgramAbout";
import { ProgramTable } from "./ProgramTable/ProgramTable";

interface ProgramSectionProps extends HomePageProgramSectionDto {}

export const ProgramSection = ({ title, descriptions, programs }: ProgramSectionProps) => (
  <section id="program" className="py-[100px] bg-primary-bg">
    <div className="flex gap-[190px] w-fit mx-auto justify-between relative">
      <BackgroundPatterns />
      <ProgramAbout
        text={
          title ||
          "Программа, построенная на основе вопросов с более 100 собеседований. Только актуальная информация."
        }
        descriptions={descriptions || []}
      />

      <div className="flex items-center">{programs && <ProgramTable programs={programs} />}</div>
    </div>
  </section>
);
