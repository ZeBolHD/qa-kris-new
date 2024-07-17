import Image from "next/image";

export const BackgroundPatterns = () => (
  <>
    <Image
      src="/hero/pattern-1.svg"
      alt="pattern"
      width={180}
      height={100}
      className="w-[180px] h-[100px] absolute top-0 -left-[300px] max-sm:-left-[70px] max-sm:w-[120px] max-sm:h-[65px] max-sm:top-[10px]"
    />
    <Image
      src="/hero/pattern-2.svg"
      alt="pattern"
      width={180}
      height={100}
      className="w-[180px] h-[100px] absolute bottom-[50px] -right-[300px]"
    />
    <Image
      src="/hero/line-1.svg"
      alt="line"
      width={100}
      height={130}
      className="w-[100px] h-[130px] absolute bottom-[100px] -left-[250px]"
    />
    <Image
      src="/hero/line-2.svg"
      alt="line"
      width={120}
      height={120}
      className="w-[120px] h-[120px] absolute top-1/2 right-[50px] max-sm:h-[80px] max-sm:w-[80px] max-sm:top-auto max-sm:bottom-[25px] max-sm:right-[25px]
      max-sm:rotate-[8deg]"
    />
  </>
);
