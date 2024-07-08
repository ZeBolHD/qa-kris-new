import { GetHomePagePricingSectionQuery } from "@/__generated__/graphql";
import { Service } from "@/types";

export class HomePageHeroPricingDto {
  services: Service[] | null | undefined;

  constructor(public data: GetHomePagePricingSectionQuery) {
    this.services = data.homePage?.data?.attributes?.pricing_section?.services?.data.map(
      (service) => ({
        title: service?.attributes?.title,
        price: service?.attributes?.price,
        postpay: service?.attributes?.postpay,
        link: service?.attributes?.link,
        descriptions: service?.attributes?.descriptions.map((description) => ({
          text: description?.text,
        })),
      }),
    );
  }
}
