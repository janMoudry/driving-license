import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Answer from "../../Components/Answer";
import Button from "../../Components/Button";
import { QuestionData } from "../../types";
import styles from "./QuestionCard.style";
import { ShowResults } from "./QuestionCardTypes";
import useQuestionCardSetting, {
  chooseContent,
} from "./useQuestionCardSetting";

let array = [];

const QuestionCard = ({ route }): React.ReactElement => {
  const { topic }: { topic: QuestionData } = route.params;

  const [showAnswer, setShowAnswer] = useState(false);
  const [checked, setChecked] = useState<number | false>(false);
  const [index, setIndex] = useState(0);

  const questionData = topic.data[index];
  const {
    upperTitle,
    showResult,
  }: {
    upperTitle: string;
    showResult: ({ title, answers, topic }: ShowResults) => void;
  } = useQuestionCardSetting({
    questionData,
    topic,
    index,
  });

  const { video, question, image } = questionData;

  const checkCorrect = () => {
    console.log(
      questionData.asnwers.find((item) => item.correct).id,
      questionData.asnwers,
    );

    const isAnswerCorrect =
      checked === questionData.asnwers.find((item) => item.correct).id;

    array.push({
      question: questionData,
      choosenAnswer: checked,
      answerId: checked,
      questionId: index,
      correct: isAnswerCorrect,
    });
  };

  const onPressedButton = () => {
    checkCorrect();
    if (parseInt(topic.numberOfQuestions) === index + 1) {
      showResult({
        title: topic.title,
        topic: topic,
        answers: array,
      });
      array = [];
      return;
    }
    setIndex(index + 1);
    setShowAnswer(false);
    setChecked(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <>
          <Text style={styles.title}>{upperTitle}</Text>
          <View style={styles.innerContainer}>
            {chooseContent({ video, image, question })}
          </View>
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
                ? onPressedButton
                : () => setShowAnswer(true)
            }
          />
        </>
      </View>
    </ScrollView>
  );
};
export default QuestionCard;
