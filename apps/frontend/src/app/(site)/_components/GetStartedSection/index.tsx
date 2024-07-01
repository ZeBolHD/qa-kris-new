import ConsultationButton from "@/app/_components/ConsultationButton";

const GetStartedSection = () => {
  return (
    <section className="py-[120px] bg-primary-bg">
      <div className="container">
        <div className="flex flex-col gap-[18px] justify-center items-center">
          <h2 className="text-[42px] font-bold text-center">Готовы начать учиться?</h2>
          <p className="text-[20px] font-light text-center">
            15 минут консультации проводятся бесплатно
          </p>
          <ConsultationButton text="Написать в Telegram" />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
