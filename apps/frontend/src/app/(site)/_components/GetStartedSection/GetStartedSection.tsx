import { ConsultationButton, SectionHeading } from "@/app/_components";
import { BackgroundPatterns } from "./BackgroundPatterns";

interface GetStartedSectionProps {
  consultationLink: string;
}

export const GetStartedSection = ({ consultationLink }: GetStartedSectionProps) => (
  <section className="my-[50px]">
    <div className="container bg-primary-bg rounded-lg py-[120px] relative overflow-hidden">
      <BackgroundPatterns />
      <div className="flex flex-col gap-[18px] justify-center items-center">
        <SectionHeading text="Готовы начать учиться?" />
        <p className="text-[20px] font-light text-center">Ознакомительный созвон - бесплатно</p>
        <ConsultationButton
          text="Написать в Telegram"
          className="text-white"
          href={consultationLink}
        />
      </div>
    </div>
  </section>
);
