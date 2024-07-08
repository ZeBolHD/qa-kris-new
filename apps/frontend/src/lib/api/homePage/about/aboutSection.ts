import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";
import { HomePageAboutSectionDto } from "./about.dto";

const GET_HOME_PAGE_ABOUT_SECTION = gql(/* GraphQL */ `
  query getHomePageAboutSection {
    homePage {
      data {
        attributes {
          about_section {
            title
            avatar {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            achievements {
              text
            }
          }
        }
      }
    }
  }
`);

export const getHomePageAboutSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_ABOUT_SECTION,
  });
  return {
    data: new HomePageAboutSectionDto(data),
    ...rest,
  };
};
