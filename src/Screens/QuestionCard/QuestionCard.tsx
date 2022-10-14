import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Answer from "../../Components/Answer";
import Button from "../../Components/Button";
import { QuestionData } from "../../types";
import styles from "./QuestionCard.style";
import useQuestionCardSetting from "./useQuestionCardSetting";

const QuestionCard = ({ route }): React.ReactElement => {
  const { topic }: { topic: QuestionData } = route.params;

  const [showAnswer, setShowAnswer] = useState(false);
  const [checked, setChecked] = useState<number | false>(false);
  const [index, setIndex] = useState(20);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const questionData = topic.data[index];
  const {
    upperTitle,
    content,
    showResult,
  }: {
    upperTitle: string;
    content: () => React.ReactElement;
    showResult: ({
      title,
      answers,
    }: {
      title: string;
      answers: Array<string>;
    }) => void;
  } = useQuestionCardSetting({
    questionData,
    topic,
    index,
  });

  const checkCorrect = () => {
    const choosenAnswer = questionData.asnwers.find((item, index) => {
      if (checked === index) return item;
    });

    setWrongAnswers([
      ...wrongAnswers,
      {
        question: questionData,
        choosenAnswer: choosenAnswer,
        answerId: checked,
        questionId: index,
      },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <>
          <Text style={styles.title}>{upperTitle}</Text>
          <View style={styles.innerContainer}>{content()}</View>
          {questionData.asnwers.map(
            (
              answer: { answer: string; correct: boolean },
              i: number,
            ): React.ReactElement => {
              return (
                <Answer
                  key={i}
                  index={i}
                  answer={answer.answer}
                  correct={answer.correct}
                  showAnswer={showAnswer}
                  setChecked={() => setChecked(i)}
                  checked={checked}
                />
              );
            },
          )}
          <Button
            label={showAnswer ? "další" : "Ověřit"}
            onPress={
              showAnswer || topic.test
                ? () => {
                    checkCorrect();
                    if (parseInt(topic.numberOfQuestions) === index + 1) {
                      showResult({ title: topic.title, answers: wrongAnswers });
                      return;
                    }
                    setIndex(index + 1);
                    setShowAnswer(false);
                    setChecked(false);
                  }
                : () => setShowAnswer(true)
            }
          />
        </>
      </View>
    </ScrollView>
  );
};
export default QuestionCard;
