import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ width: "100%" }}>
        <HomeScreen />
        {/* <LoginScreen />
      <SignupScreen /> */}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
