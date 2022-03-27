import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import UserContainer from "../components/UserContainer";
import Btn1 from "../components/buttons/Btn1";
import client from "../client";

const gerReaders = async (token) => {
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

const DoorReadersScreen = ({ navigation }) => {
  const { token } = useContext(UserContext);
  const [readers, setReaders] = useState([]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(async () => {
    const res = await gerReaders(token);
    console.log(res);
  }, [readers]);

  return (
    <View style={styles.container}>
      <TopView navigation={navigation} label="List of DoorReaders" />
      <View style={styles.topView}>
        <NavigationBtn onPress={() => navigation.goBack()} label="Users >" />
      </View>
      <View style={styles.usersContainer}>
        <ScrollView style={styles.usersScroll}>
          {/* {users.map((user, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {index % 2 === 0 ? (
                <UserContainer
                  name={`${user.fname} ${user.lname}`}
                  key={index}
                />
              ) : (
                <></>
              )}
              {index % 2 === 1 ? (
                <UserContainer
                  name={`${user.fname} ${user.lname}`}
                  key={index}
                />
              ) : (
                <></>
              )}
            </View>
          ))} */}
        </ScrollView>
        <View style={styles.bottomUsersContainer}>
          <Btn1
            text="add"
            color="#fff"
            bgColor="#BF1363"
            onPress={() => navigation.navigate("AddDoorReader")}
          />
        </View>
      </View>
    </View>
  );
};

export default DoorReadersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: getStatusBarHeight(),
    backgroundColor: "#fff",
  },
  topView: {
    flex: 0.08,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 22,
  },
  usersContainer: {
    flex: 0.8,
    width: "85%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bottomUsersContainer: {
    flex: 0.1,
    minHeight: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    // borderWidth:1
  },
});
