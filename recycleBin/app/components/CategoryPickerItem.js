import { StyleSheet, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import { AppText } from "./AppTextComponent";

export default function CategoryPickerItem({ item, onPress }) {
  console.log(item.label);
  return (
    <View style={styles.conatiner}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: { marginTop: 5, textAlign: "center" },
});
