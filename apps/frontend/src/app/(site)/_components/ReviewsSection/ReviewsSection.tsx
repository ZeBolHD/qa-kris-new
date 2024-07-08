import { ConsultationButton } from "@/app/_components";
import { HomePageReviewsSectionDto } from "@lib/api/homePage/reviews";

import { ReviewCard } from "./ReviewCard";

interface ReviewsProps extends HomePageReviewsSectionDto {}

export const ReviewsSection = ({ reviews, reviews_link }: ReviewsProps) => (
  <section className="w-full container py-[50px]" id="reviews">
    <ul className="w-full ">
      <div className="flex w-full justify-between gap-[30px]">
        {reviews!.slice(0, 3).map((review) => (
          <ReviewCard key={review.author} {...review} />
        ))}
      </div>
    </ul>
    <div className="text-center">
      <ConsultationButton
        href={reviews_link || "/"}
        text="Посмотреть все отзывы"
        className="text-white mt-[50px]"
      />
    </div>
  </section>
);
