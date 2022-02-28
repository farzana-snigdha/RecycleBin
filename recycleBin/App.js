import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";

export default function App() {
  const clickYes = () => {
    console.log("yes clicked");
  };
  console.log(" ");
  const handlePress = () => {
    //to show an alert
    Alert.alert("my title", "button clicked", [
      { text: "yes", onPress: clickYes },
      { text: "no", onPress: () => console.log("no clicked") },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#12342a", flex: 3 }} />
      <View style={{ backgroundColor: "gold", flex: 2 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
