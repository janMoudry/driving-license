import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../Themes/utils";
import QuestionModal from "./components/QuestionModal";
import { VictoryPie } from "victory-native";
import Hr from "../../Components/Hr";
import styles, { chartStyles } from "./Result.style";
import {
  getBaackgroundColor,
  getColor,
  getNumberOfCorrectAnswer,
} from "./ResultLogic";
import { ModalData, ResultProps } from "./Result.types";

const Result = ({ route }) => {
  const { title, results, topic }: ResultProps = route.params;

  const [isModalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState<ModalData>(null);

  const correctAnswers = getNumberOfCorrectAnswer(results);

  const percent = correctAnswers / 25;

  const chartData = [
    { y: correctAnswers, x: `${Math.floor(percent * 100)}%` },
    { y: 25 - correctAnswers, x: `${Math.floor((1 - percent) * 100)}%` },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>
        Správně: {correctAnswers} z {topic.numberOfQuestions}
      </Text>

      <VictoryPie
        data={chartData}
        width={250}
        height={250}
        innerRadius={50}
        style={chartStyles}
        colorScale={[colors.green, colors.red]}
      />
      <Text style={[styles.result, getColor(percent)]}>
        {percent > 0.8 ? "uspěl" : "neuspěl"}
      </Text>
      <Hr />
      <View style={styles.questionsContainer}>
        {results.map((question, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.questionBox, getBaackgroundColor(question)]}
            onPress={() => {
              setModalData({
                data: topic.data[index],
                index: index,
                choosenAnswer: question.choosenAnswer,
              });
              setModalShow(true);
            }}
          >
            <Text> {index + 1} </Text>
          </TouchableOpacity>
        ))}
      </View>
      {modalData && (
        <QuestionModal
          visible={isModalShow}
          data={modalData.data}
          choosenAnswer={modalData.choosenAnswer}
          onClose={() => {
            setModalData(null), setModalShow(false);
          }}
          onNext={() => {
            setModalData({
              data: topic.data[modalData.index + 1],
              index: modalData.index + 1,
              choosenAnswer: results[modalData.index + 1].choosenAnswer,
            });
          }}
          onPrevious={() => {
            setModalData({
              data: topic.data[modalData.index - 1],
              index: modalData.index - 1,
              choosenAnswer: results[modalData.index - 1].choosenAnswer,
            });
          }}
          questionIndex={modalData.index}
        />
      )}
    </View>
  );
};

export default Result;
