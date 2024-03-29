import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { AppText } from "./Text";

/**
 * @author
 * @function CardComponent
 **/
export function CardComponent({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 16,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: { width: "100%", height: 160 },
  title: { marginBottom: 5 },
  subTitle: { color: colors.secondary, fontWeight: "bold" },
});
