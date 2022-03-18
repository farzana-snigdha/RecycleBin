import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { auth } from "../../firebase";
import { AuthComponent } from "../components/AuthComponent";

const LoginScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <AuthComponent />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
