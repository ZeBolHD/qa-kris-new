import { SectionHeading } from "@/app/_components";
import { PricingList } from "./PricingList";

import { HomePageHeroPricingDto } from "@/lib/api/homePage";

interface PricingSectionProps extends HomePageHeroPricingDto {}

export const PricingSection = ({ services }: PricingSectionProps) => (
  <section className="p-[120px]" id="pricing">
    <div className="container text-center">
      <SectionHeading text="Стоимость обучения" />
    </div>
    {services && (
      <div className="mt-[50px]">
        <PricingList services={services} />
      </div>
    )}
  </section>
);
