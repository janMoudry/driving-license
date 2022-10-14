import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "./BottomTab";
import Screens from "../Screens";
import React from "react";
import { bottomTabsOption } from "./navigationOption";

const Tab = createBottomTabNavigator();

const BottomTabs = (): React.ReactElement => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={(props) => <BottomTab {...props} />}
  >
    <Tab.Screen
      name="Questions"
      component={Screens.Question}
      //@ts-ignore
      options={bottomTabsOption}
    />
    <Tab.Screen
      name="Home"
      component={Screens.Home}
      //@ts-ignore
      options={bottomTabsOption}
    />
    <Tab.Screen
      name="Statistics"
      component={Screens.Statistics}
      //@ts-ignore
      options={bottomTabsOption}
    />
  </Tab.Navigator>
);

export default BottomTabs;
