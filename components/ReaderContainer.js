import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import client from "../client";

const deleteDevice = async (token, mac) => {
  const res = await client.post(
    "/device/remove",
    { macAddress: mac },
    { headers: { Authorization: `JWT ${token}` } }
  );
  const data = await res.data;
  return data;
};

const ReaderContainer = ({ name, mac }) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  const { token, devices, setDevices } = useContext(UserContext);
  //   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <IconMaterial name="doorbell-video" size={30} color="#BF1363" />
      </View>
      <Text>{name}</Text>
      <Text>Mac Address :</Text>
      <View style={styles.accessStyle}>
        <Text>{mac}</Text>
      </View>
      <Pressable
        style={styles.icon}
        onPress={async () => {
          try {
            const device = await deleteDevice(token, mac);
            const updatedDevs = devices.filter(
              (dev) => dev._id !== device.data._id
            );
            setDevices(updatedDevs);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <IconFeather name="trash" size={15} color="#FE354D" />
      </Pressable>
    </View>
  );
};

export default ReaderContainer;

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 125,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topView: {
    flex: 0.6,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  icon: {
    position: "absolute",
    bottom: 5,
    // left: 5,
  },
  accessStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    // borderWidth: 1,
  },
});
