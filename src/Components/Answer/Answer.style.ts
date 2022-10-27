import { StyleSheet } from "react-native";
import { fontFamily } from "../../Themes/utils";

const styles = StyleSheet.create({
  constainer: {
    width: "95%",
    minHeight: 50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  innerContainer: {
    width: "10%",
    aspectRatio: 1,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  letter: { fontSize: 18, fontFamily: fontFamily.mainFontFamilyBlack },
  icon: { position: "absolute" },
  answer: {
    marginLeft: 10,
    width: "85%",
    fontFamily: fontFamily.mainFontFamilyRegular,
  },
});

export default styles;
