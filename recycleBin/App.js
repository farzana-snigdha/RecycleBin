import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, SafeAreaView } from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  const handlePress = () => {
    console.log("hello");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text >
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      {/* touchables works as onPress for images */}
      <TouchableWithoutFeedback onPress={handlePress} >
      <Image
      blurRadius={2} 
      fadeDuration={1000}
      
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/seed/picsum/200/300"}} />

      </TouchableWithoutFeedback>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
