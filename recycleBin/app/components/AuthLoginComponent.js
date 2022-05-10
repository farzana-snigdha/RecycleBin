import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebase";
import colors from "../config/colors";
import AppButton from "./Button";
import { ButtonText} from "./AppTextComponent";

/**
 * @author
 * @function AuthComponent
 **/
export const AuthLoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigation =useNavigation()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const { container } = styles;
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={handleLogin} />
        <AppButton title="Register" onPress={handleSignUp} color="secondary"/>
        {/* <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <ButtonText style={styles.buttonText}>Login</ButtonText>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <ButtonText style={styles.buttonOutlineText}>Register</ButtonText>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: colors.secondary,
    marginTop: 5,
    borderColor: colors.secondary ,
    borderWidth: 2,
  },
 
});
