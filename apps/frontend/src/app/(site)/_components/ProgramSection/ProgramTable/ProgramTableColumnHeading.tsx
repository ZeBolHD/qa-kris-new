interface ProgramTableColumnHeadingProps {
  text: string;
}

export const ProgramTableColumnHeading = ({ text }: ProgramTableColumnHeadingProps) => (
  <th className="opacity-50 text-left" colSpan={1}>
    {text}
  </th>
);
