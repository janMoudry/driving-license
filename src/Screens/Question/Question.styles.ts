import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../Themes/utils";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 50,
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
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    aspectRatio: 1,
    borderColor: colors.blue,
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
  },
  buttonContainer2: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tasksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: fontFamily.mainFontFamilyBold,
    fontSize: 18,
  },
  label2: {
    color: "blue",
    fontFamily: fontFamily.mainFontFamilyMedium,
  },
});

export default styles;
