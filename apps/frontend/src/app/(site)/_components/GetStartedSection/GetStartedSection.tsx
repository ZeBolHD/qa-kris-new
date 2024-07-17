import { ConsultationButton, SectionHeading } from "@/app/_components";
import { BackgroundPatterns } from "./BackgroundPatterns";

interface GetStartedSectionProps {
  consultationLink: string;
}

export const GetStartedSection = ({ consultationLink }: GetStartedSectionProps) => (
  <section className="my-[50px]">
    <div className="container bg-primary-bg rounded-lg py-[120px] relative overflow-hidden max-sm:rounded-none">
      <BackgroundPatterns />
      <div className="flex flex-col gap-[18px] justify-center items-center">
        <SectionHeading
          text="Готовы начать учиться?"
          className="max-sm:text-center max-sm:text-[45px] max-sm:leading-tight max-sm:tracking-tighter"
        />
        <p className="text-[20px] font-light text-center max-sm:text-[18px]">
          Ознакомительный созвон - бесплатно
        </p>
        <ConsultationButton
          text="Написать в Telegram"
          className="text-white max-sm:py-[15px] max-sm:px-[40px]"
          href={consultationLink}
        />
      </div>
    </div>
  </section>
);
