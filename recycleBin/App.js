import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  const handlePress = () => {
    console.log("hello");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Image source={require("./assets/icon.png")} />
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
