import { Advantage } from "@/types";

import { AdvantageListItem } from "./AdvantageListItem";

interface AdvantageListProps {
  advantages: Advantage[];
}

export const AdvantageList = ({ advantages }: AdvantageListProps) => (
  <ul className="w-full flex justify-between max-sm:flex-col max-sm:w-fit max-sm:mx-auto max-sm:gap-[35px]">
    {advantages.map((advantage) => (
      <AdvantageListItem key={advantage.heading} {...advantage} />
    ))}
  </ul>
);
