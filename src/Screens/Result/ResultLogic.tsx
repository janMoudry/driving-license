import { colors } from "../../Themes/utils";

export const getColor = (percent: number) => ({
  color: percent > 0.8 ? colors.green : colors.red,
});

export const getBaackgroundColor = (question: { correct: boolean } | null) =>
  question && {
    backgroundColor: question.correct ? colors.green : colors.red,
  };

export const getNumberOfCorrectAnswer = (results) => {
  let correctAnswers = 0;
  results.map((item) => {
    if (item.correct) correctAnswers++;
  });
  return correctAnswers;
};
