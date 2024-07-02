import Image from "next/image";

const BackgroundPatterns = () => {
  return (
    <>
      <Image
        src="/get-started/pattern-1.svg"
        width={300}
        height={160}
        alt="pattern"
        className="w-[300px] h-[160px] absolute z-50 -left-[150px] -bottom-[25px]"
      />
      <Image
        src="/get-started/pattern-2.svg"
        width={300}
        height={160}
        alt="pattern"
        className="w-[300px] h-[160px] absolute z-50 -right-[50px] -top-[60px]"
      />
      <Image
        src="/rectangle-1.svg"
        width={12}
        height={12}
        alt="rectangle"
        className="w-[12px] h-[12px] absolute left-[150px] top-[40px] rotate-45"
      />
      <Image
        src="/rectangle-2.svg"
        width={12}
        height={12}
        alt="rectangle"
        className="w-[12px] h-[12px] absolute right-[50px] bottom-[50px]"
      />
    </>
  );
};

export default BackgroundPatterns;
