import { SectionHeading } from "@/app/_components";
import { PricingList } from "./PricingList";

import { HomePageHeroPricingDto } from "@/lib/api/homePage";

interface PricingSectionProps extends HomePageHeroPricingDto {}

export const PricingSection = ({ services }: PricingSectionProps) => (
  <section className="py-[120px] max-sm:py-[25px]" id="pricing">
    <div className="container text-center">
      <SectionHeading text="Стоимость обучения" className="max-sm:text-left" />
    </div>
    {services && (
      <div className="mt-[50px] max-sm:container">
        <PricingList services={services} />
      </div>
    )}
  </section>
);
