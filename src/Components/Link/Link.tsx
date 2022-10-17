import { Dimensions, Text, View } from "react-native";
import { colors, fontFamily } from "../../Themes/utils";

const Link = ({ label }: { label: string }) => {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          paddingVertical: 20,
          backgroundColor: colors.blue,
          width: "90%",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.mainFontFamilyBold,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          {label}
        </Text>
      </View>
    </>
  );
};

export default Link;
