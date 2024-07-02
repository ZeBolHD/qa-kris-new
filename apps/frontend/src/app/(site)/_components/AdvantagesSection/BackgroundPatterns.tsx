import Image from "next/image";

const BackgroundPatterns = () => {
  return (
    <>
      <Image
        src="/advantages/pattern-1.svg"
        alt=""
        width={180}
        height={101}
        className="w-[180px] h-[101px] absolute bottom-0 -left-[300px]"
      />
    </>
  );
};

export default BackgroundPatterns;
