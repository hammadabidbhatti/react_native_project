import React from "react";
import CodiLove from "../assets/CodiLove.png";
import {
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";

const MainScreen = () => {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="grey" style="auto" barStyle="light-content" />
      <Image source={CodiLove} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={[styles.roundButton1, { backgroundColor: "gray" }]}
        >
          <Text style={styles.Text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={[styles.roundButton1, { backgroundColor: "slateblue" }]}
        >
          <Text style={styles.Text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flex: 0,
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Set a professional background color
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 30,
    marginTop: 70,
  },
  buttonContainer: {
    gap: 20,
    width: "90%",
    // marginTop: 10,
  },

  roundButton1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  Text: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
  },
});

export default MainScreen;
