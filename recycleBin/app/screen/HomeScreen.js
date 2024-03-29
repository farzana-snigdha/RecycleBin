import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { auth } from '../../firebase'

import {AppText} from '../components/AppTextComponent'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Welcome")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <AppText>Email: {auth.currentUser?.email}</AppText>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <AppText style={styles.buttonText}>Sign out</AppText>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})