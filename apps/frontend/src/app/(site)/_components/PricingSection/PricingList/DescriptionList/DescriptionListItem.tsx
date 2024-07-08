import Image from "next/image";
import { Description } from "@/types";

export const DescriptionListItem = ({ text }: Description) => (
  <li className="flex gap-[8px]">
    <Image
      src="/pricing/check.svg"
      width={20}
      height={20}
      alt="check"
      className="w-[20px] h-[20px]"
    />
    <p className="text-[16px] font-light opacity-50">{text}</p>
  </li>
);
