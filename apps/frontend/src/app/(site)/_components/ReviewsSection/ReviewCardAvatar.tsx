import Image from "next/image";

interface ReviewCardAvatarProps {
  url?: string;
  author: string;
}

export const ReviewCardAvatar = ({ url, author }: ReviewCardAvatarProps) => {
  if (url) {
    return (
      <Image
        src={url}
        alt="avatar"
        width={45}
        height={45}
        className="w-[45px] h-[45px] rounded-sm border-[1px]"
      />
    );
  }

  return (
    <div className="w-[45px] h-[45px] flex justify-center items-center border-[1px] bg-white rounded-sm">
      <span className="text-black uppercase">{author.replace("@", "").charAt(0)}</span>
    </div>
  );
};
