import { gql } from "@/__generated__";

import { query } from "../../ApolloClient";
import { HomePageCompaniesSectionDto } from "./companies.dto";

const GET_HOME_PAGE_COMPANIES_SECTION = gql(/* GraphQL */ `
  query getHomePageCompaniesSection {
    homePage {
      data {
        attributes {
          companies_section {
            companies {
              data {
                attributes {
                  name
                  logo {
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

export const getHomePageCompaniesSection = async () => {
  const { data, ...rest } = await query({
    query: GET_HOME_PAGE_COMPANIES_SECTION,
  });
  return {
    data: new HomePageCompaniesSectionDto(data),
    ...rest,
  };
};
