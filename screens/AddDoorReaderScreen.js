import { StyleSheet, Text, View, FlatList } from "react-native";
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
  name: yup.string().min(3).max(10).required(),
});

const AddDoorReaderScreen = ({ navigation }) => {
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
        initialValues={{ name: "" }}
        validationSchema={AddDoorSchema}
        onSubmit={(values, action) => {
          navigation.navigate("addMac", { name: values.name });
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
              <View
                style={{
                  flex: 0.7,
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <InputBox
                  label="Name of DoorReader :"
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholder="name"
                  value={props.values.name}
                  onChangeText={props.handleChange("name")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.name && props.errors.name}
                </Text>
                <View
                  style={{
                    flex: 0.3,
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    // borderWidth: 1,
                  }}
                >
                  <Btn
                    color="#fff"
                    bgColor="#4FBDBA"
                    text="Next"
                    onPress={props.handleSubmit}
                  ></Btn>
                </View>
              </View>
            </View>
            <View style={styles.bottomView}></View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default AddDoorReaderScreen;

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
