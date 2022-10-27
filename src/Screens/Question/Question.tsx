import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import styles from "./Question.styles";
import { navigateToCard } from "./QuestionLogic";

const Question = () => {
  const topics = getAllTopics();
  const navigation = useNavigation();
  const allQuestions = getAllCategory();

  const [shouldShuffleQuestions, setShouldShuffleQuestions] = useState(false);

  if (!topics) return <ActivityIndicator />;

  const shuffleQuestions = (topic: QuestionData) => {
    shouldShuffleQuestions && topic.data.sort(() => 0.5 - Math.random());

    navigateToCard(topic, navigation);
  };
  return (
    <QuestionsTheme>
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Procvičování</Text>
          <View style={styles.shuffleContainer}>
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
              thumbColor={shouldShuffleQuestions ? colors.green : colors.red}
              trackColor={{ true: colors.blue }}
            />
          </View>
          {topics.map((topic) => (
            <TouchableOpacity
              style={styles.buttonContainer}
              key={topic.title}
              onPress={() => shuffleQuestions(topic)}
            >
              <Link label={topic.title} />
            </TouchableOpacity>
          ))}
          <Hr />
          <Text style={styles.title}>Testy</Text>
          {allQuestions.map((category) => (
            <TouchableOpacity
              style={styles.buttonContainer}
              key={category}
              onPress={() =>
                navigateToCard(
                  getRandomQuestionsByCategory(category),
                  navigation,
                )
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
