import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import InputBox from "../components/input/InputBox1";
import Btn from "../components/buttons/Btn1";
const LoginInputBox = () => {
  return (
    <KeyboardAvoidingView style={styles.container} enabled={true}>
      <View style={styles.container}>
        <View style={styles.topTextView}>
          <Text style={styles.topText}>Log in</Text>
        </View>
        <View
          style={{
            flex: 0.8,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 0.5, width: "100%", alignItems: "center" }}>
            <InputBox
              label="Address mail :"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <InputBox
              label="Password :"
              autoComplete="password"
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry={true}
            />
            <View style={styles.middleTextView}>
              <Text style={styles.middleText}>Forgot Password?</Text>
            </View>
          </View>
          <View style={styles.bottomView}>
            <Btn color="#fff" bgColor="#4FBDBA" text="Log in" />
            <View style={styles.bottomTextView}>
              <Text style={{ ...styles.bottomText, color: "#4FBDBA" }}>
                New to DooReader ?
              </Text>

              <Text style={{ ...styles.bottomText, color: "#BF1363" }}>
                Sign up
              </Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    width: "85%",
    height: 300,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    alignSelf: "center",
  },
  topTextView: {
    flex: 0.1,
  },
  topText: {
    fontSize: 20,
    color: "#4FBDBA",
  },
  middleTextView: {
    width: "100%",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
    marginTop: 10,
  },
  middleText: {
    paddingRight: 30,
    color: "#4FBDBA",
    fontSize: 12,
  },
  bottomView: {
    flex: 0.4,
    marginTop: 50,
    // borderWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomTextView: {
    flex: 0.55,
    flexDirection: "row",
    marginTop: 10,
    width: "70%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  bottomText: {
    textAlign: "center",
    marginHorizontal: 3,
    fontSize: 15,
  },
});

export default LoginInputBox;
