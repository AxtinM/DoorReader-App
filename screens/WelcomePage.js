import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useContext } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import HomeImg from "../assets/home_img.png";
import TopView from "../components/TopView";
import client from "../client";

const getDevices = async (token) => {
  try {
    const res = await client.get("/device/", {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (token) => {
  try {
    const res = await client.get("/user/", {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const data = await res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const WelcomePage = ({ navigation }) => {
  const { setDevices, token, setUsers } = useContext(UserContext);

  useEffect(async () => {
    const devices = await getDevices(token);
    const users = await getUsers(token);
    setUsers(users.data);
    setDevices(devices.data);
  }, []);

  return (
    <View style={styles.container}>
      <TopView navigation={navigation} />
      <View style={styles.topView}>
        <View style={styles.middleView}>
          <Text style={styles.middleText}>
            The access control readers use credentials which can be cards that
            fit in your wallet. Our door readers can also use your smartphone to
            open the door.
          </Text>
        </View>
      </View>
      <ImageBackground source={HomeImg} resizeMode="cover" style={styles.img} />
      <View style={{ flex: 0.65, width: "100%" }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
    width: "100%",
    backgroundColor: "#fff",
  },
  topView: {
    flex: 0.4,
    flexDirection: "column",
    paddingHorizontal: 30,
    width: "100%",
  },
  middleView: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middleText: {
    lineHeight: 22,
    textAlign: "center",
    fontSize: 18,
  },
  img: {
    flex: 1,
    justifyContent: "center",
    width: 346,
    height: 313,
    position: "absolute",
    bottom: "10%",
    zIndex: 0,
    marginTop: 30,
  },
});

export default WelcomePage;
