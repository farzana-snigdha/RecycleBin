import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, View, Text } from "react-native";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
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

  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I've been pressed for 800 milliseconds");
    }
  };

  return (
    <LongPressGestureHandler
      onHandlerStateChange={onLongPress}
      minDurationMs={800}
    >
      <View>
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
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
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
    </LongPressGestureHandler>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
