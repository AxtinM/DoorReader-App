import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import auth_img from "../assets/auth_img.png";
import Btn from "../components/buttons/Btn1";
import { getStatusBarHeight } from "react-native-status-bar-height";

const AuthHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.logoText}>LOGO</Text>
        <Text style={styles.topText}>Enjoy the experience with us</Text>
      </View>
      <ImageBackground
        source={auth_img}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.bottomContainer}>
        <Btn
          text="Log in"
          color="#4FBDBA"
          bgColor="#FFFFFF"
          navigation={navigation}
          route="Login"
        />
        <Btn
          text="Sign up"
          color="#4FBDBA"
          bgColor="#FFFFFF"
          navigation={navigation}
          route="Register"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#4FBDBA",
    marginTop: getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1,
    width: "100%",
    height: "80%",
    position: "absolute",
    top: "20%",
    left: 0,
    zIndex: 0,
  },
  topContainer: {
    flex: 0.5,
    justifyContent: "center",
    zIndex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoText: {
    color: "#000",
    fontSize: 24,
  },
  topText: {
    color: "#fff",
    marginTop: 25,
    fontSize: 24,
  },
  bottomContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default AuthHomeScreen;
