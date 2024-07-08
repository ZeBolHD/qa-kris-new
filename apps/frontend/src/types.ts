export type ImageApi = {
  alternativeText: string | null | undefined;
  url: string | null | undefined;
};

export type Review = {
  author: string | null | undefined;
  text: string | null | undefined;
  position: string | null | undefined;
  avatar: ImageApi | null | undefined;
};

export type Company = {
  name: string | null | undefined;
  logo: ImageApi | null | undefined;
};

export type Service = {
  title: string | null | undefined;
  price: string | null | undefined;
  postpay: string | null | undefined;
  link: string | null | undefined;
  descriptions: Description[] | null | undefined;
};

export type Program = {
  title: string | null | undefined;
  description: string | null | undefined;
  time: string | null | undefined;
  finished: boolean | null | undefined;
  image: ImageApi | null | undefined;
};

export type FAQ = {
  question: string | null | undefined;
  answer: string | null | undefined;
};

export type Advantage = {
  heading: string | null | undefined;
  text: string | null | undefined;
};

export type Description = {
  text: string | null | undefined;
};

export type Achievement = {
  text: string | null | undefined;
};
