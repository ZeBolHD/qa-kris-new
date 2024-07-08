import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";

import { HomePageHeroPricingDto } from "./pricing";

const GET_HOME_PAGE_PRICING_SECTION = gql(/* GraphQL */ `
  query getHomePagePricingSection {
    homePage {
      data {
        attributes {
          pricing_section {
            services {
              data {
                attributes {
                  title
                  price
                  postpay
                  link
                  descriptions {
                    text
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

export const getHomePagePricingSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_PRICING_SECTION,
  });
  return {
    data: new HomePageHeroPricingDto(data),
    ...rest,
  };
};
