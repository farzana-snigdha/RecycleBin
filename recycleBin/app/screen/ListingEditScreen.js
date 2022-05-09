import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";



import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  buyingPrice: Yup.number().required().min(1).max(10000).label("Buying Price"),
  sellingPrice: Yup.number()
    .required()
    .min(1)
    .max(10000)
    .label("Selling Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Electronics", value: 3 },
  { label: "Home appliances", value: 3 },
  { label: "Others", value: 5 },
];

function ListingEditScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Picker items={categories} name="category" placeholder="Category" PickerItemComponent={CategoryPickerItem} />

        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="buyingPrice"
          placeholder="Buying Price"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="sellingPrice"
          placeholder="Selling Price"
        />
        <FormField
          maxLength={1000}
          multiline
          name="description"
          numberOfLines={5}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
