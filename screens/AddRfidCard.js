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

const AddRfidSchema = yup.object({
  number: yup.string().min(9).max(17).required(),
});

const addRfid = async (token, tagId) => {
    const res   = await client.post("/rfid/add", {tagId: tagId}, {headers: {Authorization: `JWT ${token}`}});
    const data = await res.data;
    return data.newTag
} 

const AddDoorReaderScreen = ({ navigation }) => {
    const { tags, setTags, token } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <TopView navigation={navigation} label="Add Rfid Card" />
      <View style={styles.topView}>
        {/* <NavigationBtn
          onPress={() => navigation.navigate("AddUser")}
          label="Users >"
        /> */}
          </View>
            <Formik
                initialValues={{ number: "" }}
                validationSchema={AddRfidSchema}
              onSubmit={async (values, action) => {
                    console.log("object");
                    const newTag = await addRfid(token, values.number);
                  setTags(...tags, newTag);
                  console.log("first")
                    console.log(newTag)
                    // actions.resetForm();
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
                  label="Rfid Tag Number :"
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholder="10240621"
                  value={props.values.number}
                  onChangeText={props.handleChange("number")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.number && props.errors.number}
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
                  />
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
