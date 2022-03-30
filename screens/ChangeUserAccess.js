import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import AccessBtn from "../components/buttons/AccessBtn";
import Btn from "../components/buttons/Btn1";
import client from "../client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getStatusBarHeight } from "react-native-status-bar-height";

const changeUser = async (token, id, devices) => {
  try {
    const res = await client.post(
      "/user/change",
      { identifier: id, devices },
      { headers: { Authorization: `JWT ${token}` } }
    );
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ChangeUserAccess = ({ navigation, route }) => {
  const { devices, token, user, setUsers } = useContext(UserContext);
  console.log("user : ", user);
  const [selectedDevices, setSelectedDevices] = useState([]);
  // console.log("route : ", route);

  // const { identifier } = route.params;

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
      <TopView navigation={navigation} label="Change User Access" />
      <View style={styles.topView}>
        <NavigationBtn
          onPress={() => navigation.navigate("DoorReader")}
          label="< DooReaders"
        />
      </View>
      <View style={styles.mainView}>
        <View style={styles.mainInnerView}>
          <Text style={styles.text}>Access to :</Text>
          <FlatList
            data={devices}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            extraData={selectedDevices}
            numColumns={3}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <Btn
          color="#fff"
          bgColor="#C4C4C4"
          text="Cancel"
          onPress={() => navigation.goBack()}
        />
        <Btn
          color="#fff"
          bgColor="#C4C4C4"
          text="Confirm"
          onPress={() => changeUser(token, identifier, selectedDevices)}
        />
      </View>
    </View>
  );
};

export default ChangeUserAccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
  },
  topView: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 22,
    // borderWidth: 1,
  },
  mainView: {
    flex: 0.6,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  mainInnerView: {
    width: "80%",
    marginTop: 30,
    // borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: "#4FBDBA",
  },
  bottomView: {
    flex: 0.2,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
});
