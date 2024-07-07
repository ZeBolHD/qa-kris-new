import Image from "next/image";

export const BackgroundPatterns = () => (
  <>
    <Image
      src="/about/pattern-1.svg"
      width={800}
      height={400}
      alt="pattern"
      className="w-[750px] h-[450px] absolute z-0 -left-[125px] -top-[50px] transform -rotate-[135deg]"
    />
    <Image
      src="/rectangle-1.svg"
      width={12}
      height={12}
      alt="rectangle"
      className="w-[12px] h-[12px] absolute -left-[100px] top-2/3 rotate-45"
    />
    <Image
      src="/rectangle-2.svg"
      width={12}
      height={12}
      alt="rectangle"
      className="w-[12px] h-[12px] absolute right-[100px] bottom-0"
    />
  </>
);
