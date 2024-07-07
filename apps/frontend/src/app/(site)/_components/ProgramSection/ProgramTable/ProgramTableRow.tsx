import Image from "next/image";
import { Program } from "../types";
import { cn } from "@/lib/util";

export const ProgramTableRow = ({ image, title, description, time, finished }: Program) => (
  <tr className="w-full text-[14px]">
    <td className="h-fit">
      {image ? (
        <Image
          src={image}
          alt=""
          className="w-[47px] h-[47px] rounded-md border-none object-cover"
          width={47}
          height={47}
        />
      ) : (
        <div className="w-[47px] h-[47px]"></div>
      )}
    </td>
    <td className="w-fit gap-[9px] py-[4px] leading-tight">
      <h4>{title}</h4>
      <p className="text-[12px] mt-[10px] opacity-50">{description}</p>
    </td>
    <td>{time}</td>
    <td className={cn(finished ? "text-green-400" : "text-orange-500")}>
      {finished ? "Пройдено" : "Не пройдено"}
    </td>
  </tr>
);
