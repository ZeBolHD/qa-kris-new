import { Description } from "../types";
import DescriptionListItem from "./DescriptionListItem";

interface DescriptionListProps {
  descriptions: Description[];
}

const DescriptionList = ({ descriptions }: DescriptionListProps) => {
  return (
    <ul className="w-full flex flex-col gap-[16px]">
      {descriptions.map((description, index) => (
        <DescriptionListItem key={index} {...description} />
      ))}
    </ul>
  );
};

export default DescriptionList;
