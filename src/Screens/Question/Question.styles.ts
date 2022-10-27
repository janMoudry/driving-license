import { StyleSheet } from "react-native";
import { fontFamily } from "../../Themes/utils";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamily.mainFontFamilyBold,
  },
  shuffleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default styles;
