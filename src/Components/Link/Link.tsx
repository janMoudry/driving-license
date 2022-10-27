import React from "react";
import { Dimensions, Text, View } from "react-native";
import { colors, fontFamily } from "../../Themes/utils";
import styles from "./Link.style";

interface LinkProps {
  label: string;
}

const Link = ({ label }: LinkProps): React.ReactElement => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </>
  );
};

export default Link;
