import Image from "next/image";

interface AboutAchievementsListItemProps {
  text: string;
}

export const AboutAchievementsListItem = ({ text }: AboutAchievementsListItemProps) => (
  <li className="w-full flex gap-[10px] items-center">
    <Image src="/advantage-mark.svg" width={32} height={32} alt="" className="w-[32px] h-[32px]" />
    <p className="text-[20px] font-light opacity-40 tracking-tight leading-tight">{text}</p>
  </li>
);
