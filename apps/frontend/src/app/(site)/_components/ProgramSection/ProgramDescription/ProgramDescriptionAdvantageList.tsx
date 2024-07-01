import { ProgramAdvantage } from "../types";
import ProgramDescriptionAdvantageListItem from "./ProgramDescriptionAdvantageListItem";

interface ProgramDescriptionAdvantageListProps {
  advantages: ProgramAdvantage[];
}

const ProgramDescriptionAdvantageList = ({ advantages }: ProgramDescriptionAdvantageListProps) => {
  return (
    <ul className="mt-[16px] w-full flex flex-col gap-[16px]">
      {advantages.map((advantage) => (
        <ProgramDescriptionAdvantageListItem key={advantage.text} {...advantage} />
      ))}
    </ul>
  );
};

export default ProgramDescriptionAdvantageList;
