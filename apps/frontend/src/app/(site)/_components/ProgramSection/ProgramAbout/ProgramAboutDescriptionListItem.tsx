import { Description } from "@/types";
import Image from "next/image";

export const ProgramAboutDescriptionListItem = ({ text }: Description) => (
  <li className="flex items-center gap-[12px]">
    <Image
      src="/advantage-mark.svg"
      width={32}
      height={32}
      alt=""
      className="w-[32px] h-[32px] max-sm:w-[18px] max-sm:h-[18px]"
    />
    <p className="font-light opacity-50">{text}</p>
  </li>
);
