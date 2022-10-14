import { AsyncStorage } from "react-native";

export const loadFirstStart = async () => {
  console.log("load first start");

  const firstStart = await AsyncStorage.getItem("firstStart");

  return !!firstStart;
};

export const saveFirstStart = async () => {
  console.log("save first start");

  await AsyncStorage.setItem("firstStart", true);

  return;
};
