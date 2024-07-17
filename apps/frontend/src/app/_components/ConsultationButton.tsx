import { cn } from "@/lib/util";
import Link from "next/link";

interface ConsultationButtonProps {
  text: string;
  transparent?: boolean;
  href?: string;
  className?: string;
}

export const ConsultationButton = ({
  text,
  transparent = false,
  href = "https://t.me/KQAwork",
  className,
}: ConsultationButtonProps) => (
  <Link href={href} target="_blank" className="w-fit">
    <button
      className={cn(
        "text-[18px] font-bold bg-transparent border-2  border-primary-pink rounded-full px-[28px] py-[15px] max-sm:text-[14px] max-sm:px-[14px] max-sm:py-[10px]",
        !transparent && "bg-primary-pink",
        className,
      )}
    >
      {text}
    </button>
  </Link>
);
