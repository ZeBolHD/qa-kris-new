import { SectionHeading } from "@/app/_components";

import { Description } from "@/types";

import { ProgramAboutDescriptionList } from "./ProgramAboutDescriptionList";

export type ProgramDescriptionProps = {
  text: string;
  descriptions: Description[];
};

export const ProgramAbout = ({ text, descriptions }: ProgramDescriptionProps) => (
  <div className="w-[450px] z-50">
    <SectionHeading text="Авторская программа обучения" />
    <div className="mt-[16px]">
      <p className="text-[20px] font-light opacity-50 leading-snug">{text}</p>
      <ProgramAboutDescriptionList descriptions={descriptions} />
    </div>
  </div>
);
