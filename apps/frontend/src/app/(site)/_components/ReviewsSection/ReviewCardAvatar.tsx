import { ImageApi } from "@/types";
import Image from "next/image";

interface ReviewCardAvatarProps {
  image?: ImageApi | null | undefined;
  initials: string;
}

export const ReviewCardAvatar = ({ image, initials }: ReviewCardAvatarProps) => {
  if (image?.url) {
    return (
      <Image
        src={image?.url}
        alt="avatar"
        width={45}
        height={45}
        className="w-[45px] h-[45px] rounded-sm border-[1px]"
      />
    );
  }

  return (
    <div className="w-[45px] h-[45px] flex justify-center items-center border-[1px] bg-white rounded-sm">
      <span className="text-black uppercase">{initials}</span>
    </div>
  );
};
