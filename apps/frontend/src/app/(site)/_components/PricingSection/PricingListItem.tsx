import DescriptionList from "./DescriptionList";
import { Service } from "./types";

const PricingListItems = ({ title, price, postPay, descriptions }: Service) => {
  return (
    <li
      className="w-[400px] flex flex-col p-[32px] leading-tight group hover:scale-110 transition-all duration-200 relative
    hover:shadow-lg"
    >
      <div className="flex-1">
        <div className="w-full">
          <div className="flex justify-between w-full items-end">
            <p className="text-[46px] font-bold">{price}</p>
            <p className="text-[14px] font-light opacity-50 justify-end">
              {postPay ? postPay : "без постоплаты"}
            </p>
          </div>
          <h4 className="mt-[20px] text-[16px] font-light opacity-50">{title}</h4>
        </div>
        <div className="w-full my-[30px] h-[1px] bg-primary-blue"></div>
        <div>
          <DescriptionList descriptions={descriptions} />
        </div>
      </div>
      <div className="mt-[30px] fl">
        <a href="https://t.me/KQAwork" target="_blank">
          <button
            className="text-[18px] w-full py-[16px] border-[2px] text-primary-blue border-primary-blue rounded-sm font-medium
            transition-all duration-200 group-hover:bg-primary-blue group-hover:text-white"
          >
            Написать в Telegram
          </button>
        </a>
      </div>
    </li>
  );
};

export default PricingListItems;
