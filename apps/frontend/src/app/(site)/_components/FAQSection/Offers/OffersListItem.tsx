import Image from "next/image";
import { Offer } from "../types";

const OffersListItem = ({ position, company, companyImage }: Offer) => {
  return (
    <li className="w-full flex justify-between items-center py-[20px] px-[25px] rounded-md border-gray-100 border-[1px]">
      <div className="flex">
        <Image
          src={companyImage}
          alt={company}
          width={40}
          height={40}
          className="w-[38px] h-[38px] rounded-sm object-cover"
        />

        <div className="ml-[20px]">
          <h5 className="text-[14px] font-medium leading-tight">{position}</h5>
          <p className="text-[12px] mt-[6px] opacity-40 leading-tight">{company}</p>
        </div>
      </div>

      <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
    </li>
  );
};

export default OffersListItem;
