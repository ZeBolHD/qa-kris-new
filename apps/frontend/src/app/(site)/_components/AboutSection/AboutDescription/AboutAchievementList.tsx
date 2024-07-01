import AboutAchievementsListItem from "./AboutAchievementListItem";
import { Achievement } from "./types";

interface AboutAchievementsListProps {
  achievements: Achievement[];
}

const AboutAchievementsList = ({ achievements }: AboutAchievementsListProps) => {
  return (
    <ul className="w-full flex flex-col gap-[16px]">
      {achievements.map((achievement, index) => (
        <AboutAchievementsListItem key={index} {...achievement} />
      ))}
    </ul>
  );
};

export default AboutAchievementsList;
