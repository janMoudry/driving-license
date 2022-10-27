import { colors } from "../../Themes/utils";

export const getLetterByIndex = (number: number): string => {
  switch (number) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
  }
};

interface Colors {
  showAnswer: boolean;
  correct: boolean;
}

export const getBackgroundColor = ({
  showAnswer,
  correct,
}: Colors): { backgroundColor: string } => ({
  backgroundColor: showAnswer
    ? correct
      ? colors.green
      : colors.red
    : "transparent",
});

export const getTextColor = ({
  showAnswer,
  correct,
}: Colors): { color: string } => ({
  color: showAnswer ? (correct ? "black" : "white") : "black",
});
