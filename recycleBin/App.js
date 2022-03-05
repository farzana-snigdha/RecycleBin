import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import { WelcomeScreen } from "./app/screen/WelcomeScreen";

export default function App() {
   
  return (
    <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", //align item with main axis
    // flexDirection:"row-reverse"
  },
});
