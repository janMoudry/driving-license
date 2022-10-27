import { data, QuestionData } from "../../types";

export interface ResultProps {
  title: string;
  results: any;
  topic: QuestionData;
}

export type ModalData = {
  data: data;
  index: number;
  choosenAnswer: number;
} | null;
