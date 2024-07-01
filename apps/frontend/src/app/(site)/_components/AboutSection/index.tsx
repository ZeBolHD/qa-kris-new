import AboutPhoto from "./AboutPhoto";

const AboutSection = () => {
  return (
    <section id="about" className="py-[120px] bg-primary-bg">
      <div className="container flex justify-between items-center">
        <AboutPhoto image="" />
        {/* <AboutSectionHeading text="О курсе" />
        <AboutSectionText text="Описание курса" /> */}
      </div>
    </section>
  );
};

export default AboutSection;
