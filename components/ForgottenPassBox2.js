import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useEffect } from "react";
import InputBox from "../components/input/InputBox1";
import NextRightBtn from "./buttons/NextRightBtn";

const ForgottenPassBox2 = ({ setScreenState, screenState }) => {
  //   useEffect(() => {}, [screenState]);
  return (
    <KeyboardAvoidingView style={styles.container} enabled={true}>
      <View style={styles.container}>
        <View style={styles.topTextView}>
          <Text style={styles.topText}>Password forgotten</Text>
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
              label="Code :"
              autoCapitalize="none"
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View style={styles.bottomView}>
          <NextRightBtn name="arrow-circle-left" />
          <NextRightBtn name="arrow-circle-right" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    width: "85%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    alignSelf: "center",
  },
  topTextView: {
    flex: 0.3,
  },
  topText: {
    fontSize: 20,
    color: "#4FBDBA",
  },
  bottomView: {
    flex: 0.4,
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ForgottenPassBox2;
