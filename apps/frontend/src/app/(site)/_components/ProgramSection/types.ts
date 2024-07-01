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
  { text: "Здесь нужно написать что-то про курс" },
  { text: "Здесь нужно написать что-то про курс" },
  { text: "Здесь нужно написать что-то про курс" },
];

export const programs: Program[] = [
  {
    image: "",
    title: "Теория тестирования",
    description: "Описание раздела",
    time: "1 неделя",
    finished: true,
  },
  {
    image: "",
    title: "Теория тестирования",
    description: "Описание раздела",
    time: "2 недели",
    finished: true,
  },
  {
    image: "https://seeklogo.com/images/S/swaggerhub-logo-52BE4455D6-seeklogo.com.png",
    title: "Тестирование бэкенда",
    description: "Описание раздела",
    time: "3-4 недели",
    finished: false,
  },
  {
    image: "",
    title: "Процессы и легенда",
    description: "Описание раздела",
    time: "5 недель",
    finished: false,
  },
];
