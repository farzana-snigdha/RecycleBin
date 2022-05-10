import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "./Text";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";

function Picker({
  icon,
  items,
  numberOfColumns=1,
  onSelectItem,
  placeholder,
  selectedItem,
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyles.colors.mediumGrey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.mediumGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <StatusBar />
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              // label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.mediumGrey,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default Picker;
