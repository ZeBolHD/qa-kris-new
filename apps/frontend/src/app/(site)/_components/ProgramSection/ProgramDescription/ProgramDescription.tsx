import { ProgramAdvantage } from "../types";
import { ProgramDescriptionAdvantageList } from "./ProgramDescriptionAdvantageList";

export type ProgramDescriptionProps = {
  text: string;
  advantages: ProgramAdvantage[];
};

export const ProgramDescription = ({ text, advantages }: ProgramDescriptionProps) => (
  <div className="w-[450px] z-50">
    <h2 className="text-[42px] font-bold leading-tight">Авторская программа обучения</h2>
    <div className="mt-[16px]">
      <p className="text-[20px] font-light opacity-40 leading-snug">{text}</p>
      <ProgramDescriptionAdvantageList advantages={advantages} />
    </div>
  </div>
);
