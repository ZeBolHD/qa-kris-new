import { GetHomePageAboutSectionQuery } from "@/__generated__/graphql";
import { BACKEND_URL } from "@/lib/constants";
import { Achievement, ImageApi } from "@/types";

export class HomePageAboutSectionDto {
  avatar: ImageApi | null | undefined;
  title: string | null | undefined;
  achievements: Achievement[] | null | undefined;

  constructor(public data: GetHomePageAboutSectionQuery) {
    this.avatar = data.homePage?.data?.attributes?.about_section?.avatar?.data?.attributes && {
      alternativeText:
        data.homePage?.data?.attributes?.about_section?.avatar?.data?.attributes?.alternativeText,
      url:
        BACKEND_URL + data.homePage?.data?.attributes?.about_section?.avatar?.data?.attributes?.url,
    };

    this.title = data.homePage?.data?.attributes?.about_section?.title;
    this.achievements = data.homePage?.data?.attributes?.about_section?.achievements?.map(
      (achievement) => ({
        text: achievement?.text,
      }),
    );
  }
}
