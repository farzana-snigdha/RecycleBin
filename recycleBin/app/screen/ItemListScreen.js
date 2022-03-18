import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import { CardComponent } from "../components/CardComponent";

export default function ItemListScreen() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 60 }}>
      <StatusBar />
      <CardComponent
        title="jacket"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
}
