import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

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
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/sale-logo.png")}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>

      <AppButton title="Login"/>
      <AppButton title="Register" color="secondary"/>
      
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  background: {
    flex: 1,
    // to put the btn at the bottom of the screen
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer:{
    padding:20, width:"100%",
  },
  regBtn: { width: "100%", height: 70, backgroundColor: colors.secondary },
  logo: {
    width: 100,
    height: 100,
  },
});
