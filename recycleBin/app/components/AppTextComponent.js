import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const AppText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS==='android' ?"Roboto":"Avenir"
  },
});
export default AppText;
