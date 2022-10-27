import { StyleSheet } from "react-native";
import { fontFamily } from "../../Themes/utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "blue",
    fontFamily: fontFamily.mainFontFamilyRegular,
  },
});

export default styles;
