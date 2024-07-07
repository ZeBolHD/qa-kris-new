import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";

import { HomePageHeroSectionDto } from "./hero.dto";

const GET_HOME_PAGE_HERO_SECTION = gql(/* GraphQL */ `
  query getHomePageHero {
    homePage {
      data {
        attributes {
          hero_section {
            heading
            uptitle
          }
        }
      }
    }
  }
`);

export const getHomePageHeroSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_HERO_SECTION,
  });
  return {
    data: new HomePageHeroSectionDto(data),
    ...rest,
  };
};
