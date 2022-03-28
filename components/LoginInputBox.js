import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React from "react";
import InputBox from "../components/input/InputBox1";
import Btn from "../components/buttons/Btn1";
import { Formik } from "formik";
import client from "../client";
import * as yup from "yup";
import { useContext } from "react";

const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(24).required(),
});

const LoginInputBox = ({ navigation, setShowPopup }) => {
  const { setUser, setToken, token } = useContext(UserContext);

  const login = async (values) => {
    const res = await client.post("/auth/login", {
      email: values.email,
      password: values.password,
    });
    const data = await res.data;
    return data;
  };

  return (
    <KeyboardAvoidingView style={styles.container} enabled={true}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values, actions) => {
          try {
            console.log(values);
            const res = await login(values);
            console.log(
              "---------------------------LoggedIn---------------------------"
            );
            console.log(res);
            actions.resetForm();
            if (res.status === true) {
              setToken(res.jwt);
              setUser(res.data);
              if (token === null) {
                setTimeout(() => {
                  console.log(token);
                }, 200);
              }
            } else {
              throw new Error("Login Failed");
            }
          } catch (err) {
            console.log(err);
            setShowPopup(true);
            actions.resetForm();
          }
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <Text style={styles.topText}>Log in</Text>
            <View style={styles.topTextView}></View>
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
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.email && props.errors.email}
                </Text>
                <InputBox
                  label="Password :"
                  autoComplete="password"
                  autoCapitalize="none"
                  keyboardType="default"
                  secureTextEntry={true}
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.password && props.errors.password}
                </Text>

                <View style={styles.middleTextView}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("PassStack", { screen: "Email" })
                    }
                  >
                    <Text style={styles.middleText}>Forgot Password?</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.bottomView}>
                <Btn
                  color="#fff"
                  bgColor="#4FBDBA"
                  text="Log in"
                  onPress={props.handleSubmit}
                />
                <View style={styles.bottomTextView}>
                  <Text style={{ ...styles.bottomText, color: "#4FBDBA" }}>
                    New to DooReader ?
                  </Text>
                  <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={{ ...styles.bottomText, color: "#BF1363" }}>
                      Sign up
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    width: "85%",
    height: 300,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    alignSelf: "center",
    marginTop: 20,
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
    minHeight: 25,
    flexDirection: "row",
    marginTop: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-end",
    // borderWidth: 1,
  },
  bottomText: {
    textAlign: "center",
    marginHorizontal: 3,
    fontSize: 15,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginInputBox;
