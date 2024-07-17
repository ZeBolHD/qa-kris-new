import { Advantage } from "@/types";

export const AdvantageListItem = ({ heading, text }: Advantage) => (
  <li
    className="w-[345px] text-center tracking-tight flex flex-col gap-[18px] max-sm:min-h-[195px] max-sm:w-full max-sm:px-[15px]
  max-sm:py-[34px] max-sm:text-center max-sm:bg-white max-sm:shadow-lg max-sm:rounded-xl max-sm:box-border"
  >
    <h3 className="text-[48px] font-bold max-sm:text-[45px] max-sm:tracking-tighter">{heading}</h3>
    <p className="text-[18px] font-light opacity-70 leading-snug">{text}</p>
  </li>
);
