import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { fontFamily } from "../Themes/fonts";

export const bottomTabsOption: NativeStackNavigationOptions = {
  headerShown: false,
};

export const ResultOption = ({ navigation }): NativeStackNavigationOptions => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Home");
      }}
    >
      <Icon name="home" size={30} />
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <Text
      style={{
        fontSize: 30,
        fontFamily: fontFamily.mainFontFamilyBlack,
        alignSelf: "center",
      }}
    >
      Výsledky
    </Text>
  ),
  title: "",
});
