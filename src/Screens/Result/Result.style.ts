import { StyleSheet } from "react-native";
import { fontFamily } from "../../Themes/utils";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamily.mainFontFamilyBold,
  },
  result: {
    position: "absolute",
    top: 170,
    fontFamily: fontFamily.mainFontFamilyBold,
    fontSize: 18,
  },
  questionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  questionBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

export const chartStyles = {
  labels: {
    fill: "black",
    fontSize: 15,
    fontFamily: fontFamily.mainFontFamilyRegular,
  },
};
