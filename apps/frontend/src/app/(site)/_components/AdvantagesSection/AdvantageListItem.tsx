import { Advantage } from "./types";

const AdvantageListItem = ({ heading, description }: Advantage) => {
  return (
    <li className="w-[345px] text-center tracking-tight flex flex-col gap-[18px]">
      <h3 className="text-[48px] font-bold">{heading}</h3>
      <p className="text-[18px] font-light opacity-70 leading-snug">{description}</p>
    </li>
  );
};

export default AdvantageListItem;
