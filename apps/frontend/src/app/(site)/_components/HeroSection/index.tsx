import ConsultationButton from "@/app/_components/ConsultationButton";
import Heading from "./Heading";
import BackgroundPatterns from "./BackgrounPatterns";
import Reviews from "./Reviews";
import { reviews } from "./Reviews/types";

const HeroSection = () => {
  return (
    <>
      <section className="container text-white  py-[50px] relative">
        <BackgroundPatterns />
        <div className="min-h-[800px]">
          <Heading />
          <div className="mt-[50px] flex flex-col justify-center items-center gap-[30px]">
            <p className="text-[22px] font-light">
              Индивидуальное менторство с доведением до оффера
            </p>
            <ConsultationButton text="Написать в Telegram" />
          </div>
          <div className="w-full mt-[50px]">
            <Reviews reviews={reviews} />
          </div>
          <div className="mt-[50px] text-center">
            <ConsultationButton
              href="https://www.it-mentors.ru/reviews?id=6173610790"
              text="Посмотреть все отзывы"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
