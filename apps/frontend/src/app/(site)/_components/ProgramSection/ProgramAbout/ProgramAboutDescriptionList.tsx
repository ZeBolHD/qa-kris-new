import { Description } from "@/types";

import { ProgramAboutDescriptionListItem } from "./ProgramAboutDescriptionListItem";

interface ProgramAboutDescriptionListProps {
  descriptions: Description[];
}

export const ProgramAboutDescriptionList = ({ descriptions }: ProgramAboutDescriptionListProps) => (
  <ul className="mt-[16px] w-full flex flex-col gap-[16px]">
    {descriptions.map((advantage, index) => (
      <ProgramAboutDescriptionListItem key={index} {...advantage} />
    ))}
  </ul>
);
