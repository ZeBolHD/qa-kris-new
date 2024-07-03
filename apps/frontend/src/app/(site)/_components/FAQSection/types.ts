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
    text: "Постоплата это оплата обучение после трудоустройства, равная 100 % от его оклада. Выплату можно разделить на 2 месяца",
  },
  {
    title: "Останутся ли материалы курса?",
    text: "Материалы обучения останутся навсегда в твоем личном доступе",
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
