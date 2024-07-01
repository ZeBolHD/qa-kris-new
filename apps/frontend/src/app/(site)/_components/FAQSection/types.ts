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
    title: "Можно ли взять рассрочку?",
    text: "Воспользуйся беспроцентной рассрочкой, если не можешь оплатить курс сразу. У нас нет никаких скрытых условий и переплат.",
  },
  {
    title: "Что такое постоплата?",
    text: "sadfasdfas asdfasdf asdfasdas asdfasdf",
  },
  {
    title: "Останутся ли материалы курса?",
    text: "sadfasdfas asdfasdf asdfasdas asdfasdf",
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
