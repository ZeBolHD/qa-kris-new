import Image from "next/image";

const Logo = () => {
  return (
    <a className="flex items-center" href="/">
      <Image src="/logo.svg" alt="logo" width={32} height={32} className="w-8 h-8 mr-3" />
      <h1 className="text-[22px] font-bold">krisqa</h1>
    </a>
  );
};
export default Logo;
