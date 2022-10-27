export const navigateToCard = (topic, navigation) => {
  //@ts-ignore
  navigation.navigate("QuestionCard", {
    topic: topic,
  });
};
