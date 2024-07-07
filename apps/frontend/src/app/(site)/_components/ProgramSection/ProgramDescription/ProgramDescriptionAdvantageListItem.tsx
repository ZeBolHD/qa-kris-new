import Image from "next/image";
import { ProgramAdvantage } from "../types";

export const ProgramDescriptionAdvantageListItem = ({ text }: ProgramAdvantage) => (
  <li className="flex items-center gap-[12px]">
    <Image src="/advantage-mark.svg" width={32} height={32} alt="" className="w-[32px] h-[32px]" />
    <p className="text-[20px] font-light opacity-40">{text}</p>
  </li>
);
