import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView,  TextInput, TouchableOpacity,View, Text, StyleSheet, ImageBackground, Image  } from 'react-native'
import { auth } from '../../firebase'
import { AuthComponent } from "../components/AuthComponent";


/**
 * @author
 * @function WelcomeScreen
 **/
export const WelcomeScreen = (props) => {
  const { container } = styles;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
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

      <AuthComponent/>
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
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#12ac45",
  },
  regBtn: { width: "100%", height: 70, backgroundColor: "#c2a01c" },
  logo: {
    width: 100,
    height: 100,
  },

 
});
