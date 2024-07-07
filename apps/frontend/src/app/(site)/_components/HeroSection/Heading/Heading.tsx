import Image from "next/image";

import { Addition } from "./Addition";

interface HeadingProps {
  title: string;
  uptitle: string;
}

export const Heading = ({ title, uptitle }: HeadingProps) => (
  <div className="mx-auto w-[650px] mt-[95px] relative">
    <Addition text={uptitle} />
    <Image
      src="/hero/heading-pattern.svg"
      width={36}
      height={36}
      alt="pattern"
      className="absolute w-[38px] h-[38px] -top-[15px] -left-[25px]"
    />
    <h2 className="text-[80px] font-extrabold leading-[90px] text-center tracking-[-2px]">
      {title}
    </h2>
    <Image
      src="/hero/heading-pattern-after.svg"
      width={425}
      height={36}
      alt="pattern"
      className="absolute w-[425px] h-[36px] -bottom-[50px] left-[35px] "
    />
  </div>
);
