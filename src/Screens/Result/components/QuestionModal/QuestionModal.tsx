import React, { useEffect, useState } from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Answer from "../../../../Components/Answer";
import { fontFamily } from "../../../../Themes/utils";
import { data } from "../../../../types";
import {
  chooseContent,
  showTitle,
} from "../../../QuestionCard/useQuestionCardSetting";

const QuestionModal = ({
  visible,
  data,
  onClose,
  choosenAnswer,
  onNext,
  onPrevious,
  questionIndex,
}: {
  visible: boolean;
  data: data;
  onClose: Function;
  choosenAnswer: number | false;
  onPrevious: Function;
  onNext: Function;
  questionIndex: number;
}): React.ReactElement => {
  const { video, image, question } = data;

  const [upperTitle, setUpperTitle] = useState("");
  useEffect(() => {
    showTitle({ video, image, setUpperTitle, question });
  }, [data]);

  return (
    <Modal visible={visible}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Icon
            name="close"
            size={50}
            //@ts-ignorep
            onPress={onClose}
          />
          <View style={{ flexDirection: "row" }}>
            {questionIndex !== 0 && (
              <Icon
                name="caretleft"
                size={50}
                //@ts-ignorep
                onPress={onPrevious}
              />
            )}
            {questionIndex !== 24 && (
              <Icon
                name="caretright"
                size={50}
                //@ts-ignorep
                onPress={onNext}
              />
            )}
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginVertical: 10,
              fontFamily: fontFamily.mainFontFamilyBold,
              textAlign: "center",
            }}
          >
            {upperTitle}
          </Text>

          <View
            style={{
              width: "95%",
              aspectRatio: 1,
              paddingVertical: 20,
              paddingHorizontal: 10,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {chooseContent({ video, image, question })}
          </View>
          {data.asnwers.map(({ answer, correct, id }, index) => (
            <Answer
              key={id}
              answer={answer}
              index={index}
              correct={correct}
              showAnswer
              checked={
                typeof choosenAnswer === "number" ? choosenAnswer : false
              }
              setChecked={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </Modal>
  );
};

export default QuestionModal;
