import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import InputBox from "../components/input/InputBox1";
import Btn from "../components/buttons/Btn1";
import { Formik } from "formik";
import * as yup from "yup";
import client from "../client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-status-bar-height";

const AddDoorSchema = yup.object({
  mac: yup
    .string()
    .trim()
    .matches(
      "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
      "Must be a correct mac address"
    )
    .required(),
});

const AddDoorReaderNextScreen = ({ navigation, route }) => {
  const { token } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <TopView navigation={navigation} label="Add DoorReaders" />
      <View style={styles.topView}>
        <NavigationBtn
          onPress={() => navigation.navigate("AddUser")}
          label="Users >"
        />
      </View>
      <Formik
        initialValues={{ mac: "" }}
        validationSchema={AddDoorSchema}
        onSubmit={async (values, actions) => {
          try {
            const { mac } = values;
            const res = await client.post(
              "/device/add",
              { deviceName: route.params.name, macAddress: mac },
              { headers: { Authorization: `JWT ${token}` } }
            );
            if (res.data.status === true) {
              navigation.navigate("DoorReaders");
              actions.resetForm();
            }
          } catch (err) {
            alert("There has been an Error");
          }
        }}
      >
        {(props) => (
          <>
            <View
              style={{
                flex: 0.85,
                marginTop: 30,
                width: "85%",
                backgroundColor: "#E5E5E5",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
            >
              <KeyboardAwareScrollView
                style={{ flex: 1, width: "100%", paddingTop: "15%" }}
              >
                <View
                  style={{
                    flex: 0.7,
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 80, height: 80 }}
                    source={require("../assets/qr.png")}
                  />
                  <InputBox
                    label="Mac Address"
                    autoCapitalize="none"
                    keyboardType="default"
                    placeholder="00:00:5e:00:53:af"
                    value={props.values.mac}
                    onChangeText={props.handleChange("mac")}
                  />
                  <Text style={styles.errorMessage}>
                    {props.touched.mac && props.errors.mac}
                  </Text>
                  <View
                    style={{
                      flex: 0.4,
                      width: "90%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginTop: 15,
                    }}
                  >
                    <Btn
                      color="#fff"
                      bgColor="#4FBDBA"
                      text="Previous"
                      onPress={() => navigation.goBack()}
                    />
                    <Btn
                      color="#fff"
                      bgColor="#4FBDBA"
                      text="Next"
                      onPress={props.handleSubmit}
                      // onPress={() =>navigation.navigate("DoorReaders")}
                    />
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </View>
            <View style={styles.bottomView}></View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default AddDoorReaderNextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
  },
  topView: {
    flex: 0.08,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 22,
    marginTop: 20,
    // borderWidth: 1,
  },
  bottomView: {
    flex: 0.2,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  bottomInnerTopView: {
    width: "80%",
    marginTop: 30,
    // borderWidth: 1,
  },
  textBottom: {
    fontSize: 16,
    color: "#4FBDBA",
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
  },
});
