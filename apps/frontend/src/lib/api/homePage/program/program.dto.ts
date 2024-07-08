import { GetHomePageProgramSectionQuery } from "@/__generated__/graphql";
import { BACKEND_URL } from "@/lib/constants";
import { Description, Program } from "@/types";

export class HomePageProgramSectionDto {
  title: string | null | undefined;
  descriptions: Description[] | null | undefined;
  programs: Program[] | null | undefined;

  constructor(public data: GetHomePageProgramSectionQuery) {
    this.title = data.homePage?.data?.attributes?.program_section.title;
    this.descriptions = data.homePage?.data?.attributes?.program_section?.descriptions?.map(
      (description) => ({
        text: description?.text,
      }),
    );

    this.programs = data.homePage?.data?.attributes?.program_section?.programs?.data.map(
      (program) => ({
        title: program?.attributes?.title,
        description: program?.attributes?.description,
        time: program?.attributes?.time,
        finished: program?.attributes?.finished,
        image: program?.attributes?.image?.data?.attributes && {
          alternativeText: program?.attributes?.image?.data?.attributes?.alternativeText,
          url: BACKEND_URL + program?.attributes?.image?.data?.attributes?.url,
        },
      }),
    );
  }
}
