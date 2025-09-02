export interface ISection {
  title: string;
  collapse: string;
  icon: string;
  questions: IQuestion[];
}

export interface IQuestion {
  title: string;
  response: string;
}
