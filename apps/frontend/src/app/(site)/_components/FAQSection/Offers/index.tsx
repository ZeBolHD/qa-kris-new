import { Offer } from "../types";
import OffersList from "./OffersList";

interface OffersProps {
  offers: Offer[];
}

const Offers = ({ offers }: OffersProps) => {
  return (
    <div className="p-[35px] w-[440px] bg-white rounded-sm border-gray-100 border-[1px]">
      <h3 className="text-[19px] font-medium opacity-40">Мои отклики</h3>
      <div className="mt-[30px]">
        <OffersList offers={offers} />
      </div>
    </div>
  );
};

export default Offers;
