import { View, Text, StatusBar, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Card } from "react-native-elements";

import { CardComponent } from "../components/CardComponent";
import colors from "../config/colors";
import routes from "../navigation/routes";
const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

export default function ItemListScreen({navigation}) {

  return (
    <View style={styles.screen}>
      <StatusBar />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => 
          <CardComponent
          onPress={()=>{navigation.navigate(routes.LISTING_DETAILS, item )}}
          title={item.title}
          subTitle={"$" + item.price}
          image={item.image}
          /> 
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
