import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function LoginScreen
**/
export const LoginScreen = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>LoginScreen</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})