import { HomePageAdvantagesSectionDto } from "@/lib/api/homePage";

import { AdvantageList } from "./AdvantageList";
import { BackgroundPatterns } from "./BackgroundPatterns";

interface AdvantagesSectionProps extends HomePageAdvantagesSectionDto {}

export const AdvantagesSection = ({ advantages }: AdvantagesSectionProps) =>
  advantages && (
    <section className="py-[75px] container relative">
      <BackgroundPatterns />
      <AdvantageList advantages={advantages} />
    </section>
  );
