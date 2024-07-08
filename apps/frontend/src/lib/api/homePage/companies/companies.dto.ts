import { GetHomePageCompaniesSectionQuery } from "@/__generated__/graphql";
import { Company } from "@/types";

import { BACKEND_URL } from "@/lib/constants";

export class HomePageCompaniesSectionDto {
  companies: Company[] | null | undefined;

  constructor(public data: GetHomePageCompaniesSectionQuery) {
    this.companies = data.homePage?.data?.attributes?.companies_section.companies?.data.map(
      (company) => ({
        name: company.attributes?.name,
        logo: company.attributes?.logo?.data?.attributes && {
          alternativeText: company.attributes?.logo?.data?.attributes?.alternativeText,
          url: BACKEND_URL + company.attributes?.logo?.data?.attributes?.url,
        },
      }),
    );
  }
}
