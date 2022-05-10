import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import * as ImagePicker from "expo-image-picker";
import * as Permissions from 'expo-permissions'

const Stack = createNativeStackNavigator();

export default function App() {
  // const [category, setCategory] = useState(categories[0]);

  const requestPermission = async () => {
    // const result =await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_BACKGROUND)
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
