import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import InputBox from "../components/input/InputBox1";
import AccessBtn from "../components/buttons/AccessBtn";
import AddBtn from "../components/buttons/AddBtn";
import { Formik } from "formik";
import * as yup from "yup";
import client from "../client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-status-bar-height";

const AddUserSchema = yup.object({
  identifier: yup.string().min(5).max(5).required(),
});

const addUser = async (token, id, devices) => {
  try {
    const res = await client.post(
      "/user/add-id",
      { identifier: id, devices },
      { headers: { Authorization: `JWT ${token}` } }
    );
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const AddUserScreen = ({ navigation }) => {
  const { devices, token, user, setUsers } = useContext(UserContext);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const checkItemAdd = (mac, arr) => {
    try {
      const check = arr.includes(mac);
      if (check) {
        const newArr = arr.filter((elem) => elem !== mac);
        setSelectedDevices(newArr);
      } else {
        setSelectedDevices([...arr, mac]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderItem = (i) => {
    const bgC = selectedDevices.includes(i.item.macAddress)
      ? "#4FBDBA"
      : "#4FBDBA66";
    return (
      <AccessBtn
        BR={10}
        bgColor={bgC}
        color="#FFFFFF"
        text={`${i.item.deviceName}`}
        flex={1 / 3}
        onPress={() => checkItemAdd(i.item.macAddress, selectedDevices)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TopView navigation={navigation} label="Add User" />
      <View style={styles.topView}>
        <NavigationBtn
          onPress={() => navigation.navigate("AddDoorReader")}
          label="< DooReaders"
        />
        <NavigationBtn
          onPress={() => navigation.navigate("addRfid")}
          label="Rfid >"
        />
      </View>
      <Formik
        initialValues={{ name: "", identifier: "" }}
        validationSchema={AddUserSchema}
        onSubmit={async (values, actions) => {
          try {
            const identifier = "U" + values.identifier;
            const res = await addUser(token, identifier, selectedDevices);
            setUsers();
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(props) => (
          <>
            <KeyboardAwareScrollView
              style={{
                flex: 0.25,
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <InputBox
                  label="Name :"
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholder="name"
                  value={props.values.name}
                  onChangeText={props.handleChange("name")}
                />
                <InputBox
                  label="Identifier :"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  placeholder="345672"
                  value={props.values.identifier}
                  onChangeText={props.handleChange("identifier")}
                  onBlur={props.handleBlur("identifier")}
                />
                <Text style={styles.errorMessage}>
                  {props.touched.identifier && props.errors.identifier}
                </Text>
              </View>
            </KeyboardAwareScrollView>
            <View style={styles.bottomView}>
              <View style={styles.bottomInnerTopView}>
                <Text style={styles.textBottom}>Access to :</Text>
                <FlatList
                  data={devices}
                  renderItem={renderItem}
                  keyExtractor={(item) => item._id}
                  extraData={selectedDevices}
                  numColumns={3}
                />
              </View>
            </View>
            <AddBtn onPress={props.handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default AddUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
  },
  topView: {
    flex: 0.1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
    paddingRight: 22,
  },
  bottomView: {
    flex: 1,
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
