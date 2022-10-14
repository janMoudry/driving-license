import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import Screens from "../Screens";
import { ResultOption } from "./navigationOption";

const Stack = createNativeStackNavigator();

const NavigationRoutes = (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        component={BottomTabs}
        name="BottomTabs"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="QuestionCard" component={Screens.QuestionCard} />
      <Stack.Screen
        name="Result"
        component={Screens.Result}
        options={ResultOption}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default NavigationRoutes;
