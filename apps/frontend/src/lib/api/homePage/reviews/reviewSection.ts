import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";
import { HomePageReviewsSectionDto } from "./reviews.dto";

const GET_HOME_PAGE_REVIEWS_SECTION = gql(/* GraphQL */ `
  query getHomeReviewsSection {
    homePage {
      data {
        attributes {
          reviews_section {
            link
            reviews {
              data {
                attributes {
                  author
                  text
                  avatar {
                    data {
                      attributes {
                        name
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const getHomePageReviewsSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_REVIEWS_SECTION,
  });
  return {
    data: new HomePageReviewsSectionDto(data),
    ...rest,
  };
};
