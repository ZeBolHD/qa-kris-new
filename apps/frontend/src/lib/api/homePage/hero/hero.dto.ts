import { GetHomePageHeroQuery } from "@/__generated__/graphql";

export class HomePageHeroSectionDto {
  heading: string | null | undefined;
  uptitle: string | null | undefined;
  link: string | null | undefined;

  constructor(public data: GetHomePageHeroQuery) {
    this.heading = data.homePage?.data?.attributes?.hero_section?.heading;
    this.uptitle = data.homePage?.data?.attributes?.hero_section?.uptitle;
    this.link = data.homePage?.data?.attributes?.hero_section?.link;
  }
}
