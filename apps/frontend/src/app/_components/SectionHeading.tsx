import { cn } from "@/lib/util";

interface SectionHeadingProps {
  text: string;
  centered?: boolean;
}

export const SectionHeading = ({ text, centered = false }: SectionHeadingProps) => (
  <h2 className={cn("text-[42px] font-bold", centered && "text-center")}>{text}</h2>
);
