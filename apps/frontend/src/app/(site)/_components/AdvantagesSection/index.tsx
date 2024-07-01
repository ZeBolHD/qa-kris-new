import AdvantageList from "./AdvantageList";
import { advantages } from "./types";

const AdvantagesSection = () => {
  return (
    <section className="p-[75px]">
      <div className="container">
        <AdvantageList advantages={advantages} />
      </div>
    </section>
  );
};

export default AdvantagesSection;
