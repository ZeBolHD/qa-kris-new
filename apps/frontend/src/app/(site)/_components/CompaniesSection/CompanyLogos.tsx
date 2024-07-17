import Image from "next/image";
import { Company } from "@/types";

interface CompanyLogosProps {
  companies: Company[];
}

export const CompanyLogos = ({ companies }: CompanyLogosProps) => (
  <ul className="w-full mt-[50px] items-center flex justify-between flex-wrap max-sm:mt-[30px] max-sm:justify-center max-sm:gap-[20px]">
    {companies.map((company) => (
      <li key={company.name} className="w-fit">
        <Image
          src={company.logo?.url || ""}
          width={150}
          height={50}
          alt={company.name || ""}
          className="w-[150px] h-full object-cover max-sm:w-[110px]"
        />
      </li>
    ))}
  </ul>
);
