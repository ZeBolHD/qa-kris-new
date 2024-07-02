import AdvantageList from "./AdvantageList";
import BackgroundPatterns from "./BackgroundPatterns";
import { advantages } from "./types";

const AdvantagesSection = () => {
  return (
    <section className="py-[75px] container relative">
      <BackgroundPatterns />
      <AdvantageList advantages={advantages} />
    </section>
  );
};

export default AdvantagesSection;
