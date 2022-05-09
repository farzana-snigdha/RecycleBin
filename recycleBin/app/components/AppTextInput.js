import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {/* <Text>AppTextInput</Text> */}
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.mediumGrey}
          style={styles.icons}
        />
      )}
      <TextInput style={defaultStyles} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  
  icons: {marginRight:10},
});
