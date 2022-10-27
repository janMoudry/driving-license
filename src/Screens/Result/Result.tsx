import React, { useState } from "react";
import { Dimensions, Modal, Text, TouchableOpacity, View } from "react-native";
import { colors, fontFamily } from "../../Themes/utils";
import { data, QuestionData } from "../../types";
import QuestionModal from "./components/QuestionModal";
import { VictoryPie } from "victory-native";
import Hr from "../../Components/Hr";

const Result = ({ route }) => {
  const {
    title,
    results,
    topic,
  }: { title: string; results: any; topic: QuestionData } = route.params;

  const [isModalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState<{
    data: data;
    index: number;
    choosenAnswer: number;
  } | null>(null);

  let correctAnswers = 0;
  results.map((item) => {
    if (item.correct) correctAnswers++;
  });

  const percent = correctAnswers / 25;
  console.log(modalData);

  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontFamily: fontFamily.mainFontFamilyBold }}>
        {title}
      </Text>
      <Text style={{ fontSize: 20, fontFamily: fontFamily.mainFontFamilyBold }}>
        Správně: {correctAnswers} z {topic.numberOfQuestions}
      </Text>

      <VictoryPie
        data={[
          { y: correctAnswers, x: `${Math.floor(percent * 100)}%` },
          { y: 25 - correctAnswers, x: `${Math.floor((1 - percent) * 100)}%` },
        ]}
        width={250}
        height={250}
        innerRadius={50}
        style={{
          labels: {
            fill: "black",
            fontSize: 15,
            fontFamily: fontFamily.mainFontFamilyRegular,
          },
        }}
        colorScale={[colors.green, colors.red]}
      />
      <Text
        style={{
          color: percent > 0.8 ? colors.green : colors.red,
          position: "absolute",
          top: 170,
          fontFamily: fontFamily.mainFontFamilyBold,
          fontSize: 18,
        }}
      >
        {percent > 0.8 ? "uspěl" : "neuspěl"}
      </Text>
      <Hr />
      <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
        {results.map((question, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: question.correct ? colors.green : colors.red,
            }}
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
