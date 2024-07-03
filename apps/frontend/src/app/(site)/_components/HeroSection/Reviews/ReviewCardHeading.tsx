import Image from "next/image";

interface ReviewCardHeadingProps {
  author: string;
  position: string;
  image?: string;
}

const ReviewCardHeading = ({ author, image, position }: ReviewCardHeadingProps) => {
  const authorInitials = author.replace("@", "").charAt(0);

  return (
    <div className="flex items-center gap-[10px]">
      {image ? (
        <Image
          src={image}
          alt="avatar"
          width={45}
          height={45}
          className="w-[45px] h-[45px] rounded-sm border-[1px]"
        />
      ) : (
        <div className="w-[45px] h-[45px] flex justify-center items-center border-[1px] bg-white rounded-sm">
          <span className="text-black uppercase">{authorInitials}</span>
        </div>
      )}
      <div>
        <h4 className="font-bold">{author}</h4>
        <p className="text-[14px] opacity-40">{position}</p>
      </div>
    </div>
  );
};

export default ReviewCardHeading;
