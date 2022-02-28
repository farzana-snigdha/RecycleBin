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
      {/* in potrait mode, flex is vertical by default */}
      <View style={{ backgroundColor: "#12342a", width:100,height:100 }} />
      <View style={{ backgroundColor: "gold", width:100,height:100 }} />
      <View style={{ backgroundColor: "tomato", width:100,height:100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection:"row-reverse"
  },
});
