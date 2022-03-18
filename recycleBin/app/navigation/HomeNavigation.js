import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screen/HomeScreen";

const Tabs = createMaterialTopTabNavigator();
const HomeNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      {/* <Tabs.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Tabs.Screen name="Settings" component={SettingScreen} /> */}
    </Tabs.Navigator>
  );
};

export default HomeNavigation;
