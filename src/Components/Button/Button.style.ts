import { StyleSheet } from "react-native";
import { fontFamily } from "../../Themes/fonts";

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 2,
    minWidth: 100,
    minHeight: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    fontFamily: fontFamily.mainFontFamilyBlack,
  },
});

export default styles;
