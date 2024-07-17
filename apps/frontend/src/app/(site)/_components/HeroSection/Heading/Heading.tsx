import Image from "next/image";

import { Addition } from "./Addition";

interface HeadingProps {
  title: string;
  uptitle: string;
}

export const Heading = ({ title, uptitle }: HeadingProps) => (
  <div className="mx-auto mt-[95px] relative max-sm:mt-[100px] max-sm:max-w-[350px]">
    <Addition text={uptitle} />
    <Image
      src="/hero/heading-pattern.svg"
      width={36}
      height={36}
      alt="pattern"
      className="absolute w-[38px] h-[38px] -top-[25px] left-[75px] max-sm:top-[5px] max-sm:-left-[20px] max-sm:w-[23px] max-sm:h-[23px]"
    />
    <h2 className="text-[80px] font-extrabold leading-[90px] text-center tracking-[-2px] mx-auto max-sm:text-[50px] ">
      {title}
    </h2>
    <Image
      src="/hero/heading-pattern-after.svg"
      width={425}
      height={36}
      alt="pattern"
      className="absolute w-[425px] h-[36px] -bottom-[50px] left-1/3 -translate-x-1/2"
    />
  </div>
);
