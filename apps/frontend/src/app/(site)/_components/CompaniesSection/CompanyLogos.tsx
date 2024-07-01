import Image from "next/image";
import { Company } from "./types";

interface CompanyLogosProps {
  companies: Company[];
}

const CompanyLogos = ({ companies }: CompanyLogosProps) => {
  return (
    <ul className="w-full mt-[50px] flex justify-between">
      {companies.map((company) => (
        <li key={company.name}>
          <Image
            src={company.logo}
            width={100}
            height={100}
            alt=""
            className="w-fit h-[34px] object-contain"
          />
        </li>
      ))}
    </ul>
  );
};

export default CompanyLogos;
