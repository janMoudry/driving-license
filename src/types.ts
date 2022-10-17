export interface QuestionData {
  title: string;
  numberOfQuestions: string;
  test?: true;
  data: Array<data>;
}

export type data = {
  id: number;
  questionNumber: string;
  question: string | null;
  asnwers: Array<{ answer: string; correct: boolean; id: number }>;
  video: string | null;
  image: string | Array<string> | null;
};
