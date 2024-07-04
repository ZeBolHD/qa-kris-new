import ConsultationButton from "@/app/_components/ConsultationButton";
import ReviewCard from "./ReviewCard";
import { Review } from "./types";

interface ReviewsProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsProps) => {
  return (
    <section className="w-full container" id="reviews">
      <ul className="w-full py-[50px]">
        <div className="flex w-full justify-between gap-[30px]">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>
      </ul>
      <div className="text-center">
        <ConsultationButton
          href="https://www.it-mentors.ru/reviews?id=6173610790"
          text="Посмотреть все отзывы"
          className="text-white"
        />
      </div>
    </section>
  );
};

export default ReviewsSection;
