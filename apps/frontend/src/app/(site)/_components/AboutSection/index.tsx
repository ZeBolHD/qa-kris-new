import AboutSectionDescription from "./AboutDescription";
import AboutPhoto from "./AboutPhoto";
import BackgroundPatterns from "./BackgroundPatterns";

const AboutSection = () => {
  return (
    <section id="about" className="py-[120px] bg-primary-bg">
      <div className="container flex justify-between items-center relative">
        <BackgroundPatterns />
        <AboutPhoto image="https://img3.teletype.in/files/ec/bc/ecbcdbce-c70d-4ede-9005-e70b80167632.png" />
        <AboutSectionDescription />
      </div>
    </section>
  );
};

export default AboutSection;
