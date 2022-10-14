import React from "react";
import { Text, View } from "react-native";
import styles from "./Loading.style";

const Loading = ({ label }: { label: string }): React.ReactElement => (
  <View style={styles.conatiner}>
    <Text style={styles.text}> {label} </Text>
  </View>
);

export default Loading;
