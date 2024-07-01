import ProgramDescription from "./ProgramDescription";
import ProgramTable from "./ProgramTable";
import { programAdvantages, programs } from "./types";

const ProgramSection = () => {
  return (
    <section id="program" className="py-[100px] bg-primary-bg">
      <div className="container flex justify-between">
        <ProgramDescription
          text="Тут нужно придумать какое-то описание курса, примерно на две строчки"
          advantages={programAdvantages}
        />
        <ProgramTable programs={programs} />
      </div>
    </section>
  );
};

export default ProgramSection;
