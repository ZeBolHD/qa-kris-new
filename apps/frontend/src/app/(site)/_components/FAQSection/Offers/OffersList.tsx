import { Offer } from "../types";
import OffersListItem from "./OffersListItem";

interface OffersListProps {
  offers: Offer[];
}

const OffersList = ({ offers }: OffersListProps) => {
  return (
    <ul className="w-full flex flex-col gap-[18px]">
      {offers.map((offer) => (
        <OffersListItem key={offer.company} {...offer} />
      ))}
    </ul>
  );
};

export default OffersList;
