export type Description = {
  text: string;
};

export type Service = {
  title: string;
  price: string;
  postPay: boolean;
  descriptions: Description[];
};

export const services: Service[] = [
  {
    title: "Часовая консультация",
    price: "7 000₽",
    postPay: false,
    descriptions: [
      { text: "Какое-то преимущество 1" },
      { text: "Какое-то преимущество 2" },
      { text: "Какое-то преимущество 3" },
    ],
  },
  {
    title: "Групповое менторство с постоплатой после оффера (50 процентов)",
    price: "50 000₽",
    postPay: false,
    descriptions: [
      { text: "Какое-то преимущество 1" },
      { text: "Какое-то преимущество 2" },
      { text: "Какое-то преимущество 3" },
    ],
  },
  {
    title: "Индивидуальное менторство с постоплатой после оффера (50 процентов)",
    price: "70 000₽",
    postPay: false,
    descriptions: [
      { text: "Какое-то преимущество" },
      { text: "Какое-то преимущество" },
      { text: "Какое-то преимущество" },
    ],
  },
];
