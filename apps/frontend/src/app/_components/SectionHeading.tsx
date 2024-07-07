interface SectionHeadingProps {
  text: string;
}

export const SectionHeading = ({ text }: SectionHeadingProps) => (
  <h2 className="text-[42px] font-bold">{text}</h2>
);
