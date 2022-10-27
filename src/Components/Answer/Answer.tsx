import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors, fontFamily } from "../../Themes/utils";

const Answer = ({
  answer,
  index,
  correct,
  showAnswer,
  setChecked,
  checked,
}: {
  answer: string;
  index: number;
  correct: boolean;
  showAnswer: boolean;
  checked: number | false;
  setChecked: () => void;
}): React.ReactElement => {
  const getLetterByIndex = (number: number): string => {
    switch (number) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
    }
  };

  return (
    <TouchableOpacity
      key={answer}
      style={{
        width: "95%",
        minHeight: 50,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: showAnswer
          ? correct
            ? colors.green
            : colors.red
          : "transparent",
      }}
      onPress={!showAnswer ? setChecked : null}
    >
      <View
        style={{
          width: "10%",
          aspectRatio: 1,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          borderRadius: 5,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{ fontSize: 18, fontFamily: fontFamily.mainFontFamilyBlack }}
        >
          {getLetterByIndex(index)}
        </Text>
      </View>
      {checked !== false && checked == index ? (
        <Icon
          name="check"
          size={70}
          color={"orange"}
          style={{ position: "absolute" }}
        />
      ) : null}
      <Text
        style={{
          marginLeft: 10,
          width: "85%",
          color: showAnswer ? (correct ? "black" : "white") : "black",
          fontFamily: fontFamily.mainFontFamilyRegular,
        }}
      >
        {answer}
      </Text>
    </TouchableOpacity>
  );
};

export default Answer;
