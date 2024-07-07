import { PricingList } from "./PricingList";
import { services } from "./types";

export const PricingSection = () => (
  <section className="p-[120px]" id="pricing">
    <div className="container">
      <h2 className="text-[42px] font-bold text-center">Стоимость обучения</h2>
    </div>
    <div className="mt-[50px]">
      <PricingList services={services} />
    </div>
  </section>
);
