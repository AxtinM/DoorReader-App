import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import LoginInputBox from "../components/LoginInputBox";
let ScreenHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {showPopup === true ? (
        Alert.alert("Login Failed", "Failed Login,\nPlease try again", [
          { text: "OK", onPress: () => setShowPopup(false) },
        ])
      ) : (
        <></>
      )}
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoTextView}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
          <LoginInputBox navigation={navigation} setShowPopup={setShowPopup} />
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
    flex: 0.1,
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

export default LoginScreen;
