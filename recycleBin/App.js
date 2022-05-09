import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screen/LoginScreen";
import HomeScreen from "./app/screen/HomeScreen";
import { WelcomeScreen } from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import NavRoute from "./app/navigation/NavRoute.js";
import ItemListScreen from "./app/screen/ItemListScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import AccountScreen from "./app/screen/AccountScreen";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";
const Stack = createNativeStackNavigator();

export default function App() {
  const [first, setFirst] = useState("");
  return (
    // <NavRoute/>
    // <ListingDetailsScreen />

    // <ViewImageScreen/>
    // <ItemListScreen/> // aka listing screens in vid 64
    <View>
      <StatusBar />
      <AppTextInput placeholder="Username" icon="email" />
    </View> 
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
