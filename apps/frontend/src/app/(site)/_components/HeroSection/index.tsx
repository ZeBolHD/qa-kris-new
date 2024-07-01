import ConsultationButton from "@/app/_components/ConsultationButton";
import Heading from "./Heading";

const HeroSection = () => {
  return (
    <>
      <section className="container text-white h-[800px]">
        <Heading />
        <div className="mt-[50px] flex flex-col justify-center items-center gap-[30px]">
          <p className="text-[22px] font-light">Индивидуальное менторство с доведением до оффера</p>
          <ConsultationButton text="Написать в Telegram" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
