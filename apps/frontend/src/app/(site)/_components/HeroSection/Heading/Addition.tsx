interface AdditionProps {
  text: string;
}

export const Addition = ({ text }: AdditionProps) => (
  <div
    className="absolute left-1/2 -top-[40px] -translate-x-1/2 -translate-y-1/2 w-fit px-[15px] py-[5px]
bg-primary-pink bg-opacity-25 rounded-full max-sm:w-full"
  >
    <p className="text-[16px] text-center w-full max-sm:text-[14px]">{text}</p>
  </div>
);
