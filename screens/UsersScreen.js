import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useContext } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import UserContainer from "../components/UserContainer";
import Btn1 from "../components/buttons/Btn1";
import client from "../client";

const getRfidCards = async (token) => {
  try {
    const res = await client.get("/rfid/", {
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

const UsersScreen = ({ navigation }) => {
  const { users, token, setTags } = useContext(UserContext);

  useEffect(() => {}, [users]);

  useEffect(async () => {
    const data = await getRfidCards(token);
    setTags(data.rfidTags);
  }, []);

  const renderItem = (i) => {
    const doorNames = i.item.accessibleDevices;
    return (
      <UserContainer
        name={`${i.item.fname} ${i.item.lname}`}
        firstDoor={doorNames[0]}
        secondDoor={doorNames[1]}
        identifier={i.item.identifier}
        navigation={navigation}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TopView navigation={navigation} label="List of Users" />
      <View style={styles.topView}>
        <NavigationBtn
          onPress={() => navigation.navigate("DoorReaders")}
          label="< DooReaders"
        />
        <NavigationBtn
          onPress={() => navigation.navigate("Rfid")}
          label="Rfid >"
        />
      </View>
      <View style={styles.usersContainer}>
        <FlatList
          style={styles.usersScroll}
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />
      </View>
      <View style={styles.bottomUsersContainer}>
        <Btn1
          text="add"
          navigation={navigation}
          route="AddUser"
          color="#fff"
          bgColor="#BF1363"
          onPress={() =>
            navigation.navigate("AddChange", { screens: "AddUser" })
          }
        />
      </View>
    </View>
  );
};

export default UsersScreen;

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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
    paddingRight: 22,
  },
  usersContainer: {
    flex: 0.8,
    width: "85%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#E5E5E5",
  },
  bottomUsersContainer: {
    flex: 0.1,
    minHeight: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
