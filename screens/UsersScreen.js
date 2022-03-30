import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useContext } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import UserContainer from "../components/UserContainer";
import Btn1 from "../components/buttons/Btn1";

const UsersScreen = ({ navigation }) => {
  const { devices, users } = useContext(UserContext);

  useEffect(() => {}, [users]);

  const renderItem = (i) => {
    const doorNames = [...devices.slice(0, 2)];
    console.log(i.item);
    return (
      <UserContainer
        name={`${i.item.fname} ${i.item.lname}`}
        doors={doorNames}
        identifier={i.item.identifier}
        navigation={navigation}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TopView navigation={navigation} label="List of users" />
      <View style={styles.topView}>
        <NavigationBtn
          onPress={() => navigation.navigate("DoorReaders")}
          label="< DooReaders"
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
    justifyContent: "center",
    paddingLeft: 22,
    // borderWidth: 1,
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
