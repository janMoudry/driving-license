import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./Topics.style";

interface Topics {
  onPress: Function;
  item: any;
}

const Topics = ({ onPress, item }) => {
  <TouchableOpacity style={styles.container} key={item} onPress={onPress}>
    <Icon name="right" size={15} />
    <Text style={styles.text}>{item}</Text>
  </TouchableOpacity>;
};

export default Topics;
