import { cn } from "@/lib/util";

interface ConsultationButtonProps {
  text: string;
  transparent?: boolean;
  href?: string;
  className?: string;
}

const ConsultationButton = ({
  text,
  transparent = false,
  href = "https://t.me/KQAwork",
  className,
}: ConsultationButtonProps) => {
  return (
    <a href={href} target="_blank">
      <button
        className={cn(
          "text-[18px] font-bold bg-transparent border-2  border-primary-pink rounded-full px-[28px] py-[15px]",
          !transparent && "bg-primary-pink",
          className,
        )}
      >
        {text}
      </button>
    </a>
  );
};

export default ConsultationButton;
