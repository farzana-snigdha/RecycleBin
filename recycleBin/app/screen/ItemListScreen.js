import { View, Text, StatusBar, StyleSheet, FlatList,  } from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-elements";

import { CardComponent } from "../components/CardComponent";
import listingsAPI from "../api/listings";
import colors from "../config/colors";
import routes from "../navigation/routes";
import { AppText } from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from '../components/ActivityIndicator'

export default function ItemListScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true)
    const response = await listingsAPI.getListings();
    setLoading(false)
    
    if (!response.ok) return setError(true);
    
    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar />
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings}></Button>
        </>
      )}
      <ActivityIndicator visible={loading}  />
      <FlatList
        data={listings}
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
    flex:1,
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
