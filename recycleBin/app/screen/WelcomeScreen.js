import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

/**
 * @author
 * @function WelcomeScreen
 **/
export const WelcomeScreen = (props) => {
  const { container } = styles;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/backgroung.jpg")}
    >
      <View style={styles.loginBtn}></View>
      <View style={styles.regBtn}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: { flex: 1,
    // to put the btn at the bottom of the screen
    justifyContent: "flex-end" },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#12ac45",
  },
  regBtn: { width: "100%", height: 70, backgroundColor: "#c2a01c" },
});
