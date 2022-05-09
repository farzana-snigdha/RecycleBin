import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screen/LoginScreen";
import RegisterScreen from "./app/screen/RegisterScreen";
import ListingEditScreen from "./app/screen/ListingEditScreen";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Electronics", value: 3 },
//   { label: "Others", value: 4 },
// ];

const Stack = createNativeStackNavigator();

export default function App() {
  // const [category, setCategory] = useState(categories[0]);
  return (
    // <NavRoute/>
    // <ListingDetailsScreen />

    // <ViewImageScreen/>
    // <ItemListScreen/> // aka listing screens in vid 64





    // <View>
    //   <StatusBar />
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </View>


    <ListingEditScreen/>
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
