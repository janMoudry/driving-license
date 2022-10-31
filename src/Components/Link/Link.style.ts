import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../Themes/utils";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 20,
    backgroundColor: colors.blue,
  },
  label: {
    fontFamily: fontFamily.mainFontFamilyBold,
    fontSize: 15,
    textAlign: "center",
  },
});

export default styles;
