import Image from "next/image";

const BackgroundPatterns = () => {
  return (
    <>
      <Image
        src="/faq/pattern-1.svg"
        width={600}
        height={300}
        alt="pattern"
        className="w-[600px] h-[300px] absolute z-0 -right-[100px] top-1/2 -translate-y-1/2 transform -rotate-45"
      />
      <Image
        src="/faq/pattern-2.svg"
        width={180}
        height={100}
        alt="pattern"
        className="w-[180px] h-[100px] absolute z-0 -left-[300px] -bottom-[50px] transform"
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
        className="w-[12px] h-[12px] absolute -right-[25px] -bottom-[100px]"
      />
    </>
  );
};

export default BackgroundPatterns;
