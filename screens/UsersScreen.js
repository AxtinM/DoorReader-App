import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopView from "../components/TopView";
import NavigationBtn from "../components/buttons/NavigationBtn";
import UserContainer from "../components/UserContainer";
import Btn1 from "../components/buttons/Btn1";

const UsersScreen = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <TopView label="List of users" />
      <View style={styles.topView}>
        <NavigationBtn label="< DooReaders" />
      </View>
      <View style={styles.usersContainer}>
        <ScrollView style={styles.usersScroll}>
          {arr.map((user, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UserContainer name="Ahmed Ali" />
              <UserContainer name="Mostfa Jbar" />
            </View>
          ))}
        </ScrollView>
        <View style={styles.bottomUsersContainer} />
      </View>
      <Btn1 text="add" color="#fff" bgColor="#BF1363" />
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
  },
  topView: {
    flex: 0.08,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 22,
    // borderWidth: 1,
  },
  usersContainer: {
    flex: 0.75,
    width: "85%",
    backgroundColor: "#F5F5F5",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  bottomUsersContainer: {},
});
