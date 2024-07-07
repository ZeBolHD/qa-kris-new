import { SectionHeading } from "@/app/_components";

import { BackgroundPatterns } from "./BackgroundPatterns";

import { CompanyLogos } from "./CompanyLogos";

import { companies } from "./types";

export const CompaniesSection = () => (
  <section className="p-[100px]">
    <div className="container text-center relative">
      <BackgroundPatterns />
      <SectionHeading text="Компании, в которые устраиваются ученики" />
      <CompanyLogos companies={companies} />
    </div>
  </section>
);
