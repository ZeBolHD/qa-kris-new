import Image from "next/image";

export const BackgroundPatterns = () => (
  <>
    <Image
      src="/get-started/pattern-1.svg"
      width={300}
      height={160}
      alt="pattern"
      className="w-[300px] h-[160px] absolute z-50 -left-[150px] -bottom-[25px] max-sm:w-[180px] max-sm:h-[100px] 
      max-sm:bottom-0 max-sm:left-0 max-sm:-translate-x-1/2"
    />
    <Image
      src="/get-started/pattern-2.svg"
      width={300}
      height={160}
      alt="pattern"
      className="w-[300px] h-[160px] absolute z-50 -right-[50px] -top-[60px] max-sm:w-[180px] max-sm:h-[100px] 
      max-sm:-top-[25px] max-sm:right-0 max-sm:translate-x-1/2"
    />
    <Image
      src="/rectangle-1.svg"
      width={12}
      height={12}
      alt="rectangle"
      className="w-[12px] h-[12px] absolute left-[150px] top-[40px] rotate-45 max-sm:hidden"
    />
    <Image
      src="/rectangle-2.svg"
      width={12}
      height={12}
      alt="rectangle"
      className="w-[12px] h-[12px] absolute right-[50px] bottom-[50px] max-sm:hidden"
    />
  </>
);
