import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screen/ListingEditScreen";

const Stack = createNativeStackNavigator();

export default function App() {

 
  return (
    <View >
      <StatusBar />
     <ListingEditScreen/>
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
