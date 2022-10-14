import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Hr from "../../Components/Hr";
import {
  getAllCategory,
  getAllTopics,
  getRandomQuestionsByCategory,
} from "../../generalLogic/generalFunction";
import QuestionsTheme from "../../Themes/QuestionsTheme";
import { fontFamily } from "../../Themes/fonts";
import { QuestionData } from "../../types";

const Question = () => {
  const topics = getAllTopics();
  const navigation = useNavigation();
  const allQuestions = getAllCategory();

  const [shouldShuffleQuestions, setShouldShuffleQuestions] = useState(false);

  if (!topics) return <ActivityIndicator />;

  const navigateToCard = (topic) => {
    //@ts-ignore
    navigation.navigate("QuestionCard", {
      topic: topic,
    });
  };

  const shuffleQuestions = (topic: QuestionData) => {
    shouldShuffleQuestions && topic.data.sort(() => 0.5 - Math.random());

    navigateToCard(topic);
  };
  return (
    <QuestionsTheme>
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Promíchat otázky?</Text>
          <Switch
            onChange={() =>
              shouldShuffleQuestions
                ? setShouldShuffleQuestions(false)
                : setShouldShuffleQuestions(true)
            }
            value={shouldShuffleQuestions}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {topics.map((topic) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              key={topic.title}
              onPress={() => shuffleQuestions(topic)}
            >
              <Icon name="right" size={15} />
              <Text
                style={{
                  color: "blue",
                  fontFamily: fontFamily.mainFontFamilyRegular,
                }}
              >
                {topic.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Hr />
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {allQuestions.map((category) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              key={category}
              onPress={() =>
                navigateToCard(getRandomQuestionsByCategory(category))
              }
            >
              <Icon name="right" size={15} />
              <Text
                style={{
                  color: "blue",
                  fontFamily: fontFamily.mainFontFamilyRegular,
                }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
    </QuestionsTheme>
  );
};

export default Question;
