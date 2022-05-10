import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [category, setCategory] = useState(categories[0]);
  const [imageUris, setImageUris] = useState([]);
 
const handleAdd=uri=>{
  setImageUris([...imageUris,uri])
}
const handleRemove=uri=>{
  setImageUris(imageUris.filter(imageUri=>imageUri!==uri))
}
 
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <ImageInput imageUri={imageUris} onChangeImage={uri=>setImageUris(uri)} /> */}
      <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
      />
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
