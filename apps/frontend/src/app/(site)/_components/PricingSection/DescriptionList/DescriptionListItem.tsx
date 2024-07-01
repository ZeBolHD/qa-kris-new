import Image from "next/image";
import { Description } from "../types";

const DescriptionListItem = ({ text }: Description) => {
  return (
    <li className="flex gap-[8px]">
      <Image src="/pricing/check.svg" width={20} height={20} alt={text} />
      <p className="text-[16px] font-light opacity-50">{text}</p>
    </li>
  );
};

export default DescriptionListItem;
