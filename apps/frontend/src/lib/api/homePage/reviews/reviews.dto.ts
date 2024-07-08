import { GetHomePageReviewsSectionQuery } from "@/__generated__/graphql";
import { BACKEND_URL } from "@/lib/constants";
import { Review } from "@/types";

export class HomePageReviewsSectionDto {
  reviews_link: string | null | undefined;
  reviews: Review[] | null | undefined;

  constructor(public data: GetHomePageReviewsSectionQuery) {
    this.reviews_link = data.homePage?.data?.attributes?.reviews_section?.link;
    this.reviews = data.homePage?.data?.attributes?.reviews_section?.reviews?.data.map(
      (review) => ({
        author: review.attributes?.author,
        text: review?.attributes?.text,
        position: review?.attributes?.position,
        avatar: review?.attributes?.avatar?.data?.attributes && {
          alternativeText: review?.attributes?.avatar?.data?.attributes?.alternativeText,
          url: BACKEND_URL + review?.attributes?.avatar?.data?.attributes?.url,
        },
      }),
    );
  }
}
