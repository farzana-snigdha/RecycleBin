import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import { AppText } from "./AppTextComponent";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  const rightSwipeActions = () => {
    return (
      <View
        style={{
          backgroundColor: '#ff8303',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            color: '#1b1a17',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          Delete
        </Text>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={()=>{rightSwipeActions;renderRightActions}}>
      <TouchableHighlight  underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.mediumGrey,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
