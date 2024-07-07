import { GetHomeReviewsSectionQuery } from "@/__generated__/graphql";

export class HomePageReviewsSectionDto {
  reviews_link: string | null | undefined;
  reviews:
    | {
        author: string | null | undefined;
        text: string | null | undefined;
        avatar: {
          name: string | null | undefined;
          url: string | null | undefined;
        };
      }[]
    | null
    | undefined;

  constructor(public data: GetHomeReviewsSectionQuery) {
    this.reviews_link = data.homePage?.data?.attributes?.reviews_section?.link;
    this.reviews = data.homePage?.data?.attributes?.reviews_section?.reviews?.data.map(
      (review) => ({
        author: review?.attributes?.author,
        text: review?.attributes?.text,
        avatar: {
          name: review?.attributes?.avatar?.data?.attributes?.name,
          url: review?.attributes?.avatar?.data?.attributes?.url,
        },
      }),
    );
  }
}
