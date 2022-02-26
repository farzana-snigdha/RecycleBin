import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  
  Button,
} from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  const handlePress = () => {
    alert("button clicked")
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
     <Button title="click" onPress={handlePress}/>
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
