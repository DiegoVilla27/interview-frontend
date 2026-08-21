export type QuestionLevel = "basico" | "medio" | "avanzado" | "experto";

export interface ISection {
  title: string;
  collapse: string;
  icon: string;
  questions: IQuestion[];
}

export interface IQuestion {
  title: string;
  response: string;
  level: QuestionLevel;
}
