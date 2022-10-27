import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./Answer.style";
import {
  getBackgroundColor,
  getLetterByIndex,
  getTextColor,
} from "./AnswerLogic";

interface AnswerProps {
  answer: string;
  index: number;
  correct: boolean;
  showAnswer: boolean;
  checked: number | false;
  setChecked: () => void;
}

const Answer = ({
  answer,
  index,
  correct,
  showAnswer,
  setChecked,
  checked,
}: AnswerProps): React.ReactElement => {
  return (
    <TouchableOpacity
      key={answer}
      style={[styles.constainer, getBackgroundColor({ showAnswer, correct })]}
      onPress={!showAnswer ? setChecked : null}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.letter}>{getLetterByIndex(index)}</Text>
      </View>
      {checked !== false && checked == index ? (
        <Icon name="check" size={70} color={"orange"} style={styles.icon} />
      ) : null}
      <Text style={[styles.answer, getTextColor({ showAnswer, correct })]}>
        {answer}
      </Text>
    </TouchableOpacity>
  );
};

export default Answer;
