import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

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
            backgroundColor: state.index === index ? "#add1e9" : "#add8e6",
          }}
          onPress={() => navigation.navigate(screen.name)}
        >
          <Icon
            name={getIconByName(screen.name)}
            size={state.index === index ? 30 : 20}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTab;
