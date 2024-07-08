import { GetHomePageAdvantagesSectionQuery } from "@/__generated__/graphql";
import { Advantage } from "@/types";

export class HomePageAdvantagesSectionDto {
  advantages: Advantage[] | null | undefined;

  constructor(public data: GetHomePageAdvantagesSectionQuery) {
    this.advantages = data.homePage?.data?.attributes?.advantages_section?.advantages?.map(
      (advantage) => ({
        heading: advantage?.heading,
        text: advantage?.text,
      }),
    );
  }
}
