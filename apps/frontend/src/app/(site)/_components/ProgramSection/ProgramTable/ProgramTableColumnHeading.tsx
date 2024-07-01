import { cn } from "@/lib/util";

interface ProgramTableColumnHeadingProps {
  text: string;
}

const ProgramTableColumnHeading = ({ text }: ProgramTableColumnHeadingProps) => {
  return (
    <th className={cn("opacity-50 text-left")} colSpan={1}>
      {text}
    </th>
  );
};

export default ProgramTableColumnHeading;
