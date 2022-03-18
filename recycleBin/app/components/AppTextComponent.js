import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const AppText = ({ children, style }) => {
  return <Text style={[styles.AppText, style]}>{children}</Text>;
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

const ButtonText = ({ children }) => {
  return <Text style={styles.buttonText}>{children}</Text>;
};

export { AppText, ButtonText };
