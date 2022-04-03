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

import AwesomeAlert from "react-native-awesome-alerts";

let ScreenHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {showPopup === true ? (
        <AwesomeAlert
          show={showPopup}
          showProgress={false}
          title="Login Failed"
          message={errorMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={false}
          cancelText="cancel"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            setShowPopup(false);
          }}
          onConfirmPressed={() => {
            setShowPopup(false);
          }}
        />
      ) : (
        <></>
      )}
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoTextView}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
          <LoginInputBox
            navigation={navigation}
            setShowPopup={setShowPopup}
            setErrorMessage={setErrorMessage}
          />
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
