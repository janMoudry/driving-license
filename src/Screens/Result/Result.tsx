import { Text, View } from "react-native";
import { fontFamily } from "../../Themes/fonts";
import { QuestionData } from "../../types";

const Result = ({ route }) => {
  const { title, results } = route.params;

  console.log(results);

  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontFamily: fontFamily.mainFontFamilyBold }}>
        {title}
      </Text>
      {results.map((item) => (
        <Text key={item.questionId}>{item.questionId}</Text>
      ))}
    </View>
  );
};

export default Result;
