import { ConsultationButton } from "@/app/_components";

import { HomePageHeroSectionDto } from "@/lib/api/homePagehero";

import { Heading } from "./Heading";
import { BackgroundPatterns } from "./BackgroundPatterns";

interface HeroSectionProps extends HomePageHeroSectionDto {}

export const HeroSection = async ({ heading, uptitle }: HeroSectionProps) => (
  <section className="container text-white pt-[50px] relative" id="hero">
    <BackgroundPatterns />
    <div className="">
      <Heading title={heading || "test"} uptitle={uptitle || "test"} />
      <div className="mt-[50px] flex flex-col justify-center items-center gap-[30px] ">
        <p className="text-[22px] font-light">Индивидуальное менторство с доведением до оффера</p>
        <ConsultationButton text="Написать в Telegram" className="text-white" />
      </div>
    </div>
  </section>
);
