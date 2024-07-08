/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getHomePageAboutSection {\n    homePage {\n      data {\n        attributes {\n          about_section {\n            title\n            avatar {\n              data {\n                attributes {\n                  alternativeText\n                  url\n                }\n              }\n            }\n            achievements {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageAboutSectionDocument,
    "\n  query getHomePageAdvantagesSection {\n    homePage {\n      data {\n        attributes {\n          advantages_section {\n            advantages {\n              heading\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageAdvantagesSectionDocument,
    "\n  query getHomePageCompaniesSection {\n    homePage {\n      data {\n        attributes {\n          companies_section {\n            companies {\n              data {\n                attributes {\n                  name\n                  logo {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageCompaniesSectionDocument,
    "\n  query getHomePageFAQSection {\n    homePage {\n      data {\n        attributes {\n          faq_section {\n            faqs {\n              data {\n                attributes {\n                  question\n                  answer\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageFaqSectionDocument,
    "\n  query getHomePageHero {\n    homePage {\n      data {\n        attributes {\n          hero_section {\n            heading\n            uptitle\n            link\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageHeroDocument,
    "\n  query getHomePagePricingSection {\n    homePage {\n      data {\n        attributes {\n          pricing_section {\n            services {\n              data {\n                attributes {\n                  title\n                  price\n                  postpay\n                  link\n                  descriptions {\n                    text\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePagePricingSectionDocument,
    "\n  query getHomePageProgramSection {\n    homePage {\n      data {\n        attributes {\n          program_section {\n            title\n            programs {\n              data {\n                attributes {\n                  title\n                  description\n                  time\n                  finished\n                  image {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            descriptions {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageProgramSectionDocument,
    "\n  query getHomePageReviewsSection {\n    homePage {\n      data {\n        attributes {\n          reviews_section {\n            link\n            reviews {\n              data {\n                attributes {\n                  author\n                  text\n                  position\n                  avatar {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageReviewsSectionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePageAboutSection {\n    homePage {\n      data {\n        attributes {\n          about_section {\n            title\n            avatar {\n              data {\n                attributes {\n                  alternativeText\n                  url\n                }\n              }\n            }\n            achievements {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePageAboutSection {\n    homePage {\n      data {\n        attributes {\n          about_section {\n            title\n            avatar {\n              data {\n                attributes {\n                  alternativeText\n                  url\n                }\n              }\n            }\n            achievements {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePageAdvantagesSection {\n    homePage {\n      data {\n        attributes {\n          advantages_section {\n            advantages {\n              heading\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePageAdvantagesSection {\n    homePage {\n      data {\n        attributes {\n          advantages_section {\n            advantages {\n              heading\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePageCompaniesSection {\n    homePage {\n      data {\n        attributes {\n          companies_section {\n            companies {\n              data {\n                attributes {\n                  name\n                  logo {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePageCompaniesSection {\n    homePage {\n      data {\n        attributes {\n          companies_section {\n            companies {\n              data {\n                attributes {\n                  name\n                  logo {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePageFAQSection {\n    homePage {\n      data {\n        attributes {\n          faq_section {\n            faqs {\n              data {\n                attributes {\n                  question\n                  answer\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePageFAQSection {\n    homePage {\n      data {\n        attributes {\n          faq_section {\n            faqs {\n              data {\n                attributes {\n                  question\n                  answer\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePageHero {\n    homePage {\n      data {\n        attributes {\n          hero_section {\n            heading\n            uptitle\n            link\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePageHero {\n    homePage {\n      data {\n        attributes {\n          hero_section {\n            heading\n            uptitle\n            link\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePagePricingSection {\n    homePage {\n      data {\n        attributes {\n          pricing_section {\n            services {\n              data {\n                attributes {\n                  title\n                  price\n                  postpay\n                  link\n                  descriptions {\n                    text\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePagePricingSection {\n    homePage {\n      data {\n        attributes {\n          pricing_section {\n            services {\n              data {\n                attributes {\n                  title\n                  price\n                  postpay\n                  link\n                  descriptions {\n                    text\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePageProgramSection {\n    homePage {\n      data {\n        attributes {\n          program_section {\n            title\n            programs {\n              data {\n                attributes {\n                  title\n                  description\n                  time\n                  finished\n                  image {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            descriptions {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePageProgramSection {\n    homePage {\n      data {\n        attributes {\n          program_section {\n            title\n            programs {\n              data {\n                attributes {\n                  title\n                  description\n                  time\n                  finished\n                  image {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            descriptions {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getHomePageReviewsSection {\n    homePage {\n      data {\n        attributes {\n          reviews_section {\n            link\n            reviews {\n              data {\n                attributes {\n                  author\n                  text\n                  position\n                  avatar {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomePageReviewsSection {\n    homePage {\n      data {\n        attributes {\n          reviews_section {\n            link\n            reviews {\n              data {\n                attributes {\n                  author\n                  text\n                  position\n                  avatar {\n                    data {\n                      attributes {\n                        alternativeText\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;