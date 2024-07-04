import ConsultationButton from "@/app/_components/ConsultationButton";
import Heading from "./Heading";
import BackgroundPatterns from "./BackgrounPatterns";

const HeroSection = () => {
  return (
    <>
      <section className="container text-white pt-[50px] relative" id="hero">
        <BackgroundPatterns />
        <div className="">
          <Heading />
          <div className="mt-[50px] flex flex-col justify-center items-center gap-[30px] ">
            <p className="text-[22px] font-light">
              Индивидуальное менторство с доведением до оффера
            </p>
            <ConsultationButton text="Написать в Telegram" className="text-white" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
