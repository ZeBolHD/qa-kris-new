import { ProgramAdvantage } from "../types";
import ProgramDescriptionAdvantageList from "./ProgramDescriptionAdvantageList";

export type ProgramDescriptionProps = {
  text: string;
  advantages: ProgramAdvantage[];
};

const ProgramDescription = ({ text, advantages }: ProgramDescriptionProps) => {
  return (
    <div className="w-[450px] z-50">
      <h2 className="text-[42px] font-bold">Авторская программа обучения</h2>
      <div className="mt-[16px]">
        <p className="text-[20px] font-light opacity-40 leading-snug">{text}</p>
        <ProgramDescriptionAdvantageList advantages={advantages} />
      </div>
    </div>
  );
};

export default ProgramDescription;
