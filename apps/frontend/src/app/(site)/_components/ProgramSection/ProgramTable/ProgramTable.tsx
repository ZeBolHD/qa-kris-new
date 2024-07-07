import { Program } from "../types";
import { ProgramTableColumnHeading } from "./ProgramTableColumnHeading";
import { ProgramTableRow } from "./ProgramTableRow";

interface ProgramTableProps {
  programs: Program[];
}

export const ProgramTable = ({ programs }: ProgramTableProps) => (
  <div className="w-full z-50">
    <h3 className="text-[16px] font-bold text-center">Программа обучения по неделям:</h3>
    <div className="w-[560px] mt-[20px] rounded-xl bg-white h-fit px-[10px] z-50 shadow-lg">
      <table className="table-auto w-full border-separate border-spacing-0 border-spacing-y-3.5 border-spacing-x-[10px]">
        <thead>
          <tr className="w-full text-[13px] h-fit">
            <ProgramTableColumnHeading text="" />
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
