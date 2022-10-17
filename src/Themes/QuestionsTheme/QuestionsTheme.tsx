import { View } from "react-native";
import styles from "./QuestionsTheme.styles";

const QuestionsTheme = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => <View style={styles.container}>{children}</View>;

export default QuestionsTheme;
