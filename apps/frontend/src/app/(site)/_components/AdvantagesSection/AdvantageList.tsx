import { AdvantageListItem } from "./AdvantageListItem";
import { Advantage } from "./types";

interface AdvantageListProps {
  advantages: Advantage[];
}

export const AdvantageList = ({ advantages }: AdvantageListProps) => (
  <ul className="w-full flex justify-between">
    {advantages.map((advantage) => (
      <AdvantageListItem key={advantage.heading} {...advantage} />
    ))}
  </ul>
);
