import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

interface Button {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: Button): React.ReactElement => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.label}> {label} </Text>
  </TouchableOpacity>
);

export default Button;
