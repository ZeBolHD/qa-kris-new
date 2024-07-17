import { SectionHeading } from "@/app/_components";

import { HomePageCompaniesSectionDto } from "@/lib/api/homePage";

import { BackgroundPatterns } from "./BackgroundPatterns";
import { CompanyLogos } from "./CompanyLogos";

interface CompaniesSectionProps extends HomePageCompaniesSectionDto {}

export const CompaniesSection = ({ companies }: CompaniesSectionProps) => (
  <section className="py-[100px] max-sm:py-[50px]">
    <div className="container text-center relative">
      <BackgroundPatterns />
      <SectionHeading
        text="Компании, в которые устраиваются ученики"
        className="text-center max-sm:text-left"
      />
      {companies && <CompanyLogos companies={companies} />}
    </div>
  </section>
);
