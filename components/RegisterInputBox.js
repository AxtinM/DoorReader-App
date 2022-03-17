import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import InputBox from "../components/input/InputBox1";
import Btn from "../components/buttons/Btn1";

const RegisterInputBox = () => {
  return (
    <KeyboardAvoidingView style={styles.container} enabled={true}>
      <View style={styles.insideContainer}>
        <View style={styles.topTextView}>
          <Text style={styles.topText}>Sign up</Text>
        </View>
        <View
          style={{
            flex: 0.8,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 10,
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputBox
              label="Name :"
              autoCapitalize="none"
              keyboardType="default"
            />
            <InputBox
              label="Surname :"
              autoCapitalize="none"
              keyboardType="default"
            />
            <InputBox
              label="Phone number :"
              autoCapitalize="none"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
            />
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
          </View>
          <View style={styles.bottomView}>
            <Btn color="#fff" bgColor="#4FBDBA" text="Sign up" />
            <View style={styles.bottomTextView}>
              <Text style={{ ...styles.bottomText, color: "#4FBDBA" }}>
                You have an account ?
              </Text>

              <Text style={{ ...styles.bottomText, color: "#BF1363" }}>
                Log in
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
    flex: 0.85,
    width: "85%",
    height: 600,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    alignSelf: "center",
  },
  insideContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
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
    flex: 3.6,
    marginTop: 50,
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

export default RegisterInputBox;
