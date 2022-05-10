import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button,Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screen/ListingEditScreen";


import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";


export default function App() {

 
  return (
    <NavigationContainer theme={navigationTheme}>
    <AuthNavigator />
  </NavigationContainer>
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
