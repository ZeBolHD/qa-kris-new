import { Advantage } from "@/types";

import { AdvantageListItem } from "./AdvantageListItem";

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
