import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ForgottenPassBox2 from "../components/ForgottenPassBox2";

let ScreenHeight = Dimensions.get("window").height;

const PassCodeScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoTextView}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
          <ForgottenPassBox2 />
          <View style={{ flex: 0.2 }}></View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4FBDBA",
    width: "100%",
    height: ScreenHeight,
  },
  logoTextView: {
    flex: 0.15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 20,
    width: "100%",
  },
  logoText: {
    fontSize: 20,
  },
});

export default PassCodeScreen;
