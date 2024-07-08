import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";
import { HomePageFAQSectionDto } from "./faq.dto";

const GET_HOME_PAGE_FAQ_SECTION = gql(/* GraphQL */ `
  query getHomePageFAQSection {
    homePage {
      data {
        attributes {
          faq_section {
            faqs {
              data {
                attributes {
                  question
                  answer
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const getHomePageFAQSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_FAQ_SECTION,
  });
  return {
    data: new HomePageFAQSectionDto(data),
    ...rest,
  };
};
