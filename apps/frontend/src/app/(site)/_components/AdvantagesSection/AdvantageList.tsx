import AdvantageListItem from "./AdvantageListItem";
import { Advantage } from "./types";

interface AdvantageListProps {
  advantages: Advantage[];
}

const AdvantageList = ({ advantages }: AdvantageListProps) => {
  return (
    <ul className="w-full flex justify-between">
      {advantages.map((advantage) => (
        <AdvantageListItem key={advantage.heading} {...advantage} />
      ))}
    </ul>
  );
};

export default AdvantageList;
