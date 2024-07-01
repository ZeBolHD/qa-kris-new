import PricingListItem from "./PricingListItem";
import { Service } from "./types";

interface PricingListProps {
  services: Service[];
}

const PricingList = ({ services }: PricingListProps) => {
  return (
    <ul className="flex w-fit mx-auto gap-[30px] justify-between">
      {services.map((service) => (
        <PricingListItem key={service.title} {...service} />
      ))}
    </ul>
  );
};

export default PricingList;
