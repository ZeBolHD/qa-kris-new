import { ReviewCardAvatar } from "./ReviewCardAvatar";

interface ReviewCardHeadingProps {
  author: string;
  position: string;
  image?: string;
}

export const ReviewCardHeading = ({ author, image, position }: ReviewCardHeadingProps) => (
  <div className="flex items-center gap-[10px]">
    <ReviewCardAvatar {...{ url: image, author }} />
    <div>
      <h4 className="font-bold">{author}</h4>
      <p className="text-[14px] opacity-40">{position}</p>
    </div>
  </div>
);
