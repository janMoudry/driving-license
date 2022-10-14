import { ScrollView } from "react-native";
import styles from "./QuestionsTheme.styles";

const QuestionsTheme = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => (
  <ScrollView style={styles.container}>{children}</ScrollView>
);

export default QuestionsTheme;
