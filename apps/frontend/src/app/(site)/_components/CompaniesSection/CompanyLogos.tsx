import Image from "next/image";
import { Company } from "@/types";

interface CompanyLogosProps {
  companies: Company[];
}

export const CompanyLogos = ({ companies }: CompanyLogosProps) => (
  <ul className="w-full mt-[50px] h-fit items-center flex justify-between">
    {companies.map((company) => (
      <li key={company.name} className="w-fit">
        <Image
          src={company.logo?.url || ""}
          width={150}
          height={50}
          alt=""
          className="w-[150px] h-full object-cover"
        />
      </li>
    ))}
  </ul>
);
