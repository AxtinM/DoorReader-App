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

const RegisterSchema = yup.object({
  name: yup.string().min(3).max(18).required(),
  surname: yup.string().min(2).max(18).required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(24).required(),
});

const register = async (values) => {
  try {
    const fname = values.name;
    const lname     = values.surname;
    const email     = values.email;
    const password  = values.password;
    
    const res = await client.post("/auth/register", { fname, lname, email, password });
    const data = await res.data;
    
    return data
    
  } catch (err) {
    console.log("---------------------ERROR---------------------");
    console.log(err)
  }

}

const RegisterInputBox = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} enabled={true}>
      <View style={styles.insideContainer}>
        <View style={styles.topTextView}>
          <Text style={styles.topText}>Sign up</Text>
        </View>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={async (values, actions) => {
            try {
              console.log(values);
              actions.resetForm();
              const res = await register(values);
              if (res.status === true) {
                actions.resetForm();
              }
            } catch (err) {
              console.log("---------------------ERROR---------------------");
              console.log(err);
            }
          }
          }
        >
          {(props) => (
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
                  flex: 7,
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <InputBox
                  label="Name :"
                  autoCapitalize="none"
                  keyboardType="default"
                  value={props.values.name}
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.name && props.errors.name}
                </Text>
                <InputBox
                  label="Surname :"
                  autoCapitalize="none"
                  keyboardType="default"
                  value={props.values.surname}
                  onChangeText={props.handleChange("surname")}
                  onBlur={props.handleBlur("surname")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.surname && props.errors.surname}
                </Text>
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
                  // onBlur={props.handleBlur("password")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.password && props.errors.password}
                </Text>
              </View>
              <View style={styles.bottomView}>
                <Btn
                  color="#fff"
                  bgColor="#4FBDBA"
                  text="Sign up"
                  onPress={props.handleSubmit}
                />
                <View style={styles.bottomTextView}>
                  <Text style={{ ...styles.bottomText, color: "#4FBDBA" }}>
                    You have an account ?
                  </Text>
                  <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={{ ...styles.bottomText, color: "#BF1363" }}>
                      Log in
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        </Formik>
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
  errorMessage: {
    fontSize: 10,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterInputBox;
