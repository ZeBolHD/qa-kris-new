import Image from "next/image";

const BackgroundPatterns = () => {
  return (
    <>
      <Image
        src="/companies/pattern-1.svg"
        width={180}
        height={100}
        alt="pattern"
        className="w-[180px] h-[100px] absolute z-50 -right-[300px] -bottom-[150px]"
      />
    </>
  );
};

export default BackgroundPatterns;
