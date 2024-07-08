import { Review } from "@/types";

import { ReviewCardHeading } from "./ReviewCardHeading";

export const ReviewCard = ({ text, author, avatar, position }: Review) => (
  <li
    className={
      "flex flex-col justify-between gap-[10px] w-[340px] text-left text-black bg-white rounded-md p-[24px] hover:shadow-xl transition-all duration-300"
    }
  >
    <ReviewCardHeading author={author} avatar={avatar} position={position} />
    <div className="flex-1">
      <p className="line-clamp-[12] whitespace-pre-line font-light">{text}</p>
    </div>

    <a
      className="cursor-pointer font-bold"
      href="https://www.it-mentors.ru/reviews?id=6173610790"
      target="_blank"
    >
      подробнее
    </a>
  </li>
);
