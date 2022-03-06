import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const ButtonTextComponent = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,

    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default ButtonTextComponent;
