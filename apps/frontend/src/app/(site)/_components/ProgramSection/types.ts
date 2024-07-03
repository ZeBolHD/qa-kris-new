export type Program = {
  image: string;
  title: string;
  description: string;
  time: string;
  finished: boolean;
};

export type ProgramAdvantage = {
  text: string;
};

export const programAdvantages: ProgramAdvantage[] = [
  {
    text: "Программа, построенная на основе вопросов с более 100 собеседований. Только актуальная информация",
  },
  { text: "Практика на реальном веб приложении, эксклюзивно только для учеников курса" },
  {
    text: "Все актуальны инструменты, которые помогут тебе не только получить огненный оффер, но и понимать тестирование на глубоком уровнем",
  },
  {
    text: "Примеры с практики + лайфхаки практикующего сеньора QA",
  },
];

export const programs: Program[] = [
  {
    image: "",
    title: "Теория тестирования",
    description: "Виды тестироания, QA/QC",
    time: "1 неделя",
    finished: true,
  },
  {
    image: "",
    title: "Тестовая документация",
    description: "TMS, тест кейсы/чеклисты, практика",
    time: "2 неделя",
    finished: true,
  },
  {
    image: "https://seeklogo.com/images/S/swaggerhub-logo-52BE4455D6-seeklogo.com.png",
    title: "Тестирование бэкенда",
    description: "Теория по бэкенду + Kafka, kubernetes, Jenkins + практика",
    time: "3-4 неделя",
    finished: false,
  },
  {
    image: "",
    title: "Тестирование фронтенда",
    description: "Devtools, UI/UX, практика",
    time: "5 неделя",
    finished: false,
  },
  {
    image: "",
    title: "Процессы, резюме и легенда",
    description: "Реальные примеры, база знаний",
    time: "6 неделя",
    finished: false,
  },
  {
    image: "",
    title: "Финальное мок-собеседование + выход на рынок",
    description: "Реальные примеры, база знаний",
    time: "7 неделя",
    finished: false,
  },
];
