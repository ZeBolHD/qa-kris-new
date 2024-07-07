import { BackgroundPatterns } from "./BackgroundPatterns";
import { ProgramDescription } from "./ProgramDescription/ProgramDescription";
import { ProgramTable } from "./ProgramTable/ProgramTable";
import { programAdvantages, programs } from "./types";

export const ProgramSection = () => (
  <section id="program" className="py-[100px] bg-primary-bg">
    <div className="flex gap-[190px] w-fit mx-auto justify-between relative">
      <BackgroundPatterns />
      <ProgramDescription
        text="Тут нужно придумать какое-то описание курса, примерно на две строчки"
        advantages={programAdvantages}
      />
      <div className="flex items-center">
        <ProgramTable programs={programs} />
      </div>
    </div>
  </section>
);
