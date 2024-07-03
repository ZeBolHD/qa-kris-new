import ReviewCard from "./ReviewCard";
import { Review } from "./types";

interface ReviewsProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <ul id="reviews" className="w-full">
      <div className="flex w-full justify-between gap-[30px]">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.author} {...review} />
        ))}
      </div>
    </ul>
  );
};

export default Reviews;
