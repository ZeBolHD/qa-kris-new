import { HomePageAboutSectionDto } from "@/lib/api/homePage";

import { AboutSectionDescription } from "./AboutDescription";
import { AboutPhoto } from "./AboutPhoto";
import { BackgroundPatterns } from "./BackgroundPatterns";

interface AboutSectionProps extends HomePageAboutSectionDto {}

export const AboutSection = ({ avatar, achievements, title }: AboutSectionProps) => (
  <section id="about" className="py-[120px] bg-primary-bg">
    <div className="container flex justify-between items-center relative">
      <BackgroundPatterns />
      {avatar && <AboutPhoto avatar={avatar} />}
      <AboutSectionDescription achievements={achievements} title={title} />
    </div>
  </section>
);
