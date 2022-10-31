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
import Icon from "react-native-vector-icons/AntDesign";
import Hr from "../../Components/Hr";
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
          <Text style={styles.title}>Testy</Text>
          <View style={styles.tasksContainer}>
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
                {/* <Link label={category} /> */}
                <Text style={styles.label}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Hr />
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
          <View>
            {topics.map((topic) => (
              <TouchableOpacity
                style={styles.buttonContainer2}
                key={topic.title}
                onPress={() => shuffleQuestions(topic)}
              >
                <Icon name="right" size={20} />
                <Text style={styles.label2}>{topic.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </QuestionsTheme>
  );
};

export default Question;
