import { gql } from "@/__generated__";

import { query } from "@lib/api/ApolloClient";

import { HomePageProgramSectionDto } from "./program.dto";

const GET_HOME_PAGE_PROGRAM_SECTION = gql(/* GraphQL */ `
  query getHomePageProgramSection {
    homePage {
      data {
        attributes {
          program_section {
            title
            programs {
              data {
                attributes {
                  title
                  description
                  time
                  finished
                  image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                }
              }
            }
            descriptions {
              text
            }
          }
        }
      }
    }
  }
`);

export const getHomePageProgramSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_PROGRAM_SECTION,
  });
  return {
    data: new HomePageProgramSectionDto(data),
    ...rest,
  };
};
