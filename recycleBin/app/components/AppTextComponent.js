import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const AppText = ({ children, style }) => {
  return <Text style={[styles.AppText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  AppText: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
 
});



export { AppText };
