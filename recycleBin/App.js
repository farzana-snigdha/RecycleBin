import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screen/LoginScreen";
import HomeScreen from "./app/screen/HomeScreen";
import { WelcomeScreen } from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import NavRoute from "./app/navigation/NavRoute.js";
import ItemListScreen from "./app/screen/ItemListScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavRoute/>
    <ItemListScreen />

    // <ViewImageScreen/>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
