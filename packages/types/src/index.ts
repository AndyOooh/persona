export type Option = {
  text: string;
  score: number;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};
