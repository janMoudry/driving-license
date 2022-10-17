import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Hr from "../../Components/Hr";
import Link from "../../Components/Link";
import {
  getAllCategory,
  getAllTopics,
  getRandomQuestionsByCategory,
} from "../../generalLogic/generalFunction";
import QuestionsTheme from "../../Themes/QuestionsTheme";
import { colors, fontFamily } from "../../Themes/utils";
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
      <ScrollView style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 20, fontFamily: fontFamily.mainFontFamilyBold }}
          >
            Procvičování
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "90%",
              borderWidth: 1,
            }}
          >
            <Text style={{ fontFamily: fontFamily.mainFontFamilyBold }}>
              Promíchat otázky?
            </Text>
            <Switch
              onChange={() =>
                shouldShuffleQuestions
                  ? setShouldShuffleQuestions(false)
                  : setShouldShuffleQuestions(true)
              }
              value={shouldShuffleQuestions}
              thumbColor={shouldShuffleQuestions ? "green" : "red"}
              trackColor={{ true: colors.blue }}
            />
          </View>
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
              <Link label={topic.title} />
            </TouchableOpacity>
          ))}
          <Hr />
          <Text
            style={{ fontSize: 20, fontFamily: fontFamily.mainFontFamilyBold }}
          >
            Testy
          </Text>
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
              <Link label={category} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </QuestionsTheme>
  );
};

export default Question;
