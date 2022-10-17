import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { fontFamily } from "../../Themes/utils";

const Topics = ({ onPress, item }) => {
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    }}
    key={item}
    onPress={() => onPress(item)}
  >
    <Icon name="right" size={15} />
    <Text
      style={{
        color: "blue",
        fontFamily: fontFamily.mainFontFamilyRegular,
      }}
    >
      {item}
    </Text>
  </TouchableOpacity>;
};

export default Topics;
