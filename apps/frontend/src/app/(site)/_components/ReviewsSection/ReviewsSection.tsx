import { ConsultationButton } from "@/app/_components";
import { HomePageReviewsSectionDto } from "@lib/api/homePage/reviews";

import { ReviewList } from "./ReviewList";

interface ReviewsProps extends HomePageReviewsSectionDto {}

export const ReviewsSection = ({ reviews, reviews_link }: ReviewsProps) => (
  <section className="w-full container py-[50px]" id="reviews">
    <ReviewList reviews={reviews!.slice(0, 3)} />

    <div className="text-center">
      <ConsultationButton
        href={reviews_link || "/"}
        text="Посмотреть все отзывы"
        className="text-white mt-[50px]"
      />
    </div>
  </section>
);
