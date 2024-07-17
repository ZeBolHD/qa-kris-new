import { Review } from "@/types";
import { ReviewCard } from "./ReviewCard";

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => (
  <ul className="flex w-full justify-between gap-[30px] max-sm:flex-col">
    {reviews.map((review) => (
      <ReviewCard key={review.author} {...review} />
    ))}
  </ul>
);
