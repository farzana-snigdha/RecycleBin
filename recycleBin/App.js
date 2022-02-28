import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const dimensions = useDimensions();
  //to change width in landscape mode
  const { landscape } = useDeviceOrientation();

  const clickYes = () => {
    console.log("yes clicked");
  };
  console.log(dimensions);
  const handlePress = () => {
    //to show an alert
    Alert.alert("my title", "button clicked", [
      { text: "yes", onPress: clickYes },
      { text: "no", onPress: () => console.log("no clicked") },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      <StatusBar style="auto" />
      <Button title="click" onPress={handlePress} />
    </SafeAreaView>
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
