interface CompaniesSectionHeadingProps {
  text: string;
}

const CompaniesSectionHeading = ({ text }: CompaniesSectionHeadingProps) => {
  return <h3 className="text-[42px] font-bold">{text}</h3>;
};

export default CompaniesSectionHeading;
