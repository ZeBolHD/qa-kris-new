import CompaniesSectionHeading from "./CompaniesSectionHeading";
import CompanyLogos from "./CompanyLogos";

import { companies } from "./types";

const CompaniesSection = () => {
  return (
    <section className="p-[100px]">
      <div className="container text-center">
        <CompaniesSectionHeading text="Компании, в которые устраиваются ученики" />
        <CompanyLogos companies={companies} />
      </div>
    </section>
  );
};

export default CompaniesSection;
