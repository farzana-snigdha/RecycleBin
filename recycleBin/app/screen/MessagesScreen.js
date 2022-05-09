import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, View, Text } from "react-native";

import {ListItem,ListItemDeleteAction,ListItemSeparator } from "../components/lists"
const initialMessages = [
  {
    id: 1,
    title:
      "T1 cdacac acawcaccwcw cweaewcswcw ecaecawedxq wdqadqecdca qdqcqadcqwdxq qdqcqc",
    description: "D1",
    image: require("../assets/sloth.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/sloth.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

 

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)}  />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/sloth.jpg"),
            },
          ]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,  },
});

export default MessagesScreen;
