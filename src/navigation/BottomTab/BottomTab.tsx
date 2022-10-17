import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { fontFamily } from "../../Themes/utils";

const BottomTab = (props: BottomTabBarProps): React.ReactElement => {
  const { state, navigation, descriptors } = props;

  const width = Dimensions.get("screen").width;

  const getIconByName = (name) => {
    switch (name) {
      case "Home":
        return "home";
      case "Statistics":
        return "linechart";
      case "Questions":
        return "form";
    }
  };

  const getNameByPageName = (name) => {
    switch (name) {
      case "Home":
        return "Domov";
      case "Questions":
        return "Otázky";
      case "Statistics":
        return "Statistiky";
      default:
        return "";
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {state.routes.map((screen, index, array) => (
        <TouchableOpacity
          key={screen.key}
          style={{
            height: 50,
            width: width / array.length,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#add8e6",
          }}
          onPress={() => navigation.navigate(screen.name)}
        >
          <Icon
            name={getIconByName(screen.name)}
            size={state.index === index ? 30 : 20}
            style={{ borderBottomWidth: state.index === index ? 5 : 0 }}
          />
          {state.index !== index && (
            <Text style={{ fontFamily: fontFamily.mainFontFamilyRegular }}>
              {getNameByPageName(screen.name)}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTab;
