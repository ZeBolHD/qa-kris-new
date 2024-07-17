import { HomePageAboutSectionDto } from "@/lib/api/homePage";

import { AboutSectionDescription } from "./AboutDescription";
import { AboutPhoto } from "./AboutPhoto";
import { BackgroundPatterns } from "./BackgroundPatterns";
import { SectionHeading } from "@/app/_components";

interface AboutSectionProps extends HomePageAboutSectionDto {}

export const AboutSection = ({ avatar, achievements, title }: AboutSectionProps) => (
  <section id="about" className="py-[120px] bg-primary-bg max-sm:py-[25px]">
    <div className="container flex justify-between items-center relative max-sm:flex-col">
      <SectionHeading text="Об авторе курса" className="sm:hidden z-50 w-full text- mb-[30px]" />
      <BackgroundPatterns />
      {avatar && <AboutPhoto avatar={avatar} />}
      <AboutSectionDescription achievements={achievements} title={title} />
    </div>
  </section>
);
