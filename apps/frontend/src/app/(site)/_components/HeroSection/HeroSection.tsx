import { ConsultationButton } from "@/app/_components";

import { HomePageHeroSectionDto } from "@/lib/api/homePage";

import { Heading } from "./Heading";
import { BackgroundPatterns } from "./BackgroundPatterns";

interface HeroSectionProps extends HomePageHeroSectionDto {}

export const HeroSection = async ({ heading, uptitle }: HeroSectionProps) => (
  <section className="container text-white pt-[50px] relative" id="hero">
    <BackgroundPatterns />
    <Heading title={heading || "test"} uptitle={uptitle || "test"} />
    <div className="mt-[50px] flex flex-col justify-center items-center gap-[30px] max-sm:mt-[80px] max-sm:gap-[60px]">
      <p className="text-[22px] font-light max-sm:text-center">
        Индивидуальное менторство с доведением до оффера
      </p>
      <ConsultationButton text="Написать в Telegram" className="text-white" />
    </div>
  </section>
);
