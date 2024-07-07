import { AdvantageList } from "./AdvantageList";
import { BackgroundPatterns } from "./BackgroundPatterns";
import { advantages } from "./types";

export const AdvantagesSection = () => (
  <section className="py-[75px] container relative">
    <BackgroundPatterns />
    <AdvantageList advantages={advantages} />
  </section>
);
