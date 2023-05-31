import { View, Text } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
}

const styles = (StyleSheet = {
  text: {
    fontSize: "20",
  },
});
