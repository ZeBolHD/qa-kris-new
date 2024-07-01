import PricingList from "./PricingList";
import { services } from "./types";

const PricingSection = () => {
  return (
    <section className="pt-[25px] pb-[120px]">
      <div className="container">
        <h2 className="text-[42px] font-bold text-center">Стоимость прохождения</h2>
      </div>
      <div className="mt-[50px]">
        <PricingList services={services} />
      </div>
    </section>
  );
};

export default PricingSection;
