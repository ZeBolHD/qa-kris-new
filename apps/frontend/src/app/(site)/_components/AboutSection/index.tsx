import AboutSectionDescription from "./AboutDescription";
import AboutPhoto from "./AboutPhoto";
import BackgroundPatterns from "./BackgroundPatterns";

const AboutSection = () => {
  return (
    <section id="about" className="py-[120px] bg-primary-bg">
      <div className="container flex justify-between items-center relative">
        <BackgroundPatterns />
        <AboutPhoto image="/about/avatar-female.png" />
        <AboutSectionDescription />
      </div>
    </section>
  );
};

export default AboutSection;
