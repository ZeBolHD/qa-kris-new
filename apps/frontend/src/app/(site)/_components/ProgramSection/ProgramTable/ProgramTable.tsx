import { Program } from "@/types";
import { ProgramTableColumnHeading } from "./ProgramTableColumnHeading";
import { ProgramTableRow } from "./ProgramTableRow";
import { SectionHeading } from "@/app/_components";

interface ProgramTableProps {
  programs: Program[];
}

export const ProgramTable = ({ programs }: ProgramTableProps) => (
  <div className="w-full z-50">
    <h3 className="text-[16px] font-bold text-center max-sm:hidden">
      Программа обучения по неделям:
    </h3>
    <SectionHeading text="Программа обучения по неделям:" className="sm:hidden" />
    <div className="w-[560px] mt-[20px] rounded-xl bg-white h-fit px-[10px] z-50 shadow-lg max-sm:w-full max-sm:px-[14px] max-sm:py-[20px]">
      <table
        className="table-auto w-full border-separate border-spacing-0 border-spacing-y-3.5 border-spacing-x-[10px] max-sm:border-spacing-x-[8px]
      max-sm:border-spacing-y-[8px]"
      >
        <thead>
          <tr className="w-full text-[10px] h-fit">
            <ProgramTableColumnHeading text="" className="max-sm:hidden" />
            <ProgramTableColumnHeading text="Название раздела" />
            <ProgramTableColumnHeading text="Срок" />
            <ProgramTableColumnHeading text="Статус" />
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <ProgramTableRow key={index} {...program} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
