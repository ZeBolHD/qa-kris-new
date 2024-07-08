import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";
import { HomePageAdvantagesSectionDto } from "./advantages.dto";

const GET_HOME_PAGE_ADVANTAGES_SECTION = gql(/* GraphQL */ `
  query getHomePageAdvantagesSection {
    homePage {
      data {
        attributes {
          advantages_section {
            advantages {
              heading
              text
            }
          }
        }
      }
    }
  }
`);

export const getHomePageAdvantagesSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_ADVANTAGES_SECTION,
  });
  return {
    data: new HomePageAdvantagesSectionDto(data),
    ...rest,
  };
};
