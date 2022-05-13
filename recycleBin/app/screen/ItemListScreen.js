import { View, Text, StatusBar, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-elements";

import { CardComponent } from "../components/CardComponent";
import listingsAPI from "../api/listings";
import colors from "../config/colors";
import routes from "../navigation/routes";
import { AppText } from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ItemListScreen({ navigation }) {
  const getListingsApi = useApi(listingsAPI.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar />
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings}></Button>
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            onPress={() => {
              navigation.navigate(routes.LISTING_DETAILS, item);
            }}
            title={item.title}
            subTitle={"$" + item.sellingPrice}
            imageUrl={item.images[0].url}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
