import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";

const messages = [
  {
    id: 1,
    title: "T1",
    desc: "d1",
    image: require("../assets/sloth.jpg"),
  },
  {
    id: 2,
    title: "T2",
    desc: "d2",
    image: require("../assets/sloth.jpg"),
  },
  {
    id: 3,
    title: "T3",
    desc: "d3",
    image: require("../assets/sloth.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <View>
      <StatusBar />
      <FlatList
        data={messages}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListItemSeperator/>
        )}
      />
    </View>
  );
}
