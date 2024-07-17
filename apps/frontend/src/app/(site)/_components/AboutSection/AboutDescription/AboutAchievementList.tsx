import { Achievement } from "@/types";
import { AboutAchievementsListItem } from "./AboutAchievementListItem";

interface AboutAchievementsListProps {
  achievements: Achievement[];
}

export const AboutAchievementsList = ({ achievements }: AboutAchievementsListProps) => (
  <ul className="w-full flex flex-col gap-[16px] text-[20px] max-sm:text-[24px]">
    {achievements.map((achievement, index) => (
      <AboutAchievementsListItem key={index} {...achievement} />
    ))}
  </ul>
);
