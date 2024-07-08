import { Description } from "@/types";
import { DescriptionListItem } from "./DescriptionListItem";

interface DescriptionListProps {
  descriptions: Description[];
}

export const DescriptionList = ({ descriptions }: DescriptionListProps) => (
  <ul className="w-full flex flex-col gap-[16px]">
    {descriptions.map((description, index) => (
      <DescriptionListItem key={index} {...description} />
    ))}
  </ul>
);
