import { SectionHeading } from "@/app/_components";

import { HomePageCompaniesSectionDto } from "@/lib/api/homePage";

import { BackgroundPatterns } from "./BackgroundPatterns";
import { CompanyLogos } from "./CompanyLogos";

interface CompaniesSectionProps extends HomePageCompaniesSectionDto {}

export const CompaniesSection = ({ companies }: CompaniesSectionProps) => (
  <section className="p-[100px]">
    <div className="container text-center relative">
      <BackgroundPatterns />
      <SectionHeading text="Компании, в которые устраиваются ученики" centered />
      {companies && <CompanyLogos companies={companies} />}
    </div>
  </section>
);
