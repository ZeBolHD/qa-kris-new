import Image from "next/image";

export const BackgroundPatterns = () => (
  <>
    <Image
      src="/advantages/pattern-1.svg"
      alt="pattern"
      width={180}
      height={101}
      className="min-w-[180px] min-h-[101px] -z-50 absolute bottom-0 -left-[300px] max-sm:bottom-auto max-sm:top-[25px]
      max-sm:-left-[50px]"
    />

    <Image
      src="/advantages/pattern-2.svg"
      alt="pattern"
      width={180}
      height={101}
      className="min-w-[180px] min-h-[101px] sm:hidden -z-50 absolute bottom-[25px] -right-[50px]"
    />
  </>
);
