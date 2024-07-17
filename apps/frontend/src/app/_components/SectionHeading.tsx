import { cn } from "@/lib/util";

interface SectionHeadingProps {
  text: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({ text, centered = false, className }: SectionHeadingProps) => (
  <h2
    className={cn(
      "text-[42px] font-bold max-sm:text-[32px] max-sm:leading-tight max-sm:tracking-tighter",
      centered && "text-center",
      className,
    )}
  >
    {text}
  </h2>
);
