import Image from "next/image";

const BackgroundPatterns = () => {
  return (
    <>
      <Image
        src="/rectangle-1.svg"
        width={12}
        height={12}
        alt="rectangle"
        className="w-[12px] h-[12px] absolute -left-[100px] -top-[40px] rotate-45"
      />
      <Image
        src="/rectangle-2.svg"
        width={12}
        height={12}
        alt="rectangle"
        className="w-[12px] h-[12px] absolute right-[200px] -bottom-[60px]"
      />
      <Image
        src="/program/pattern-1.svg"
        width={700}
        height={230}
        alt="pattern"
        className="w-[700px] h-[230px] absolute z-0 right-0 top-1/2 -translate-y-1/2 -rotate-45"
      />
    </>
  );
};

export default BackgroundPatterns;
