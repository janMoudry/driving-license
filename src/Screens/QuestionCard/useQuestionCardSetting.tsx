import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Video } from "expo-av";
import { fontFamily } from "../../Themes/fonts";
import { data, QuestionData } from "../../types";
import styles from "./QuestionCard.style";

const useQuestionCardSetting = ({
  questionData,
  topic,
  index,
}: {
  questionData: data;
  topic: QuestionData;
  index: number;
}) => {
  const navigation = useNavigation();
  const player = useRef(null);

  const [upperTitle, setUpperTitle] = useState("");

  const { numberOfQuestions } = topic;
  const { questionNumber, video, image, question } = questionData;

  const getLetterByIndex = (i) => {
    switch (i) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
    }
  };

  const showResult = ({ title, answers }) => {
    //@ts-ignore
    topic.test && navigation.navigate("Home");
    //@ts-ignore
    navigation.navigate("Result", { title, results: answers });
  };

  const chooseContent = () => {
    if (!!video)
      return (
        <TouchableOpacity onPress={() => {}}>
          <Video
            style={styles.video}
            source={{ uri: video }}
            ref={(ref) => {
              player.current = ref;
            }}
            shouldPlay
            //@ts-ignore
            resizeMode="stretch"
            isLooping
          />
        </TouchableOpacity>
      );
    if (!!image && typeof image === "string")
      return <Image source={{ uri: image }} style={styles.image} />;
    if (!!image && typeof image === "object" && image.length > 1)
      return (
        <View style={styles.imageArrayContainer}>
          {image.map((imageItem, i) => (
            <View
              style={{
                flexDirection: "column",
                width: "33%",
              }}
              key={i}
            >
              <Image source={{ uri: imageItem }} style={styles.imageArray} />
              <Text style={styles.imageText}> {getLetterByIndex(i)} </Text>
            </View>
          ))}
        </View>
      );
    return (
      <Text style={styles.innertitle}> {question.replace(/\s+/g, " ")} </Text>
    );
  };

  const showTitle = () => {
    if (
      !!(typeof image === "string") ||
      !!video ||
      (typeof image === "object" && image.length !== 0)
    ) {
      setUpperTitle(question.replace(/\s+/g, " "));
      return;
    }
    setUpperTitle("");
    return;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${questionNumber.slice(0, 9)} ${
        index + 1
      } z ${numberOfQuestions.replace(/\s+/g, "")}`,
      headerTitleStyle: {
        fontFamily: fontFamily.mainFontFamilyBlack,
      },
    });
  }, [index]);

  useEffect(() => {
    showTitle();
  }, [index]);

  return { upperTitle, content: chooseContent, showResult };
};

export default useQuestionCardSetting;
