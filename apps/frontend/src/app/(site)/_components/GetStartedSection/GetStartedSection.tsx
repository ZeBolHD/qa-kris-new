import { ConsultationButton } from "@/app/_components";
import { BackgroundPatterns } from "./BackgroundPatterns";

export const GetStartedSection = () => (
  <section className="my-[50px]">
    <div className="container bg-primary-bg rounded-lg py-[120px] relative overflow-hidden">
      <BackgroundPatterns />
      <div className="flex flex-col gap-[18px] justify-center items-center">
        <h2 className="text-[42px] font-bold text-center">Готовы начать учиться?</h2>
        <p className="text-[20px] font-light text-center">Ознакомительный созвон - бесплатно</p>
        <ConsultationButton text="Написать в Telegram" className="text-white" />
      </div>
    </div>
  </section>
);
