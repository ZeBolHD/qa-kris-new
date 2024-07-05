export type Question = {
  title: string;
  text: string;
};

export type Offer = {
  position: string;
  company: string;
  companyImage: string;
};

export const questions: Question[] = [
  {
    title: "Что такое постоплата. Могу ли я разделить на несколько месяцев?",
    text: "Постоплата это оплата обучения после трудоустройства, равная 100 % от оклада. Оплату можно разделить на 2 месяца.",
  },
  {
    title: "Останутся ли материалы курса?",
    text: "Материалы обучения останутся навсегда в вашем личном доступе.",
  },
  {
    title: "Могу ли я попасть на обучение, если совсем ничего не знаю?",
    text: "Да, для этого есть обучение с нуля. Я научу тебя всему, даже если ты ничего не знаешь.",
  },
  {
    title:
      "Я хочу повысить свою зп, уже работаю/хочу найти вторую работу. Есть ли такой вариант обучения?",
    text: "Да, для этого есть обучение «ап грейда и зп»!. Помогу с повышением грейда и зп или найти вторую работу.",
  },
  {
    title: "А есть возможность попрактиковаться во время твоего обучения?",
    text: "Безусловно! На моем обучении вы сможете своими руками научиться тестировать на реальном проекте, пользоваться различными востребованными инструментами, а также повзаимодействовать с разработчиком!",
  },
  {
    title: "Будет ли возможность оставаться на связи после выхода на работу?",
    text: "У вас останутся доступы в чаты и в мои личные сообщения, поэтому - да! Вы можете задать мне любой вопрос в любое время совершенно бесплатно.",
  },
];

export const offers: Offer[] = [
  {
    position: "Senior QA Manual",
    company: "Точка Банк",
    companyImage:
      "https://habrastorage.org/getpro/moikrug/uploads/company/100/002/404/6/logo/medium_3a4dea269bbc58371e2508b89b479457.png",
  },
  {
    position: "Middle QA Manual",
    company: "Alfa Bank Russia",
    companyImage:
      "https://cdn.prod.website-files.com/6290ea3f9b8f16e3ab1e2eb3/64a59be8352ed0f40019e8a0_logo-alfabank.svg",
  },
  {
    position: "Middle QA Manual",
    company: "Samokat tech",
    companyImage: "https://upload.wikimedia.org/wikipedia/ru/4/48/Samokat_logo.png",
  },
];
