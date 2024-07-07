import { ProgramAdvantage } from "../types";
import { ProgramDescriptionAdvantageListItem } from "./ProgramDescriptionAdvantageListItem";

interface ProgramDescriptionAdvantageListProps {
  advantages: ProgramAdvantage[];
}

export const ProgramDescriptionAdvantageList = ({
  advantages,
}: ProgramDescriptionAdvantageListProps) => (
  <ul className="mt-[16px] w-full flex flex-col gap-[16px]">
    {advantages.map((advantage, index) => (
      <ProgramDescriptionAdvantageListItem key={index} {...advantage} />
    ))}
  </ul>
);
