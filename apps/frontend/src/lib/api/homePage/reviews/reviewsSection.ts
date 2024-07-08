import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";
import { HomePageReviewsSectionDto } from "./reviews.dto";

const GET_HOME_PAGE_REVIEWS_SECTION = gql(/* GraphQL */ `
  query getHomePageReviewsSection {
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
                  position
                  avatar {
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
