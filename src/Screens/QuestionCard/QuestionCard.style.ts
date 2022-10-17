import { StyleSheet } from "react-native";
import { fontFamily } from "../../Themes/utils";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 15,
    marginVertical: 10,
    fontFamily: fontFamily.mainFontFamilyBold,
    textAlign: "center",
  },
  innertitle: {
    fontSize: 15,
    fontFamily: fontFamily.mainFontFamilyBold,
    textAlign: "center",
  },
  innerContainer: {
    width: "95%",
    aspectRatio: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    aspectRatio: 1,
  },
  video: { width: "100%", aspectRatio: 1 },
  imageArray: {
    width: "100%",
    aspectRatio: 1,
  },
  imageArrayContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    alignSelf: "center",
    fontFamily: fontFamily.mainFontFamilyBold,
    fontSize: 20,
    marginTop: 10,
  },
});

export default styles;
