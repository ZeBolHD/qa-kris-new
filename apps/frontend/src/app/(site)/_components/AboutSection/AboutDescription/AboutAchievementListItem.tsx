import Image from "next/image";

import { Achievement } from "@/types";

export const AboutAchievementsListItem = ({ text }: Achievement) => (
  <li className="w-full flex gap-[10px] items-center">
    <Image
      src="/advantage-mark.svg"
      width={32}
      height={32}
      alt="check"
      className="w-[32px] h-[32px] max-sm:w-[25px] max-sm:h-[25px]"
    />
    <p className="font-light opacity-50 tracking-tight leading-tight">{text}</p>
  </li>
);
