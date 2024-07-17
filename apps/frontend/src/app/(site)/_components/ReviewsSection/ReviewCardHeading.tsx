import { Review } from "@/types";

import { ReviewCardAvatar } from "./ReviewCardAvatar";

interface ReviewCardHeadingProps extends Omit<Review, "text"> {}

export const ReviewCardHeading = ({ author, avatar, position }: ReviewCardHeadingProps) => (
  <div className="flex items-center gap-[10px]">
    <ReviewCardAvatar initials={author!.replace("@", "").charAt(0)} image={avatar} />
    <div>
      <h4 className="font-bold">{author}</h4>
      <p className="text-[14px] opacity-50 max-sm:text-[12px]">{position}</p>
    </div>
  </div>
);
