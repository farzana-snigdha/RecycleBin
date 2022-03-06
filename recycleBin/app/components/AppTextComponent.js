import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const AppText = (props) => {
  return <Text style={styles.AppText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  AppText: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

const ButtonText = (props) => {
  return <Text style={styles.buttonText}>{props.children}</Text>;
};

export { AppText, ButtonText };
