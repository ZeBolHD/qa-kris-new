import { cn } from "@/lib/util";

interface ProgramTableColumnHeadingProps {
  text: string;
  className?: string;
}

export const ProgramTableColumnHeading = ({ text, className }: ProgramTableColumnHeadingProps) => (
  <th className={cn("opacity-50 text-left max-sm:text-[11px]", className)}>{text}</th>
);
