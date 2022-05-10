import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import { AppText } from "./Text";

export default function CategoryPickerItem({ item, onPress }) {
  console.log(item.label);
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
    </TouchableOpacity>
    <AppText style={styles.label}>{item.label}</AppText>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: { marginTop: 5, textAlign: "center" },
});
